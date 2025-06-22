import React, { useEffect, useState } from 'react';
import './CustomCursor.css';  // Custom styles for the cursor

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update cursor position when mouse moves
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    // Add event listener for mouse movement
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener when component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
