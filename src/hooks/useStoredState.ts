'use client'
import { useCallback, useEffect, useState } from "react"

export function useStoredState<T>(key: string, initialState: T): [T, (value: T) => void, boolean] {
  const [state, setState] = useState<T>(initialState)
  const [isLoading, setIsLoading] = useState(true)
  const prefix = 'planejei:'
  const keyWithPrefix = `${prefix}${key}`

  const setStoredState = useCallback((value: T) => {
    setState(value)
    if(typeof window !== 'undefined'){
      localStorage.setItem(keyWithPrefix, JSON.stringify(value))
    }
  }, [keyWithPrefix])
    

  useEffect(() => {
    if(typeof window !== 'undefined'){
      const storedState = localStorage.getItem(keyWithPrefix)
      if(storedState) {
        setState(JSON.parse(storedState))
      }

      setIsLoading(false)
    }
  }, [keyWithPrefix])

  return [state, setStoredState, isLoading]
}