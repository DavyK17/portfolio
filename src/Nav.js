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
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div id="mobile-menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;