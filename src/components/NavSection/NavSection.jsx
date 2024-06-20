import { Link } from 'react-scroll';
import './NavSection.css';
const NavSection = () => {
    return (
        <section className="nav-section">
            <ul className="nav-list">
                <li>
                    <Link className="nav-item" activeClass="active" to="section2" smooth={true} duration={900}>
                        <span className="text-black">OUR </span><span className="text-red">PROJECTS</span>
                    </Link>
                </li>
                <li>
                    <Link className="nav-item" activeClass="active" to="section3" smooth={true} duration={900}>
                        <span className="text-black">OUR </span><span className="text-red">WORKS</span>
                    </Link>
                </li>
                <li>
                    <Link className="nav-item" activeClass="active" to="section4" smooth={true} duration={900}>
                        <span className="text-black">OUR </span><span className="text-red">CLIENTS</span>
                    </Link>
                </li>
                <li>
                    <Link className="nav-item" activeClass="active" to="section5" smooth={true} duration={900}>
                        <span className="text-black">OUR </span><span className="text-red">STORY</span>
                    </Link>
                </li>
            </ul>
        </section>
    );
}

export default NavSection;
