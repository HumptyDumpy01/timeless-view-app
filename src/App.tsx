import Hero from './components/Layout/Hero.tsx';
import PhotographySection from './components/Layout/PhotographySection.tsx';
import VideoGraphySection from './components/Layout/VideoGraphySection.tsx';

function App() {
  return (
    <>
      <div className={`w-full`}>
        <div className={`h-screen bg-hero mb-16`}>
          <section className={`relative max-w-screen-xl m-auto pt-12`}>
            <Hero />
          </section>
        </div>
        <main>
          <PhotographySection />
          <VideoGraphySection />
        </main>
      </div>
    </>
  );
}

export default App;
