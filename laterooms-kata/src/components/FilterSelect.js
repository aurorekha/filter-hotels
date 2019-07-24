import React from 'react';
import PropTypes from 'prop-types';
import { Form, Col, Button } from 'react-bootstrap';

import '../styles/filterSelect.scss';

const FilterSelect = ({ facilities, filters, selectedFacility, clearFilter }) => {
  return(
    <Form.Group as={Form.Row} className="mb-0 filterSelect">
      <Form.Label column md={2} xs={3}className="text-center">
        <h5>Filter Facilities</h5>
      </Form.Label>
      <Col md={9} xs={6}>
        <Form.Control
          as="select"
          onChange={e => filters(e)}
          value={selectedFacility}
          className="filter__facilities-dropdown text-center"
        >
          <option disabled readOnly value="">
            Please select a facility
          </option>
          {!facilities.length ? 'No facilities available' :
          facilities.map((facility) => (
              <option key={facility}>{(facility)}</option>
          ))}
        </Form.Control>
      </Col>
      <Col className="text-center" md={1} xs={3}>
        <Button
          variant="primary"
          onClick={() => clearFilter()}
          disabled={selectedFacility === ''}
        >Clear</Button>
      </Col>
    </Form.Group>
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
