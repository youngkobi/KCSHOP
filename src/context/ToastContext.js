// 🆕 NEW — moved context into its own file to fix the Fast Refresh error
import { createContext, useContext } from 'react'

export const ToastContext = createContext(null)

export function useToastContext() {
  return useContext(ToastContext)
}