import React from 'react'

interface CustomInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input: React.FC<CustomInput> = ({ id, label, onChange, type, }) => {
  // console.log({ props });
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        className="inputs"
        onChange={onChange}
      />
    </>
  )
}

export default Input