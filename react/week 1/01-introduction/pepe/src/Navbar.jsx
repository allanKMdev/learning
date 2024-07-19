import { Link } from "react-router-dom";
const Navbar = ()=>{
   
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                    {users.map(user=>(
                        <li key={user.id}>
                        <Link to={`/contact/${user.id}`}>{user.name}</Link>
                    </li>
                    ))}
            </ul>
        </nav>
    )
}
export default Navbar