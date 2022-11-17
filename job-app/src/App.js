import "./App.css";
import Footer from "./components/footer/Footer";
import Card from "./components/services/Services";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import AboutUs from './components/AboutUs';
import LoginForm from "./components/login/loginform";
function App() {
  return (
    <div className="App">
      <Home />
      <Header />
      <Card />
      <AboutUs/>
      <Footer />
      <LoginForm />

    </div>

  );
}
export default App;
