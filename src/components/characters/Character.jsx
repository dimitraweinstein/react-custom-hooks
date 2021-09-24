import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => (
  <figure
    aria-label="character"
    role="character">
    <img src={image} alt={name} />
    <figcaption>
      {name}
    </figcaption>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
