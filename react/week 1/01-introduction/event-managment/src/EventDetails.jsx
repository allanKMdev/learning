  import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Simulated fetch from backend (replace with actual API call)
    axios.get(`http://localhost:5000/events/${id}`)
      .then(res => {
        setEvent(res.data);
      })
      .catch(err => {
        console.error('Error fetching event details:', err);
      });
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div>
      <h2>{event.title}</h2>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Capacity:</strong> {event.capacity}</p>
      <p><strong>Description:</strong> {event.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default EventDetails;
