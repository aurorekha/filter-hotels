import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import '../styles/results.scss';

const Results = ({ results }) => {
  return (
    <div>
      {results.map((result, index) => (
        <Container key={index}>
          <ul className="hotelList">
            <li>
              <h2>{result.name}</h2>
            </li>
            <li>
              <h3>{result.facilities}</h3>
            </li>
            <li>
              <h4>{result.starRating}</h4>
            </li>
          </ul>
        </Container>
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
