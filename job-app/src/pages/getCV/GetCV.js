import "./GetCV.css";
import Table from "../../components/Table/Table";
import data from "../../data/CVsData";
import Footer from "../../components/footer/Footer";
import NavBarGetCvs from "../../components/NavBarGetCvs/NavBarGetCvs";

function getCV() {
  const deletedIds = JSON.parse(localStorage.getItem("deletedCVs")) || [];
  const filteredData = data.filter(
    (obj1) => !deletedIds.some((obj2) => obj2[0].id === obj1.id)
  );
  // const reportedIds = JSON.parse(localStorage.getItem("reportedCVs")) || [];
  // const filteredData = data.filter((obj1) =>
  //   reportedIds.some((obj2) => obj2.id === obj1.id)
  // );
  return (
    <div id="get-cv-container">
      <div id="nav-bar">
        <NavBarGetCvs />
      </div>
      <div id="get-cv-cover">
        <img src="./images/get-cv-img.jpg" id="get-cv-img" />
        <h1 id="get-cv-header">Find Employees</h1>
      </div>

      <Table
        data={filteredData}
        rowsPerPage={23}
        withFilter={true}
        forPage="get-cv"
      />

      <Footer />
    </div>
  );
}
export default getCV;
