import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./Components/Benefits.jsx";
import Collaboration from "./Components/Collaboration.jsx";
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
