import React from 'react'

interface inputProps{
    placeholder: string
    type: string
    step?: string
    value: string
    name: string
    onChange?: ()=>void
}

const TextField: React.FC<inputProps> = ({placeholder, type, value,name, onChange}) => {
  return (
    <div>
        <input
        onChange={onChange}
    placeholder={placeholder}
    name={name}
    type={type}
    step="0.0001"
    value={value}
    className="my-2 w-full rounded-sm p-2 outline-none  text-white border-none text-sm white-glassmorphism"
  />
    </div>
  )
}

export default TextField