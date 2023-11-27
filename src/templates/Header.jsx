import scrollToElement from "@utils/scrollToelement";
import "@styles/templates/Header.css";
import logo from "@images/logo.svg";

const Header = () => {
    return (
        <header className="header">
            <nav className="header-nav">
                <ul className="nav--items">
                    <section className="logo">
                        <li className="nav__item">
                            <a href="/" className="header-logo">
                                <img src={logo} alt="Finance Plannel Logo" title="Finance Plannel Logo"/>
                            </a>
                        </li>
                    </section>

                    <section className="navigation">
                        <li>
                            <a href="#banner" className="link__item" onClick={e => {
                                e.preventDefault();
                                scrollToElement('banner');
                            }}>
                                Inicio
                            </a>
                        </li>

                        <li>
                            <a href="#benefits" className="link__item" onClick={e => {
                                e.preventDefault();
                                scrollToElement('benefits');
                            }}>
                                Explora
                            </a>
                        </li>

                        <li>
                            <a href="#form" className="link__item" onClick={e => {
                                e.preventDefault();
                                scrollToElement('form');
                            }}>
                                Unirse a la lista
                            </a>
                        </li>
                    </section>
                </ul>
            </nav>
        </header>
    );
}

export default Header;