
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulated fetch from backend (replace with actual API call)
    axios.get('http://localhost:5000/events')
      .then(res => {
        setEvents(res.data);
      })
      .catch(err => {
        console.error('Error fetching events:', err);
      });
  }, []);

  return (
    <div className="flex flex-col">
      
      <div className="overflow-y-auto h-full max-h-[600px]">
        <ul className="list-none p-4">
          {events.map(event => (
            <li key={event.id} className="flex items-center py-2 border-b border-gray-200 hover:bg-gray-100">
              <Link to={`/events/${event.id}`} className="flex-grow mr-4">
                {event.title} - {event.location}
              </Link>
              
            </li>
          ))}
        </ul>
      </div>

      
      <Link to="/events/create">
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded self-end mt-4">
          Create Event
        </button>
      </Link>
    </div>
  );
};

export default EventList;
