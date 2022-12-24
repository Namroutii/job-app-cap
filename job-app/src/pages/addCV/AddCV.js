import Footer from "../../components/footer/Footer";
import "./AddCV.css";
import React, {useRef} from "react";
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
    deleteVal.splice(i,1);
    setVal(deleteVal);
  };
  
  const name=useRef();
  const email=useRef();
  const phone=useRef();
  const experience=useRef();
  const linked_in=useRef();
  const city=useRef();
  const address=useRef();
  const age=useRef();
  const degree=useRef();
  const languages=useRef();
  const company=useRef();
  const skills=useRef();
  const position=useRef();
  const github=useRef();
  const it_job=useRef();
  const programming_languages=useRef();
  const accountant_software=useRef();
  const designer_software=useRef();






const handleClick=()=>{
  localStorage.setItem('name',name.current.value)
  localStorage.setItem('email',email.current.value)
  localStorage.setItem('phone',phone.current.value)
  localStorage.setItem('experience',experience.current.value)
  localStorage.setItem('linked_in',linked_in.current.value)
  localStorage.setItem('city',city.current.value)
  localStorage.setItem('address',address.current.value)
  localStorage.setItem('age',age.current.value)
  localStorage.setItem('degree',degree.current.value)
  localStorage.setItem('languages',languages.current.value)
  localStorage.setItem('company',company.current.value)
  localStorage.setItem('skills',skills.current.value)
  localStorage.setItem('position',position.current.value)
  localStorage.setItem('github',github.current.value)
  localStorage.setItem('it_job',it_job.current.value)
  localStorage.setItem('programming_languages',programming_languages.current.value)
  localStorage.setItem('accountant_software',accountant_software.current.value)
  localStorage.setItem('designer_software',designer_software.current.value)





}
console.log(selectedOptions)
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
        <div className="title2-addCv p-3 mb-5 bg-body rounded">
        * Career Application
        <br/>
          * In order to ensure accuracy and ease of communication with Houdrtkm,
          please fill out job application abide fully and clearly, and taking
          into account the precision in it, and if there is any shortfall in
          demand will have a wedge to not consider it.
        </div>
        <div className="information-box">
          <form onSubmit={handleClick}>
            <header className="addCv-title"> Add Your CV Here </header>
            <hr />
            <Name refer={name} >Full Name</Name>
            <Email refer={email}  />
            <Phone refer={phone} >Phone Number</Phone>
            <YearsExp refer={experience} >Years of Experience</YearsExp>
            <URL refer={linked_in}>LinkedIn URL</URL>
            <div className="input">
              <label htmlFor="select-city" className="label-form">
                City:
              </label>
              <select required ref={city} id="select-city" className="form-select" >
                <option value={'NAN'}>Select your City:</option>
                <option value="Jerusalem">Jerusalem</option>
                <option value="Ramallah">Ramallah</option>
                <option value="Nablus">Nablus</option>
                <option value="Hebron">Hebron</option>
                <option value="Jenin">Jenin</option>
                <option value="Jericho">Jericho</option>
                <option value="Bethlehem">Bethlehem</option>
                <option value="Qalqilya">Qalqilya</option>
                <option value="Tulkarm">Tulkarm</option>
              </select>
            </div>
            <Text required refer={address}  >Address</Text>
            <Date refer={age}  />
            <Selects refer={degree} />
            <div className="input">
              <label className="label-form"> Language</label>
              <Select
              required
              ref={languages}
                className="fab-SelectInput"
                options={optionList}
                placeholder="Select Language"
                value={selectedOptions}
                onChange={handleSelect}
                
                isMulti
              />
              
            </div>
            <Text refer={company} >Career</Text>
            <label htmlFor="skills" className="label-texts "> 
              Skills
            </label>
            <div className="input-group mb-3">
              <input
              ref={skills}
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
                      onChange={(e) => handleChange(e, i
                        )}
                      className="form-control"
                      placeholder="Skills"
                    />
                    <button
                      className="input-group-text"
                      type="button"
                      onClick={() => handleDelete(i)}
                    >
                      x
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
              required
              ref={position}
                id="select-dep"
                className="form-select"
                onChange={(e) => handleShowSelect(e)}
              >
                <option value={'NAN'}>Select your job:</option>
                <option value="Information Technology">Information Technology </option>
                <option value="Accountant">Accountant </option>
                <option value="Designer">Designer </option>
              </select>
            </div>
            {showSelect === "Information Technology" && (
              <div>
                <URLva refer={github} >GitHub URL </URLva>
                <div className="input">
                  <label className="label-form"> Select Job:</label>
                  <Select
                  required
                  ref={it_job}
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
                  required
                  ref={programming_languages}
                    className="fab-SelectInput"
                    options={optionLanguage}
                    placeholder="Select Programing Language"
                    value={selectedLanguage}
                    onChange={handleSelectLanguage}
                    isSearchable={true}
                    isMulti
                  />
                </div>
                <Button/>
              </div>
            )}
            {showSelect === "Accountant" && (
              <div>
                <div className="input">
                  <label className="label-form">
                    Software you are good at :
                  </label>
                  <Select
                  required
                  ref={accountant_software}
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
            {showSelect === "Designer" && (
              <div>
                <div className="input">
                  <label className="label-form">
                    Software you are good at :
                  </label>
                  <Select
                  ref={designer_software}
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
        <Footer />
      </div>
      
    </div>
  );
}

export default AddCV;
