import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const currentRoute = useLocation().pathname.toLowerCase();
    return(
        <nav className="nav_bar" id="menu">
            <Link style={currentRoute==="/"? {backgroundColor: 'var(--color-yellow)'}:{}} className="nav_link" to="/">Home</Link>
            <Link style={currentRoute.includes("about")? {backgroundColor: 'var(--color-yellow)'}:{}} className="nav_link" to="/about">About Me</Link>
            <Link style={currentRoute.includes("skills")? {backgroundColor: 'var(--color-yellow)'}:{}} className="nav_link" to="/skills">Skills</Link>
            <Link style={currentRoute.includes("experience")? {backgroundColor: 'var(--color-yellow)'}:{}} className="nav_link" to="/experience">Experience</Link>
            <Link style={currentRoute.includes("contact")? {backgroundColor: 'var(--color-yellow)'}:{}} className="nav_link" to="/contact">Get In Touch</Link>
        </nav>
    );
}

export default NavBar;