import NavbarTop from "./NavbarTop";
import NavbarMain from "./NavbarMain";
import HeroCards from "./Herocards";
import InfoCards from "./InfoCards";

function App() {
  return (
    <>
      <NavbarTop />
      <NavbarMain />
      <div className="cards-wrapper">
        <HeroCards />
        <InfoCards />
      </div>
    </>
  );
}

export default App;
