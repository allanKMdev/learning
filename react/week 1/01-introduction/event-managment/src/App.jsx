
import { BrowserRouter , Routes, Route, Link  } from 'react-router-dom';
import EventList from './EventList';
import EventForm from './EventForum';
import EventDetails from './EventDetails';
import Home from './Home';
import Notifications from './Notifications';
import Tickets from './Ticket';
import './index.css'; 


const App = () => {
  return (
    <BrowserRouter>
    
       
        <div className="App flex flex-col min-h-screen bg-blue-700 ">
  <div className="bg-blue-700"> 
  
  </div>

         <header className="flex items-center justify-between bg-pink-800 text-white p-4">
          <nav className="flex items-center">
          <li>
          <img src="./the-kaleidoscope-collective-high-resolution-logo-white.png" alt="The Kaleidoscope Collective Logo" className="text-sm font-thin" />
          </li>
          </nav>
      
          
          <ul className="flex space-x-4">
            <li className="hover:text-gray-400">
              <Link to="/" className="text-white"><h1>HOME</h1></Link>
            </li>
            <li className="hover:text-gray-400">
              <Link to="/events" className="text-white"><h1>EVENTS</h1></Link>
            </li>
            <li className="hover:text-gray-400">
              <Link to="/notifications" className="text-white"><h1>NOTIFICATIONS</h1></Link>
            </li>
            <li className="hover:text-gray-400">
              <Link to="/tickets" className="text-white"><h1>TICKETS</h1></Link>
            </li>
          </ul>
          
        </header>

        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/events/create" element={<EventForm />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/tickets" element={<Tickets />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;