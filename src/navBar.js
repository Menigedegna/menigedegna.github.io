import { Link, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "./images/perso_logo.png";

const NavBar = () => {
    const currentRoute = useLocation().pathname.toLowerCase();
    return(
        <nav className="nav_bar" id="menu">
            {/* <Link style={currentRoute==="/"? {backgroundColor: 'var(--color-yellow)', height: '100%'}:{}} className="nav_link" id="left_outer_link" to="/">Home</Link> */}
            <Link className="nav_link" id="left_outer_link" to="/">
                <LazyLoadImage src={logo} className="logo-photo" alt="Profile picture"/>
            </Link>

            <Link style={currentRoute.includes("skills")? {backgroundColor: 'var(--color-yellow)'}:{}} className="nav_link inner_nav" to="/skills">Skills</Link>
            <Link style={currentRoute.includes("projects")? {backgroundColor: 'var(--color-yellow)'}:{}} className="nav_link inner_nav" to="/projects">Projects</Link>
            <Link style={currentRoute.includes("contact")? {backgroundColor: 'var(--color-yellow)'}:{}} className="nav_link" id="right_outer_link" to="/contact">Contact</Link>
        </nav>
    );
}

export default NavBar;