import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const currentRoute = useLocation().pathname.toLowerCase();
    return(
        <nav className="nav_bar" id="menu">
            <Link style={currentRoute==="/"? {backgroundColor: '#EE0909'}:{}} className="nav_link" to="/">Home</Link>
            <Link style={currentRoute.includes("about")? {backgroundColor: '#EE0909'}:{}} className="nav_link" to="/about">About Me</Link>
            <Link style={currentRoute.includes("experience")? {backgroundColor: '#EE0909'}:{}} className="nav_link" to="/experience">Experience</Link>
            <Link style={currentRoute.includes("work")? {backgroundColor: '#EE0909'}:{}} className="nav_link" to="/work">Work</Link>
            <Link style={currentRoute.includes("contact")? {backgroundColor: '#EE0909'}:{}} className="nav_link" to="/contact">Get In Touch</Link>
        </nav>
    );
}

export default NavBar;