import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LoginForm from "./components/login/loginform";
import NavBar from "./components/NavBar/NavBar";
import Services from "./components/services/Services";
function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <Services/>
      <Footer/>
      <div className="login-page">
        <LoginForm />
      </div>


      
    </div>
  );
}
export default App;
