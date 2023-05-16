import $ from "jquery";
import { NavLink } from "react-router-dom";
import Icons from "./assets/img/icons/Icons";

function Nav() {
    const toggleMenu = () => {
        $("nav").toggleClass("nav-open");
        $("#sliding-menu").toggleClass("menu-open");
    }

    const renderMenu = () => {
        return (
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                </li>
            </ul>
        )
    }

    return (
        <nav>
            <div id="sliding-menu">
                <img src={Icons.menu} onClick={toggleMenu} alt={"Menu icon"} />
                {renderMenu()}
            </div>
            <div id="mobile-menu">
                {renderMenu()}
            </div>
        </nav>
    )
}

export default Nav;