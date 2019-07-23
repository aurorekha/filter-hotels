import React from 'react';
import PropTypes from 'prop-types';

const FilterSelect = ({ facilities, filters, selectedFacility, clearFilter }) => {
  return(
    <div>
      <select
        onChange={e => filters(e)}>
      <option>Select a facility</option>
      {!facilities.length ? 'No facilities available' :
      facilities.map((facility) => (
          <option key={facility}>{(facility)}</option>
      ))}
      </select>
      <button onClick={() => clearFilter()}>Clear</button>
    </div>
  )
}

FilterSelect.defaultProps = {
  facilities: [],
  selectedFacility: '',
}

FilterSelect.propTypes = {
  facilities: PropTypes.arrayOf(PropTypes.string),
  filters: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
  selectedFacility: PropTypes.string,
}

export default FilterSelect;
