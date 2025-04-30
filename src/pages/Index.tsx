
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import NewsSection from '@/components/home/NewsSection';
import PartnerSection from '@/components/home/PartnerSection';
import Contact from '@/components/home/Contact';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <NewsSection />
        <PartnerSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
