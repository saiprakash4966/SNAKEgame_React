import React from 'react';

const Food = ({ food }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: food.y,
        left: food.x,
        width: '20px',
        height: '20px',
        backgroundColor: 'red',
        borderRadius: '50%',
      }}
    ></div>
  );
};

export default Food;
