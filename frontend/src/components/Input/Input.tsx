import React, { FormEvent, useState } from 'react'

export interface IInputProps {
  initialValue: string
  onSubmit: (value: string) => void
  isEditable: boolean
}

const Input = ({initialValue, onSubmit, isEditable}: IInputProps) => {
  const [value, setValue] = useState(initialValue);

  if (!isEditable) return <p data-testid="text-input">{value}</p>


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(value)
  }


  return (
    <form onSubmit={handleSubmit} >
    <input data-testid="editable-input" type="text" value={value} required onChange={(e)=> {
      setValue(e.target.value)
    }} />
    </form>
  )
}


export default Input