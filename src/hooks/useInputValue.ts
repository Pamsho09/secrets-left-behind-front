import { useState, useEffect } from 'react'

const useInputValue = (initialState:any) => {
  const [valueInput, setValueInput] = useState(initialState)
  useEffect(() => {
      setValueInput(initialState)
  }, [initialState])
  const onChange = (event:any) => {
    setValueInput(event.target.value)
  }
  return {
    valueInput, onChange,
  }
}

export default useInputValue