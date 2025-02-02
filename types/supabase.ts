// Remove import since Json type is defined locally in this file

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          created_at: string
          updated_at: string
          xp: number
        }
        Insert: {
          id: string
          username?: string | null
          created_at?: string
          updated_at?: string
          xp?: number
        }
        Update: {
          id?: string
          username?: string | null
          created_at?: string
          updated_at?: string
          xp?: number
        }
      }
      simulations: {
        Row: {
          id: string
          title: string
          description: string | null
          initial_scenario: string
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          initial_scenario: string
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          initial_scenario?: string
          created_at?: string
        }
      }
      simulation_steps: {
        Row: {
          id: string
          simulation_id: string
          content: string
          options: Json
          created_at: string
        }
        Insert: {
          id?: string
          simulation_id: string
          content: string
          options: Json
          created_at?: string
        }
        Update: {
          id?: string
          simulation_id?: string
          content?: string
          options?: Json
          created_at?: string
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          simulation_id: string
          current_step: string | null
          completed: boolean
          score: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          simulation_id: string
          current_step?: string | null
          completed?: boolean
          score?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          simulation_id?: string
          current_step?: string | null
          completed?: boolean
          score?: number
          created_at?: string
          updated_at?: string
        }
      }
      feedback_logs: {
        Row: {
          id: string
          user_id: string
          simulation_id: string
          step_id: string
          choice: Json
          ai_feedback: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          simulation_id: string
          step_id: string
          choice: Json
          ai_feedback: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          simulation_id?: string
          step_id?: string
          choice?: Json
          ai_feedback?: string
          created_at?: string
        }
      }
    }
  }
}