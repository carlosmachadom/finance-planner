import { Link } from "react-router-dom";
import "@styles/templates/Header.css";

const Header = () => {
    return (
        <header className="header">
            <nav className="header-nav">
                <ul className="nav--items">
                    <section className="logo">
                        <li className="nav__item">
                            <Link to="/" className="header-logo">
                                <img src={"#"} alt="Finance Plannel Logo" title="Finance Plannel Logo"/>
                                <h1>Finance Planner</h1>
                            </Link>
                        </li>
                    </section>

                    <section className="navigation">
                        <li>
                            <Link to="#banner" className="link__item">
                                Inicio
                            </Link>
                        </li>

                        <li>
                            <Link to="#benefits" className="link__item">
                                Explora
                            </Link>
                        </li>

                        <li>
                            <Link to="#form" className="link__item">
                                Unirse a la lista
                            </Link>
                        </li>
                    </section>
                </ul>
            </nav>
        </header>
    );
}

export default Header;