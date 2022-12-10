import NavBar from "../../components/NavBar/NavBar";
import "./GetCV.css";
import Table from "../../components/Table/Table";
import data from "../../data/CVsData";
import Footer from "../../components/footer/Footer";
function getCV() {
  return (
    <div id="get-cv-container">
      <div id="nav-bar">
        <NavBar />
      </div>
      <img
        src="./images/get-cv-img.jpg
    "
        id="get-cv-img"
      />
      <Table data={data} rowsPerPage={23} />
      <div id="get-cv-footer">
        <Footer />
      </div>
    </div>
  );
}
export default getCV;
