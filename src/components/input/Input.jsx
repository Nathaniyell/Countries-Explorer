import React, { useState, useEffect } from 'react';
import inputStyle from './input.module.css';
import { BiSearch } from 'react-icons/bi';
import Countries from '../countries/Countries';

const Input = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [endpoint, setEndPoint] = useState('all')

  useEffect(() => {
    if (!searchTerm && !filter) {
      return;
    }

    // let endpoint = "all";
    if (searchTerm.trim().length > 0) {
      setEndPoint(`name/${searchTerm}`);
    } else if (filter) {
       setEndPoint(`region/${filter}`);
    }

    fetch(`https://restcountries.com/v3.1/${endpoint}`)
      .then(res => res.json())
      .then(data => setAllCountries(data))
      .catch(err => console.error(err));
  }, [searchTerm, filter, endpoint]);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    // setSearchTerm("")
  }

  return (
    <>
      <form className={inputStyle.form} onSubmit={formSubmitHandler}>
        <div className={inputStyle.inputDiv}>
          <input
            value={searchTerm}
            onChange={handleChange}
            placeholder='Please search here'
          />
          <div className={inputStyle.search}><BiSearch /></div>
        </div>
        <select
          className={inputStyle.select}
          value={filter}
          onChange={(e) => { setFilter(e.target.value) }}
        >
          <option value=''>Filter by region</option>
          <option value='Africa'>Africa</option>
          <option value='America'>America</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
        </select>
      </form>
              <Countries countryList={allCountries} />
     
    </>
  );
};

export default Input;

