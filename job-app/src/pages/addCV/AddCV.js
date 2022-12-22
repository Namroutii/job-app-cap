import Footer from "../../components/footer/Footer";
import "./AddCV.css";
import { useState } from "react";
import Select from "react-select";
import NavBarAddCvs from "../../components/NavigationBars/NavBarAddCvs";
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
    { value: "SEO", label: "SEO" },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState("");
  function handleSelectLanguage(data) {
    setSelectedLanguage(data);
  }
  const optionLanguage = [
    { value: "C", label: "C" },
    { value: "C++", label: "C++" },
    { value: "C#", label: "C#" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "SQL", label: "SQL" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "PHP", label: "PHP" },
    { value: "Ruby", label: "Ruby" },
  ];
  const [selectedSoftware, setSelectedSoftware] = useState("");
  function handleSelectSoftware(data) {
    setSelectedSoftware(data);
  }
  const optionSoftware = [
    { value: "Excel", label: "Excel" },
    { value: "Google Sheet", label: "Google Sheet" },
    { value: "BlackLine", label: "BlackLine" },
    { value: "FloQast", label: "FloQast" },
  ];
  const [selectedSoftwareD, setSelectedSoftwareD] = useState("");
  function handleSelectSoftwareD(data) {
    setSelectedSoftwareD(data);
  }
  const optionSoftwareD = [
    { value: "Adobe Photoshop", label: "Adobe Photoshop" },
    { value: "Affinity Designer", label: "Affinity Designer" },
    { value: "Adobe InDesign", label: "Adobe InDesign" },
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

            <header className="addCv-title"> Add Your CV Here </header>

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
                </select>{" "}
                <br />
                {showSelect === "1" && (
                  <div>
                    <URL>GitHub URL</URL> <br />
                    <label className="label-form"> Select Job:</label>
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
                    <label className="label-form">
                      {" "}
                      Programing Language you are good at :
                    </label>
                    <Select
                      className="fab-SelectInput"
                      options={optionLanguage}
                      placeholder="Select Programing Language"
                      value={selectedLanguage}
                      onChange={handleSelectLanguage}
                      isSearchable={true}
                      isMulti
                    />{" "}
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
                    <label className="label-form">
                      {" "}
                      Software you are good at :
                    </label>
                    <Select
                      className="fab-SelectInput"
                      options={optionSoftware}
                      placeholder="Select Software"
                      value={selectedSoftware}
                      onChange={handleSelectSoftware}
                      isSearchable={true}
                      isMulti
                    />{" "}
                    <br />
                    <br />
                    <Button />
                  </div>
                )}
                {showSelect === "3" && (
                  <div>
                    <br />
                    <label className="label-form">
                      {" "}
                      Software you are good at :
                    </label>
                    <Select
                      className="fab-SelectInput"
                      options={optionSoftwareD}
                      placeholder="Select Software"
                      value={selectedSoftwareD}
                      onChange={handleSelectSoftwareD}
                      isSearchable={true}
                      isMulti
                    />{" "}
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
