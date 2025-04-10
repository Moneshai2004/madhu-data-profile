
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Languages from "@/components/Languages";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Languages />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
