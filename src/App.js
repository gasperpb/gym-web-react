import "./App.css";
import About from "./Components/About/about";
import Classes from "./Components/Classes/classes";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import Navbar from "./Components/Navbar/navbar";
import Popular from "./Components/Popular_class/popular";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Popular />
      <About />
      <Classes />
      <Footer />
    </div>
  );
};
export default App;
