import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'

function Home() {
    const [countries, setCountries] = useState([]);
    // const [search, setSearch] = useState("");

    const getCountries = async () => {
      fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
          .then(data => {
               const newData = data.map(({ name, region, population, languages, flag }) => ({
                  name: name.common,
                  region,
                  population,
                //   languages: languages,
                  flags: flag.png,
              }));
               setCountries(newData);
          }    
              
        );
    };
     console.log(countries);

    useEffect(() => {
        getCountries();
    }, []);


    return (
      <div className="home-page">
          <Navbar />
            <div className="body">
              <table className='table'>
                    <thead className="thead-dark">
                  <tr>
                      <th  scope="col">Flag</th>
                      <th  scope="col">Name</th>
                      <th  scope="col">Region</th>
                      <th  scope="col">Population</th>
                      {/* <th  scope="col">Languages</th> */}
                      
                  </tr>
              </thead>
                <tbody>
               {countries.map((country) => (
                                    <tr key={country.cca3}>
                                <td>
                                    <img src={country.flag} alt="" />
                                </td>
                                    <td>{country.name}</td>
                                    <td>{country.region}</td>
                                    <td>{country.population}</td>
                                    </tr>
                                
                            ))}
                    </tbody>
              </table>
              
          </div>
      </div>
  )
}

export default Home