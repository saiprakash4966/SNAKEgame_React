import React from 'react';

const Snake = ({ snake }) => {
  return (
    <div>
      {snake.map((segment, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: segment.y,
            left: segment.x,
            width: '20px',
            height: '20px',
            backgroundColor: 'green',
            border: '1px solid black',
          }}
        ></div>
      ))}
    </div>
  );
};

export default Snake;
