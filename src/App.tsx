import Hero from './components/Layout/Hero.tsx';

function App() {
  return (
    <>
      <div className={`w-full`}>
        <div className={`h-screen bg-hero`}>
          <div className={`relative max-w-screen-xl m-auto pt-12`}>
            <Hero />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
