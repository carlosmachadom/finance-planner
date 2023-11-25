import "@styles/templates/BannerHero.css"
import coinsImage from "@images/Coins.svg";
import { Link } from "react-router-dom";

const BannerHero = () => {
    return (
        <div className="banner-content">
            <article className="banner--title">
                <h2>¿Buscas una forma efectiva de manejar tus finanzas personales?</h2>
                <p>Finance Planner es la solución. En la era digital, la gestión financiera eficiente es clave para el bienestar económico</p>
            </article>

            <article className="banner--description">
                <figure className="banner__image">
                    <img src={coinsImage} alt="" />
                </figure>

                <div className="banner__benefits">
                    <p>Con Finance Planner, obtienes un control total sobre tus finanzas. Nuestra aplicación está diseñada para ayudarte a organizar tus ingresos y gastos, rastrear tus ahorros y entender mejor tus hábitos de gasto</p>
                    <Link to={"#form"} className="banner-cta"> Unirse a la lista</Link>
                </div>
            </article>
        </div>
    );
}

export default BannerHero;

