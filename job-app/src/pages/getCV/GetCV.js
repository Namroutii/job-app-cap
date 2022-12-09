import "./GetCV.css";
import Table from "../../components/Table/Table";
import NavBarGetCvs from "../../components/NavBarGetCvs/NavBarGetCvs";
function getCV() {
  return (
    <div>
      <div id="nav-bar">
        <NavBarGetCvs/>
      </div>

      <Table />
    </div>
  );
}
export default getCV;
