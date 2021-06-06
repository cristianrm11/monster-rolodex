import React from 'react';

import './card.styles.css';

export const Card = ({ monster }) => {
  return (
    <div className='card-container'>
      <h2>{monster.name}</h2>
    </div>
  );
};
