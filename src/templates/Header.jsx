import logo from "@images/Marvel-stuff-icon.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="header-nav">
                <ul className="nav--items">
                    <li className="nav__item">
                        <Link to="/" className="header-logo">
                            <img src={"#"} alt="Finance Plannel Logo" title="Finance Plannel Logo"/>
                            <h1>Finance Planner</h1>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;