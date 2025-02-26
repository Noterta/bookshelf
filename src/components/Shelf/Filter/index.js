import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateFilters } from '../../../services/filters/actions';
import Checkbox from '../../Checkbox';


import './style.scss';

const availableSizes = ['Мягкая обложка', 'Твёрдая обложка', 'Электронная версия'];

const Filter = props => {
  const selectedCheckboxes = new Set();

  const toggleCheckbox = label => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }

    props.updateFilters(Array.from(selectedCheckboxes));
  };

  const createCheckbox = label => (
    <Checkbox
      classes="filters-available-size"
      label={label}
      handleCheckboxChange={toggleCheckbox}
      key={label}
    />
  );

  const createCheckboxes = () => availableSizes.map(createCheckbox);

  return (
    <div className="filters">
      <h4 className="title">Версии: </h4>
      {createCheckboxes()}
    </div>
  );
};

Filter.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  filters: PropTypes.array
};

export default connect(
  null,
  { updateFilters }
)(Filter);
