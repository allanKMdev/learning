
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EventList from './EventList';
import EventForm from './EventForum';
import EventDetails from './EventDetails';
import Home from './Home';
// import NotificationList from './NotificationList';
import TicketsPage from './TicketPage';
import './index.css';




function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen bg-yellow-300">
        <header className="flex items-center justify-between bg-white text-black p-4">
          <div className="flex items-center">
            <h1 className="text-center text-black">Welcome</h1>
            <img src="/new.jpg" alt="The Kaleidoscope Collective Logo" className="ml-2 h-10" />
          </div>
          <ul className="flex space-x-4">
            <li className="hover:text-gray-400">
              <Link to="/" className="text-black">HOME</Link>
            </li>
            <li className="hover:text-gray-400">
              <Link to="/events" className="text-black">EVENTS</Link>
            </li>
            <li className="hover:text-gray-400">
              <Link to="/notifications" className="text-black">NOTIFICATIONS</Link>
            </li>
            <li className="hover:text-gray-400">
              <Link to="/tickets" className="text-black">TICKETS</Link>
            </li>
          </ul>
        </header>
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/events/create" element={<EventForm />} />
            <Route path="/events/:id" element={<EventDetails />} />
            {/* <Route path="/notifications" element={<NotificationsPage />} /> */}
            <Route path="/tickets" element={<TicketsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
