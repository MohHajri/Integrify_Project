import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';

const Home = () => {
    const [countries, setCountries] = useState([]);
     const [filteredCountries, setFilteredCountries] = useState([]);
    const [loading, setLoading] = useState(true);

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
        setFilteredCountries(newData);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
    }, []);

     const handleSearch = (searchTerm) => {
        const filteredData = countries.filter((country) =>
            country.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCountries(filteredData);
    };

  return (
    <div className="home-page">
          <Navbar onSearch={handleSearch} />
      {loading ? (
        <div>Loading...</div>
      ) : (
          <Pagination data={countries} filteredCountries={filteredCountries} />
          )}
  </div>
);
}

export default Home;