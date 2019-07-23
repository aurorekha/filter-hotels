import React, { useState, useEffect } from 'react';

import { hotelData, hotelFilters } from './data.js';

import Results from './components/Results.js';
import FilterSelect from './components/FilterSelect.js';

import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [filter, onSelectFilter] = useState('');

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
    onSelectFilter(event.target.value);
    const results = await hotelData();
    const newResults = results.filter(d => d.facilities.indexOf(event.target.value) !== -1);
    setData({ filters: data.filters, results: newResults });
  };

  const clearFilter = async () => {
    onSelectFilter('');
    const results = await hotelData();
    setData({ filters: data.filters, results });
  };

  return (
    <div className="App">
      <FilterSelect
        facilities={data.filters}
        filters={filterFacility}
        selectedFacility={filter}
        clearFilter={clearFilter}
       />
      <Results results={data.results} />
    </div>
  );
}

export default App;
