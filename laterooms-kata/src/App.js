import React, { useState, useEffect } from 'react';

import { hotelData, hotelFilters } from './data.js';

import Results from './components/Results.js';
import FilterSelect from './components/FilterSelect.js';

import './App.css';

function App() {

  const [data, newData] = useState([]);
  const [filter, onSelectFilter] = useState('');

  useEffect(() => {
    const getData = async () => {
      const results = await hotelData();
      const filters = await hotelFilters();
      newData({ results, filters });
    };
    getData();
  }, []);

  const filterFacility = async (event) => {
    event.persist();
    onSelectFilter(event.target.value);
    const results = await hotelData();
    const newResults = results.filter(result => result.facilities.indexOf(event.target.value) !== -1);
    newData({ filters: data.filters, results: newResults });
  };

  const clearFilter = async () => {
    onSelectFilter('');
    const results = await hotelData();
    newData({ filters: data.filters, results });
  };

  return (
    <div className="App">
      <FilterSelect
        facilities={data.filters}
        filter={filterFacility}
        selectedFilter={filter}
        clearFilter={clearFilter}
       />
      <Results results={data.results} />
    </div>
  );
}

export default App;
