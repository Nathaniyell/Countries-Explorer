import React, { useState } from 'react'
import styles from './countries.module.css'


const Countries = ({ countryList = [] }) => {
  if (!countryList.length){return null} ;

  const renderCountryCard = (country) => {
    const { name: { official }, flags, population, region, capital } = country;
    return (
      <div className={styles.container} key={official}>
        <div className={styles.image}>
          <img src={flags.png} alt={official} />
        </div>
        <div className={styles.text}>
          <h3>{official}</h3>
          <p>
            <strong>Population:</strong> {population}
          </p>
          <p>
            <strong>Region:</strong> {region}
          </p>
          <p>
            <strong>Capital:</strong> {capital}
          </p>
        </div>
      </div>
    );
  };

  let countryCards;
  if (countryList.length === 1) {
    countryCards = renderCountryCard(countryList[0]);
  } else {
    countryCards = countryList.map(renderCountryCard);
  }

  return <section>{countryCards}</section>;
};






export default Countries

