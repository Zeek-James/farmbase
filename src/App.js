import './utilies/fontawesome'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { AppNavbar } from './components/ui/AppNavbar';
import { Header } from './components/ui/Header';
// import { ContactUs } from './components/popups/ContactUs';
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/ui/Footer';
import { Slider } from './components/ui/Slider';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Header />
      <Slider />
      <AboutUs/>
      {/* <ContactUs /> */}
      <Footer />
    </div>
  );
}

export default App;
