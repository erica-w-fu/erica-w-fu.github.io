import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './CustomCursor.css';

function CustomCursor() {
  const location = useLocation();
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const hoverTimeout = useRef(null);

  // Reset hover state on route change to avoid stuck large cursor
  useEffect(() => {
    setIsHoveringLink(false);
  }, [location]);

  useEffect(() => {
    function onMouseMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    function onMouseOver(e) {
      if (e.target.tagName === 'A' || e.target.closest('a')) {
        if (hoverTimeout.current) {
          clearTimeout(hoverTimeout.current);
          hoverTimeout.current = null;
        }
        setIsHoveringLink(true);
      }
    }

    function onMouseOut(e) {
      if (e.target.tagName === 'A' || e.target.closest('a')) {
        hoverTimeout.current = setTimeout(() => {
          setIsHoveringLink(false);
        }, 50);
      }
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
      }
    };
  }, []);

  // return (
  //   <div
  //     className="custom-cursor"
  //     style={{
  //       left: position.x,
  //       top: position.y,
  //       transform: isHoveringLink
  //         ? 'translate(-50%, -50%) scale(2)'
  //         : 'translate(-50%, -50%) scale(1)',
  //     }}
  //   />
  // );
  return (
    <div
      className={`custom-cursor ${isHoveringLink ? 'is-hovering-link' : ''}`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );

}

export default CustomCursor;
