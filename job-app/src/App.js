import "./App.css";
import Footer from "./components/footer/Footer";
import Card from "./components/services/Services";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
      <Home />
      <Card/>
      <Footer/>
    </div>

  );
}
export default App;
