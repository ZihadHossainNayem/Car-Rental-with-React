import { CarSelection } from "./components/carSelection/CarSelection";
import { Driver } from "./components/driver/Driver";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CarSelection />
      <Driver />
      <Footer />
    </div>
  );
}

export default App;
