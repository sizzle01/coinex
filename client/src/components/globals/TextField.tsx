import React from 'react'

interface inputProps{
    placeholder: string
    type: string
    step?: string
    value?: string
    name: string
    handleChange?: ()=>void
}

const TextField: React.FC<inputProps> = ({placeholder, type, value,name, handleChange}) => {
  return (
    <div>
        <input
        onChange={handleChange}
    placeholder={placeholder}
    name={name}
    type={type}
    step="0.0001"
    value={value}
    className="my-2 w-full rounded-sm p-2 outline-none border-none text-sm "
  />
    </div>
  )
}

export default TextField