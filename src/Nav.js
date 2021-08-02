import $ from "jquery";
import { Link } from "react-router-dom";
import Icons from "./assets/img/icons/Icons";

function Nav() {

    const toggleMenu = () => {
        $("nav").toggleClass("nav-open");
        $("#sliding-menu").toggleClass("menu-open");
    }

    return (
        <nav>
            <div id="sliding-menu">
                <img src={Icons.menu} onClick={toggleMenu} alt={"Menu icon"} />
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/projects">
                        <li>Projects</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
            <div id="mobile-menu">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/projects">
                        <li>Projects</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;