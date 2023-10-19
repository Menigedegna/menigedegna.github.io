import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const currentRoute = useLocation().pathname.toLowerCase();
    return(
        <nav className="nav_bar" id="menu">
            <Link style={currentRoute==="/"? {backgroundColor: 'var(--color-yellow)', height: '100%'}:{}} className="nav_link" id="left_outer_link" to="/">Home</Link>
            {/* <Link style={currentRoute.includes("about")? {backgroundColor: 'var(--color-yellow)'}:{}} className="nav_link" to="/about">About Me</Link> */}
            <Link style={currentRoute.includes("skills")? {backgroundColor: 'var(--color-yellow)'}:{}} className="nav_link inner_nav" to="/skills">Skills</Link>
            <Link style={currentRoute.includes("experience")? {backgroundColor: 'var(--color-yellow)'}:{}} className="nav_link inner_nav" to="/experience">Experience</Link>
            <Link style={currentRoute.includes("contact")? {backgroundColor: 'var(--color-yellow)'}:{}} className="nav_link" id="right_outer_link" to="/contact">Get In Touch</Link>
        </nav>
    );
}

export default NavBar;