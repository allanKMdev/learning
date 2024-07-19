import React from 'react';
import { Link } from 'react-router-dom';

const EventBox = ({ event }: { event: Event }) => {
  return (
    <div className="w-full max-w-sm p-4 bg-white rounded shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300 ease-in-out">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-40 object-cover rounded-t-md"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-2">
          {event.date} at {event.time} - {event.venue}
        </p>
        <Link to={event.ticketUrl} target="_blank" rel="noreferrer" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Tickets
        </Link>
      </div>
    </div>
  );
};

export default EventBox;
