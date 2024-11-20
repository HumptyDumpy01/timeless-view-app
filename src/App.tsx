import Hero from './components/Layout/Sections/Hero.tsx';
import PhotographySection from './components/Layout/Sections/PhotographySection.tsx';
import VideoGraphySection from './components/Layout/Sections/VideoGraphySection.tsx';
import TestimonialsSection from './components/Layout/Sections/TestimonialsSection.tsx';
import MyServicesSection from './components/Layout/Sections/MyServicesSection.tsx';
import Footer from './components/Layout/Footer.tsx';

function App() {
  return (
    <>
      <div id={`form`}>
      </div>
      <div className={`w-full`}>
        <div className={`sm:h-screen bg-hero mb-16 pb-12`}>
          <Hero />
        </div>
        <main>
          <PhotographySection />
          <VideoGraphySection />
          <TestimonialsSection />
          <MyServicesSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
