import React from 'react';
import PropTypes from 'prop-types';


const CharacterDetail = ({ name, image }) => (
  <div role="detail view">
    <img src={image} alt={name} />
    <h2>{name}</h2>
  </div>
);

CharacterDetail.propTypes = {
  character: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default CharacterDetail;
