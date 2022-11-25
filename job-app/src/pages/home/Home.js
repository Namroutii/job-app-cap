import "./Home.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Services from "../../components/services/Services";
function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <Services />
      <Footer />
    </div>
  );
}
export default Home;
