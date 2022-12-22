import "./GetCV.css";
import Table from "../../components/Table/Table";
import data from "../../data/CVsData";
import Footer from "../../components/footer/Footer";
import NavBarGetCvs from "../../components/NavigationBars/NavBarGetCvs";

function getCV() {
  return (
    <div id="get-cv-container">
      <div id="nav-bar">
        <NavBarGetCvs />
      </div>
      <div id="get-cv-cover">
        <img src="./images/get-cv-img.jpg" id="get-cv-img" />
        <h1 id="get-cv-header">Find Employees</h1>
      </div>

      <Table data={data} rowsPerPage={23} />
      {
        //<Footer />
      }
    </div>
  );
}
export default getCV;
