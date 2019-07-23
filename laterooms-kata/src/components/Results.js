import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ results }) => {
  return (
    <div>
      {results.map((result, index) => (
        <div key={index}>
          <h2>{result.name}</h2>
          <h3>{result.facilities}</h3>
          <h4>{result.starRating}</h4>
        </div>
      ))}
    </div>
  );
};

Results.defaultProps = {
  results: [],
}

Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      starRating: PropTypes.number,
      facilities: PropTypes.arrayOf(PropTypes.string),
    })
  )
}
export default Results;
