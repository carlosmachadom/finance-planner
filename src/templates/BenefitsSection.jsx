import "@styles/templates/BenefitsSection.css";
import Card from "@components/Card";
import BENEFITS from "@utils/benefits";
import { Link } from "react-router-dom";

const BenefitsSection = () => {
    return (
        <div className="benefits">
            <h2 className="benefits-title">Finance Planner ofrece una variedad de características para ayudarte a manejar tus finanzas personales de manera efectiva</h2>

            <ul className="benefits-list">
                {BENEFITS.map((item) => {
                    return (                    
                        <li>
                            <Card
                                image={item.image}
                                title={item.title}
                            />
                        </li>
                    )
                })}
            </ul>

            <div className="benefits-bottom">
                <h3 className="bottom--text">Estamos trabajando arduamente para brindarte la mejor experiencia. Si estás interesado en tener la versión inicial de Finance Planner y quieres unirte a nuestra lista de espera, por favor llena el formulario de contacto a continuación</h3>

                <Link to="#form" className="link-button">Unirse a la lista de espera</Link>
            </div>
        </div>
    )
}

export default BenefitsSection;