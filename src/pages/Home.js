import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
<<<<<<< HEAD
import Pagination from '../components/Pagination';

const Home = () => {
  const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
=======

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
>>>>>>> 47a460139db0498be73235930a86a1d3e707e2fe
  

    useEffect(() => {
    const fetchData = async () => {
      try {
        const [flagResp, capResp, popResp] = await Promise.all([
          axios.get('https://countriesnow.space/api/v0.1/countries/flag/images'),
          axios.get('https://countriesnow.space/api/v0.1/countries/capital'),
          axios.get('https://countriesnow.space/api/v0.1/countries/population'),
        ]);

        const flagData = flagResp.data.data;
        const capData = capResp.data.data;
        const popData = popResp.data.data;

        const newData = flagData.map(flag => {
          const cap = capData.find(c => c.name === flag.name);
          const pop = popData.find(p => p.code === flag.iso3);
          const latestPop =  pop && pop.populationCounts
          ? pop.populationCounts.sort((a, b) => b.year - a.year)[0].value
          : null;

          return {
            flag: flag.flag,
            name: flag.name,
            capital: cap.capital,
            population: latestPop,
          };
        });

        setCountries(newData);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
<<<<<<< HEAD
    }, []);
=======
  }, []);
>>>>>>> 47a460139db0498be73235930a86a1d3e707e2fe

  return (
    <div className="home-page">
      <Navbar />
      {loading ? (
        <div>Loading...</div>
      ) : (
<<<<<<< HEAD
          <Pagination data={countries} />
          )}
  </div>
);
}
=======
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Flag</th>
              <th>Name</th>
              <th>Capital</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {countries.map(country => (
              <tr key={country.name}>
                <td>
                  <img src={country.flag} alt={country.name} />
                </td>
                <td>{country.name}</td>
                <td>{country.capital}</td>
                <td>{country.population}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
>>>>>>> 47a460139db0498be73235930a86a1d3e707e2fe

export default Home;