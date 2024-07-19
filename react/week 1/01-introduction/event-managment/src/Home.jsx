

function Home()  {
  return (
    <div >
      <h1 >Welcome to The Kaleidoscope Collective  </h1>
      
      <p>Explore events, create new events, and manage your event details.</p>
    </div>
  );
}

export default Home;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import EventBox from './EventBox';

// const Home = () => {
//   const [events, setEvents] = useState<Event[]>([]);

//   useEffect(() => {
//     // Simulated fetch from backend (replace with actual API call)
//     axios.get('http://localhost:5000/events')
//       .then(res => {
//         setEvents(res.data);
//       })
//       .catch(err => {
//         console.error('Error fetching events:', err);
//       });
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1>Welcome to The Kaleidoscope Collective</h1>
//       <p>Explore events, create new events, and manage your event details.</p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {events.map(event => (
//           <EventBox key={event.id} event={event} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;