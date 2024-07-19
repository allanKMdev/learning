// import React, { useState } from 'react';
// import axios from 'axios';

// const EventForm = () => {
//   const [eventData, setEventData] = useState({
//     title: '',
//     capacity: '',
//     location: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEventData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulated POST request to create a new event
//     axios.post('http://localhost:5000/events', eventData)
//       .then(res => {
//         console.log('Event created:', res.data);
//         // Reset form fields after submission
//         setEventData({
//           title: '',
//           capacity: '',
//           location: '',
//           description: ''
//         });
//         // Redirect to event list or show success message
//         // Example: history.push('/events');
//       })
//       .catch(err => {
//         console.error('Error creating event:', err);
//       });
//   };

//   return (
//     <div>
//       <h2 >Create Event</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title:</label>
//           <input
//             type="text"
//             name="title"
//             value={eventData.title}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Capacity:</label>
//           <input
//             type="number"
//             name="capacity"
//             value={eventData.capacity}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Location:</label>
//           <input
//             type="text"
//             name="location"
//             value={eventData.location}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea
//             name="description"
//             value={eventData.description}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Create Event</button>
//       </form>
//     </div>
//   );
// };

// export default EventForm;


import React, { useState } from 'react';
import axios from 'axios';

const EventForm = () => {
  const [eventData, setEventData] = useState({
    title: '',
    capacity: '',
    location: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated POST request to create a new event
    axios
      .post('http://localhost:5000/events', eventData)
      .then((res) => {
        console.log('Event created:', res.data);
        // Reset form fields after submission
        setEventData({
          title: '',
          capacity: '',
          location: '',
          description: '',
        });
        // Redirect to event list or show success message
        // Example: history.push('/events');
      })
      .catch((err) => {
        console.error('Error creating event:', err);
      });
  };

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          
          >
            Title:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
           
          >
            Capacity:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="capacity"
            type="number"
            name="capacity"
            value={eventData.capacity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            
          >
            Location:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            
          >
            Description:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Event
        </button>
      </form>
      <p className="text-center text-gray-500 text-xs">©2024 Kaleodoscope Corp. All rights reserved.</p>
    </div>
  );
};

export default EventForm;
