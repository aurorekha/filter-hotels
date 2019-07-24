import React, { useState, useEffect } from 'react';
import { hotelData, hotelFilters } from './data.js';
import { Container } from 'react-bootstrap';

import Results from './components/Results.js';
import FilterSelect from './components/FilterSelect.js';

import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getData = async () => {
      const results = await hotelData();
      const filters = await hotelFilters();
      setData({ results, filters });
    };
    getData();
  }, []);

  const filterFacility = async event => {
    event.persist();
    setFilter(event.target.value);
    const results = await hotelData();
    const newResults = results.filter(result => result.facilities.indexOf(event.target.value) !== -1);
    setData({ filters: data.filters, results: newResults });
  };

  const clearFilter = async () => {
    setFilter('');
    const results = await hotelData();
    setData({ filters: data.filters, results });
  };

  return (
    <Container className="App">
      <FilterSelect
        facilities={data.filters}
        filters={filterFacility}
        selectedFacility={filter}
        clearFilter={clearFilter}
       />
      <Results results={data.results} />
    </Container>
  );
}

export default App;
