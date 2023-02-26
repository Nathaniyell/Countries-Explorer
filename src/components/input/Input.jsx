import React, { useState, useEffect } from 'react';
import inputStyle from './input.module.css';
import { BiSearch } from 'react-icons/bi';
import Countries from '../countries/Countries';

const Input = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    async function fetchData() {
      let searchEndpoint = "all";
      if (searchTerm.trim().length > 0) {
        searchEndpoint = `name/${searchTerm}`;
      } else if (selectedRegion) {
        searchEndpoint = `region/${selectedRegion}`;
      }
      try {
        const response = await fetch(`https://restcountries.com/v3.1/${searchEndpoint}`);
        const data = await response.json();
        // sort the countryList array alphabetically by name
        setCountryList(data.sort((a, b) => a.name.common.localeCompare(b.name.common)));
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [searchTerm, selectedRegion]);

  function handleSearchInputChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleRegionChange(e) {
    setSelectedRegion(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <form className={inputStyle.form} onSubmit={handleFormSubmit}>
        <div className={inputStyle.inputDiv}>
          <input
            value={searchTerm}
            onChange={handleSearchInputChange}
            placeholder='Please search here'
          />
          <div className={inputStyle.search}><BiSearch /></div>
        </div>
        <select
          className={inputStyle.select}
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value=''>Filter by region</option>
          <option value='Africa'>Africa</option>
          <option value='America'>America</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
        </select>
      </form>
      <Countries countryList={countryList} />
    </>
  );
};

export default Input;

/*The sort() method takes a function that compares two elements of the array and returns a negative number if the first element should come before the second, a positive number if the first element should come after the second, or 0 if they are equal. In this case, we're using the localeCompare() method of the string object to compare the common names of the countries.*/



