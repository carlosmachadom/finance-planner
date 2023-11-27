import "@styles/templates/BannerHero.css"
import coinsImage from "@images/Coins.svg";
import scrollToElement from "@utils/scrollToelement";

const BannerHero = () => {
    return (
        <div className="banner-content">
            <article className="banner--title">
                <h1>Finance Planner es una forma efectiva de manejar tus finanzas personales</h1>
                <p>En la era digital, la gestión financiera eficiente es clave para el bienestar económico</p>

            </article>

            <article className="banner--description">
                <figure className="banner__image">
                    <img src={coinsImage} alt="" />
                </figure>

                <div className="banner__benefits">
                    <p>Con Finance Planner, obtienes un control total sobre tus finanzas. Nuestra aplicación está diseñada para ayudarte a organizar tus ingresos y gastos, rastrear tus ahorros y entender mejor tus hábitos de gasto</p>
                    <a href="#form" className="banner-cta" onClick={e => {
                        e.preventDefault();
                        scrollToElement('form');
                    }}> Unirse a la lista</a>
                </div>
            </article>
        </div>
    );
}

export default BannerHero;

