import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import FeaturedProperties from "../components/FeaturedProperties";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedProperties />
      <Services />
      <Footer />
    </div>
  );
}
