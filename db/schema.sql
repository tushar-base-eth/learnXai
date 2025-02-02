-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Users table (extends Supabase auth.users)
create table if not exists profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  xp integer default 0
);

-- Simulations table
create table if not exists simulations (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  initial_scenario text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Simulation steps table
create table if not exists simulation_steps (
  id uuid default uuid_generate_v4() primary key,
  simulation_id uuid references simulations on delete cascade,
  content text not null,
  options jsonb not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- User progress table
create table if not exists user_progress (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles on delete cascade,
  simulation_id uuid references simulations on delete cascade,
  current_step uuid references simulation_steps,
  completed boolean default false,
  score integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Feedback logs table
create table if not exists feedback_logs (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles on delete cascade,
  simulation_id uuid references simulations on delete cascade,
  step_id uuid references simulation_steps,
  choice jsonb,
  ai_feedback text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table profiles enable row level security;
alter table simulations enable row level security;
alter table simulation_steps enable row level security;
alter table user_progress enable row level security;
alter table feedback_logs enable row level security;

-- Create policies
create policy "Public profiles are viewable by everyone"
  on profiles for select
  using ( true );

create policy "Users can insert their own profile"
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile"
  on profiles for update
  using ( auth.uid() = id );

-- Simulations are viewable by everyone
create policy "Simulations are viewable by everyone"
  on simulations for select
  using ( true );

-- Progress visible to own user
create policy "Users can view own progress"
  on user_progress for select
  using ( auth.uid() = user_id );

create policy "Users can insert own progress"
  on user_progress for insert
  with check ( auth.uid() = user_id );

create policy "Users can update own progress"
  on user_progress for update
  using ( auth.uid() = user_id );