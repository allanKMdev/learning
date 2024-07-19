

import React, { useState, useEffect } from 'react';

const Movable = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const eventBoxRef = React.createRef();

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
    setStartY(event.clientY);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    setOffsetX(offsetX + deltaX);
    setOffsetY(offsetY + deltaY);
    setStartX(event.clientX);
    setStartY(event.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const eventBox = eventBoxRef.current;
    if (eventBox) {
      eventBox.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        eventBox.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, );

  const boxStyle = {
    transform: `translate(${offsetX}px, ${offsetY}px)`,
    cursor: isDragging ? 'grabbing' : 'grab',
  };

  // Replace with your actual event data
  const events = [
    { title: "Concert Night", date: "2024-07-26" },
    { title: "Movie Marathon", date: "2024-08-10" },
    { title: "Workshop on Creativity", date: "2024-08-17" }
  ];

  return (
    <div ref={eventBoxRef} className="movable-event-box" style={boxStyle}>
      <h2>Upcoming Events</h2>
      <div className="event-list">
        {events.map((event) => (
          <div key={event.title} className="event-item">
            <h3>{event.title}</h3>
            <p>{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movable;
