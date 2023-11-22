import { Link } from "react-router-dom";

export default function Navbar () {

    return (
        <nav className="navbar">
            <Link className="link" to={'/home'}>Home</Link>
            <Link className="link" to={'/buttons'}>Buttons</Link>
            <Link className="link" to={'/fetch'}>Fetch</Link>
        </nav>
    )
}