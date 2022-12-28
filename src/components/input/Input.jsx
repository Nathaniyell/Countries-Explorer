import React, { useState, useEffect } from 'react'
import inputStyle from './input.module.css'
import { BiSearch } from 'react-icons/bi'

const Input = () => {
  const [formData, setFormData] = useState({name: '', region: ''})
  const [term, setTerm] = useState('all')
  const [fetchMe, setFetchMe] = useState(`https://restcountries.com/v3.1/${term}`)
  
  function getData() {
   if(formData.name === ''){
     setTerm('all')     
   }else if(formData.name !== ''){
     setTerm('name') 
       &&  
       setFetchMe(`https://restcountries.com/v3.1/${term}/${formData.name}`)
   }else if(formData.region !== '') {
     setTerm('region')
     &&
       setFetchMe(`https://restcountries.com/v3.1/${term}/${formData.region}`)
   }

      fetch(fetchMe)
      .then(res => res.json())
      .then(data => {
        con
      })
      .catch(err => console.log(err))
      }

  
  useEffect(() => {
    const timedData = setTimeout(getData(), 5000)
    
    return ()=>{
      clearTimeout(timedData)
    }
  }, [])

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: [event.target.value]
      }
    })
    console.log(formData.name)
  }
  function formSubmitHandler(event) {
    event.preventDefault()
    
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        name: '',
        region: ''
      }
    })
  }

  return (
    <form className={inputStyle.form} onSubmit={formSubmitHandler} >
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