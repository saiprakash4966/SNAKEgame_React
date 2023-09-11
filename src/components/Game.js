import React, { useState, useEffect } from 'react';
import Snake from './Snake';
import Food from './Food';
import Score from './Score';

const SnakeGame = () => {
  // Initialize game state
  const [snake, setSnake] = useState([]);
  const [food, setFood] = useState({ x: 10, y: 10 });
  const [direction, setDirection] = useState('RIGHT');
  const [score, setScore] = useState(0);
  

  // Add event listeners for arrow keys to change direction
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection('UP');
          break;
        case 'ArrowDown':
          setDirection('DOWN');
          break;
        case 'ArrowLeft':
          setDirection('LEFT');
          break;
        case 'ArrowRight':
          setDirection('RIGHT');
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  // Game logic (updating snake, checking collisions, eating food, etc.)

  return (
    <div>
      <Score score={score} />
      <Snake snake={snake} />
      <Food food={food} />
    </div>
  );
};

export default SnakeGame;
