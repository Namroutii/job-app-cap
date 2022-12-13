import "./GetCV.css";
import Table from "../../components/Table/Table";
import data from "../../data/CVsData";
import Footer from "../../components/footer/Footer";
import NavBarGetCvs from "../../components/NavBarGetCvs/NavBarGetCvs";
function getCV() {
  return (
    <div id="get-cv-container">
      <div id="nav-bar">
        <NavBarGetCvs />
      </div>
      <img
        src="./images/get-cv-img.jpg
    "
        id="get-cv-img"
      />
      <Table data={data} rowsPerPage={23} />
      {
        //<Footer />//<--
      }
    </div>
  );
}
export default getCV;
