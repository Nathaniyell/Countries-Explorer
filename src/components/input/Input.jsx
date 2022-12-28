import React, { useState } from 'react'
import inputStyle from './input.module.css'
import { BiSearch } from 'react-icons/bi'

const Input = () => {
  const [formData, setFormData] = useState(
    {
      name: '',
      region: ''
    }
  )

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: [event.target.value]
      }
    })
    console.log(formData.name)
  }
  return (
    <form className={inputStyle.form}>
      <div className={inputStyle.inputDiv}>
        <input
          type='text'
          placeholder="Search for a Country"
          onChange={handleChange}
          name='name'
          value={formData.name}
        />
        <div className={inputStyle.search}> <BiSearch /></div>
      </div>
      <select 
        className={inputStyle.select}
        onChange={handleChange}
        name='region'
        value={formData.region}
      >
        <option value=''>Filter by region</option>
        <option value='Africa' >Africa</option>
        <option value='America' >America</option>
        <option value='Asia' >Asia</option>
        <option value='Europe' >Europe</option>
      </select>
    </form>

  )
}
export default Input