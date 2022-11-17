import NavBar from "../../components/NavBar/NavBar";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Services/Services";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/Loginform/Loginform";
function Home() {
  return (
    <div id="home">
      <NavBar />
      <Header />
      <Card />
      <Footer />
      <LoginForm />
    </div>
  );
}
export default Home;
