import Header from "./components/Header";
import Hero from "./components/Hero.tsx";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import Footer from "./components/Footer.tsx";
import './App.css';

function App() {

  return (
    <div className="App flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
      <Footer />
    </div>
  );
}

export default App;
