import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";

import "./AddCV.css";

import { useState } from "react";
import Select from "react-select";


import Text from "../../components/Inputs/Text"
import Email from "../../components/Inputs/Email"
import Phone from "../../components/Inputs/Phone"



function AddCV() {
  const [selectedOptions, setSelectedOptions] = useState("");
  const [showSelect, setShowSelect] = useState("");
  const handleShowSelect = (event) => {
    const getUser = event.target.value;
    setShowSelect(getUser);
  };
  const optionList = [
    { value: "English", label: "English" },
    { value: "Arabic", label: "Arabic" },
    { value: "Germany", label: "Germany" },
    { value: "Hebrew", label: "Hebrew" },
  ];
  function handleSelect(data) {
    setSelectedOptions(data);
  }

  return (
    <div>
      <NavBar /> <br /><br /><br />
      <div className="title">Add your CV Down here </div>
      <hr />

      <form>


        <Text>Full Name</Text>

        <Email />
        <Phone />
        <Text>Address</Text>
        <Text>Degree</Text>


        <label className="select-label">Birth of Date</label>
        <div className="form-date">
          <input type="date" className="form-control" />
        </div>

        <label className="select-label">Language</label>
        <div className="dropdown-container">
          <Select
            options={optionList}
            placeholder="Select Language"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            isMulti
          />
        </div>

        <div className="select">
          <label> Department:</label> <br />
          <select onChange={(e) => handleShowSelect(e)}>
            <option selected>Select your job:</option>
            <option value="1">Programmer </option>
            <option value="2">Accountant </option>
            <option value="3">Designer </option>
            <option value="4">Cyber security</option>
          </select>
        </div>
        {showSelect === "1" && (
          <div>

            <Text>Career</Text>
            <Text>Years of Experience</Text>
            <Text>Soft skills</Text>
            <Text>LinkedIn URL</Text>
            <Text>Language</Text>
            <Text>Skills</Text>
            <br />
            <br />
            <button type="submit">submit</button>
            <br />
            <br />
          </div>
        )}
        {showSelect === "2" && (
          <div><Text>Career</Text>
            <Text>Years of Experience</Text>
            <Text>Soft skills</Text>
            <Text>LinkedIn URL</Text>
            <Text>Language</Text>
            <Text>Skills</Text>
            <br />
            <br />
            <button type="submit">submit</button>
          </div>
        )}
        {showSelect === "3" && (
          <div><Text>Career</Text>
            <Text>Years of Experience</Text>
            <Text>Soft skills</Text>
            <Text>LinkedIn URL</Text>
            <Text>Language</Text>
            <Text>Skills</Text>
            <br />
            <br />
            <button type="submit">submit</button>
          </div>
        )}
        {showSelect === "4" && (
          <div><Text>Career</Text>
            <Text>Years of Experience</Text>
            <Text>Soft skills</Text>
            <Text>LinkedIn URL</Text>
            <Text>Language</Text>
            <Text>Skills</Text>
            <br />
            <br />
            <button type="submit">submit</button>
          </div>
        )}
      </form>

      <Footer />
    </div>
  );
}

export default AddCV;
