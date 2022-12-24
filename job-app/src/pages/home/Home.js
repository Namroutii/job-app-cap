
import "./Home.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NavBar from "../../components/NavigationBars/NavBar";
import Services from "../../components/services/Services";
import AboutUs from "../../components/aboutus/AboutUs";

function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <AboutUs />
      <div className="container">
        <div className="row">
          <h1 className="services-title">Services</h1>
          <div className='col-12 col-md-10 col-lg-6 col-xl-4'>
            <Services imag="./images/find.jpg" info="Find employees" paragraph="Companies struggle to locate employees,so we are in HireMe we
                make it simple for you by showing employee resumes and providing
                simple filtering so you can find the best possibilities as
                quickly as possible." link="/get-cv" />
          </div>
          <div className='col-12 col-md-10 col-lg-6 col-xl-4'>
            <Services imag="./images/Filter.jpg" info="Filter" paragraph="   When reviewing resumes, it might be challenging to find the
                information you're looking for, whether it's years of experience
                or age. With a touch of a button, so we are in HireMe we've
                given you fast ways to quickly find the ideal candidate. Here,
                you'll find everything you need to hire the ideal candidate." link="/get-cv" />
          </div><div className='col-12 col-md-10 col-lg-6 col-xl-4'>
            <Services imag="./images/add-cv.jpg" info="Add CV" paragraph="Employees can submit a CV with ease by adding the necessary
                information to the area on the page dedicated for it, and he can
                change it at any moment by entering into his account, that he
                will make it before attaching the CV." link="/add-cv" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
