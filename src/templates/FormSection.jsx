import WaitlistForm from "@templates/WaitlistForm";
import formImage from "@images/formImage.svg";
import "@styles/templates/FormSection.css";

const FormSection = () => { 
    return (
        <div className="section-layout">
            <div className="form-layout">
                <WaitlistForm />
            </div>

            <figure className="image">
                <img src={formImage} alt="" />
            </figure>
        </div>
    )
}

export default FormSection;