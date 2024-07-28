'use client'
import { useEffect, useState } from "react"

export function useStoredState<T>(key: string, initialState: T): [T, (value: T) => void] {
  const [state, setState] = useState<T>(initialState)
  const prefix = 'planejei:'
  const keyWithPrefix = `${prefix}${key}`

  const setStoredState = (value: T) => {
    setState(value)
    if(typeof window !== 'undefined'){
      localStorage.setItem(keyWithPrefix, JSON.stringify(value))
    }
  }

  useEffect(() => {
    if(typeof window !== 'undefined'){
      const storedState = localStorage.getItem(keyWithPrefix)
      if(storedState) {
        setState(JSON.parse(storedState))
      }
    }
  }, [keyWithPrefix])

  return [state, setStoredState]
}