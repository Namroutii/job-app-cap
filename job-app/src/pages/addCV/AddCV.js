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
import Name from "../../components/Inputs/Name";
import YearsExp from "../../components/Inputs/YearsExp";
import URLva from "../../components/Inputs/URLva";

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

  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleChange = (onChangeValue, i) => {
    const inputDate = [...val];
    inputDate[i] = onChangeValue.target.value;
    setVal(inputDate);
  };
  const handleDelete = (i) => {
    const deleteVal = [...val];
    deleteVal.splice(i);
    setVal(deleteVal);
  };

  return (
    <div>
      <NavBarAddCvs />
      <div className="body">
        <div className="image-box">
          <img
            className="image-addCv"
            src="https://www.wilsonsecurity.com.au/siteassets/security-stock-images/fotolia_80086639_subscription_monthly_m.jpg/PageHeaderDesktop-15857-1440-600-100-0,0"
            alt=""
          ></img>
        </div>
        <div className="title1-addCv p-3 mb-5 bg-body rounded">
          * Career Application
        </div>
        <div className="title2-addCv p-3 mb-5 bg-body rounded">
          * In order to ensure accuracy and ease of communication with Houdrtkm,
          please fill out job application abide fully and clearly, and taking
          into account the precision in it, and if there is any shortfall in
          demand will have a wedge to not consider it.
        </div>
        <div className="information-box">
          <form>
            <header className="addCv-title"> Add Your CV Here </header>
            <hr />
            <Name>Full Name</Name>
            <Email />
            <Phone>Phone Number</Phone>
            <YearsExp>Years of Experience</YearsExp>
            <URL>LinkedIn URL</URL>
            <div className="input">
              <label htmlFor="select-city" className="label-form">
                
                City:
              </label>
              <select id="select-city" className="form-select">
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
              </select>
            </div>
            <Text>Address</Text>
            <Date />
            <Selects />
            <div className="input">
              <label className="label-form"> Language</label>
              <Select
                className="fab-SelectInput"
                options={optionList}
                placeholder="Select Language"
                value={selectedOptions}
                onChange={handleSelect}
                isSearchable={true}
                isMulti
              />
            </div>
            <Text>Career</Text>
            <label htmlFor="skills" className="label-texts ">
              
              Skills
            </label>
            <div className="input-group mb-3">
              <input
                id="skills"
                type="text"
                className="form-control"
                placeholder="Skills"
              />
              <button
                className="input-group-text"
                type="button"
                onClick={() => handleAdd()}
              >
                +
              </button>
            </div>
            {val.map((data, i) => {
              return (
                <div>
                  <div  className="input-group mb-3">
                    <input
                      type="text"
                      onChange={(e) => handleChange(e, i)}
                      className="form-control"
                      placeholder="Skills"
                    />
                    <button
                      className="input-group-text"
                      type="button"
                      onClick={() => handleDelete(i)}
                    >
                      X
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="input">
              <label htmlFor="select-dep" className="label-form">
                
                Department:
              </label>
              <select
                id="select-dep"
                className="form-select"
                onChange={(e) => handleShowSelect(e)}
              >
                <option value={0}>Select your job:</option>
                <option value="1">Information Technology </option>
                <option value="2">Accountant </option>
                <option value="3">Designer </option>
              </select>
            </div>
            {showSelect === "1" && (
              <div>
                <URLva>GitHub URL</URLva>
                <div className="input">
                  <label className="label-form"> Select Job:</label>
                  <Select
                    className="fab-SelectInput"
                    options={optionJob}
                    placeholder="Select Job"
                    value={selectedJob}
                    onChange={handleSelectJob}
                    isSearchable={true}
                    isMulti
                  />
                </div>
                <div className="input">
                  <label className="label-form">
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
                  />
                </div>
                <Button />
              </div>
            )}
            {showSelect === "2" && (
              <div>
                <div className="input">
                  <label className="label-form">
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
                  />
                </div>
                <Button />
              </div>
            )}
            {showSelect === "3" && (
              <div>
                <div className="input">
                  <label className="label-form">
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
                  />
                </div>
                <Button />
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddCV;
