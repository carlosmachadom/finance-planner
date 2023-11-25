import BannerHero from "@templates/BannerHero";
import BenefitsSection from "@templates/BenefitsSection";

const Home = () => {
    return (
        <main className="Main">
            <section className="banner-hero" id="banner">
                <BannerHero />
            </section>

            <section className="benefits-section" id="benefits">
                <BenefitsSection />
            </section>

            <section className="witlist-form" id="form">
                
            </section>
        </main>
    );
}

export default Home