import "@styles/templates/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer-nav">
                <ul className="nav--items">
                    <li className="nav__item">
                        <a href="" className="social-media">
                            Términos y condiciones
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="" className="social-media">
                            Política de privacidad
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;