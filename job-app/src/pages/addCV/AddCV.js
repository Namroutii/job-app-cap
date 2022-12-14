import Footer from "../../components/footer/Footer";
import "./AddCV.css";
import { useState } from "react";
import Select from "react-select";
import NavBarAddCvs from "../../components/NavBarAddCvs/NavBarAddCvs";
import Text from "../../components/Inputs/Text";
import Email from "../../components/Inputs/Email";
import Phone from "../../components/Inputs/Phone";
import Date from "../../components/Inputs/Date";
import Selects from "../../components/Inputs/Select";
import URL from "../../components/Inputs/URL";
import Button from "../../components/forms/Button";

function AddCV() {
  const [selectedOptions, setSelectedOptions] = useState("");
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  const optionList = [
    { value: "English", label: "English" },
    { value: "Arabic", label: "Arabic" },
    { value: "Germany", label: "Germany" },
    { value: "Hebrew", label: "Hebrew" },
  ];
  const [selectedJob, setSelectedJob] = useState("");
  function handleSelectJob(data) {
    setSelectedJob(data);
  }
  const optionJob = [
    { value: "Data analysis", label: "Data analysis" },
    { value: "Developer", label: "Developer" },
    { value: "Database Administration", label: "Database Administration" },
    { value: "Technical Services", label: "Technical Services" },
    { value: "Quality Assurance", label: "Quality Assurance" },
    { value: "Ceo", label: "Ceo" },
  ];

  const [showSelect, setShowSelect] = useState("");
  const handleShowSelect = (event) => {
    const getUser = event.target.value;
    setShowSelect(getUser);
  };
  return (
    <div>
      <NavBarAddCvs />
      <div className="body">
        <br />
        <br />
        <br />
        <div className="container1">
          <div className="information-box">
            <header className="title"> Information </header>
            <hr />
            <br />
            <form>
              <div className="form-container">
                <Text>Full Name</Text>
                <Email />
                <Phone>Phone Number</Phone>
                <label className="label-form"> City:</label>
                <select className="form-select">
                  <option value={0}>Select your City:</option>
                  <option>Jerusalem</option>
                  <option>Ramallah</option>
                  <option>Nablus</option>
                  <option>Hebron</option>
                  <option>Jenin</option>
                  <option>Jericho</option>
                  <option>Bethlehem</option>
                  <option>Qalqilya</option>
                  <option>Tulkarm</option>
                </select>{" "}
                <br /> <br />
                <Text>Address</Text>
                <Date /> <br />
                <URL>LinkedIn URL</URL> <br />
                <Phone>Years of Experience</Phone>
                <Selects /> <br />
                <label className="label-form"> Language</label>
                <Select
                  className="fab-SelectInput"
                  options={optionList}
                  placeholder="Select Language"
                  value={selectedOptions}
                  onChange={handleSelect}
                  isSearchable={true}
                  isMulti
                />{" "}
                <br /> <br />
                <Text>Career</Text>
                <Text> Skills</Text>
                <label className="label-form"> Department:</label>
                <select
                  className="form-select"
                  onChange={(e) => handleShowSelect(e)}
                >
                  <option value={0}>Select your job:</option>
                  <option value="1">Information Technology </option>
                  <option value="2">Accountant </option>
                  <option value="3">Designer </option>
                  <option value="4">Cyber security</option>
                </select>{" "}
                <br />
                {showSelect === "1" && (
                  <div>
                    <URL>GitHub URL</URL> <br />
                    <Select
                      className="fab-SelectInput"
                      options={optionJob}
                      placeholder="Select Job"
                      value={selectedJob}
                      onChange={handleSelectJob}
                      isSearchable={true}
                      isMulti
                    />{" "}
                    <br /> <br />
                    <br />
                    <br />
                    <Button />
                    <br />
                    <br />
                  </div>
                )}
                {showSelect === "2" && (
                  <div>
                    <br />
                    <br />
                    <Button />
                  </div>
                )}
                {showSelect === "3" && (
                  <div>
                    <br />
                    <br />
                    <Button />
                  </div>
                )}
                {showSelect === "4" && (
                  <div>
                    <br />
                    <br />
                    <Button />
                  </div>
                )}
              </div>
            </form>
          </div>
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddCV;
