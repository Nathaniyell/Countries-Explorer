import React, { useState, useEffect } from 'react'
import inputStyle from './input.module.css'
import { BiSearch } from 'react-icons/bi'

const Input = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [ filter, setFilter ] = useState('')
  const [term, setTerm] = useState('name')
  const [fetchMe, setFetchMe] = useState(`https://restcountries.com/v3.1/${term}`)

function handleChange(e){
  setSearchTerm(e.target.value)
  console.log(searchTerm)
}

  
  function getData() {
   if(searchTerm === ''){
     setTerm('all')     
   }else{
     setTerm('name') 
       &&  
       setFetchMe(`https://restcountries.com/v3.1/${term}/${searchTerm}`)
   }
      fetch(fetchMe)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err))
      }

  
  useEffect(() => {
    const timedData = setTimeout(getData(), 5000)
    
    return ()=>{
      clearTimeout(timedData)
    }
  }, [])


  function formSubmitHandler(event) {
    event.preventDefault()
     }

  return (
    <form className={inputStyle.form} onSubmit={formSubmitHandler} >
      <div className={inputStyle.inputDiv}>
       <input 
         value={searchTerm}
         />
        <div className={inputStyle.search}> <BiSearch /></div>
      </div>
      <select
        className={inputStyle.select}
        value={filter}
        onChange={(e)=>{setFilter(e.target.value)}}
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