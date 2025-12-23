/**
 * API Related Types
 * Types for API requests, responses, and error handling
 */

export interface ApiError {
  status: number
  message: string
  data?: unknown
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: ApiError
}
