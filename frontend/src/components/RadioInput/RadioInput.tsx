import React, { FormEvent, useState } from 'react'

export interface IOptions {
  name: string
}

export interface IRadioInputProps {
  initialValue: string
  onSubmit: (value: string) => void
  isEditable: boolean
  options: IOptions[]
}

const RadioInput = ({initialValue, options, onSubmit, isEditable}: IRadioInputProps) => {
  const [value, setValue] = useState(initialValue);

  if (!isEditable) return <p>{value}</p>


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(value)
  }

  const handleOnChange = (e: any) => {
    setValue(e.target.value)
  }


  return (
    <form onSubmit={handleSubmit} className="flex flex-row items-center">
      {options.map((item, i)=> {
        return (
          <>
            <input name="radio-input" key={item.name} id={item.name} type="radio" value={item.name} onChange={(e)=> handleOnChange(e)} />
            <label htmlFor={item.name}>{item.name}</label>
          </>
        )
      })}
    </form>
  )
}


export default RadioInput