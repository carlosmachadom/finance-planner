import BannerHero from "@templates/BannerHero";
import BenefitsSection from "@templates/BenefitsSection";
import FormSection from "@templates/FormSection";

const Home = () => {
    return (
        <main className="Main">
            <section className="banner-hero" id="banner">
                <BannerHero />
            </section>

            <section className="benefits-section" id="benefits">
                <BenefitsSection />
            </section>

            <section className="waitlist-form" id="form">
                <FormSection />
            </section>
        </main>
    );
}

export default Home