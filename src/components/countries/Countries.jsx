import React from 'react'
import styles from './countries.module.css'

const Countries = (props) => {
  const countryArray = props.countryList 
  // if (!countryArray) {
  //   return
  // }
     
  const cards = countryArray?.map((country) => {
    return <div className={styles.container} key={country.name.official}>
      <div className={styles.image}>
        <img src={country.flags.png} alt={country.name.official} />
      </div>
     <div className={styles.text}>
      <h3>{country.name.official}</h3>
      <p><strong>Population:</strong> {country.population}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital}</p>
     </div>
    </div>
  })
 // console.log(countryArray)
   return (
    <section>
      {cards}
    </section>
  )
}

export default Countries

