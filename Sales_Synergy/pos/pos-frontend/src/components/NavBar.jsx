
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/home" className="text-white hover:text-blue-400">Home</Link></li>
        <li><Link to="/sales" className="text-white hover:text-blue-400">Sales</Link></li>
        <li><Link to="/quick-sale" className="text-white hover:text-blue-400">Quick Sale</Link></li>
        <li><Link to="/inventory" className="text-white hover:text-blue-400">Inventory</Link></li>
        <li><Link to="/customers" className="text-white hover:text-blue-400">Customers</Link></li>
        <li><Link to="/about" className="text-white hover:text-blue-400">About</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
