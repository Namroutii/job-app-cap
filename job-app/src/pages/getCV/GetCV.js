import NavBar from "../../components/NavBar/NavBar";
import "./GetCV.css";
import Table from "../../components/Table/Table";
import data from "../../data/CVsData";
function getCV() {
  return (
    <div id="get-cv-container">
      <div id="nav-bar">
        <NavBar />
      </div>
      <img src="./images/hiring-img.jpg" />
      <Table data={data} rowsPerPage={15} />
    </div>
  );
}
export default getCV;
