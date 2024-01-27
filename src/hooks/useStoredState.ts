'use client'
import { useEffect, useState } from "react"

export function useStoredState<T>(key: string, initialState: T): [T, (value: T) => void] {
  const [state, setState] = useState<T>(initialState)

  const setStoredState = (value: T) => {
    setState(value)
    if(typeof window !== 'undefined'){
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  useEffect(() => {
    if(typeof window !== 'undefined'){
      const storedState = localStorage.getItem(key)
      if(storedState) {
        setState(JSON.parse(storedState))
      }
    }
  }, [key])

  return [state, setStoredState]
}