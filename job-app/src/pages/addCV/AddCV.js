
import Footer from "../../components/footer/Footer";
import Form from "../../components/forms/Form";
import "./AddCV.css";
import { useState } from "react";
import Select from "react-select";
import NavBarAddCvs from "../../components/NavBarAddCvs/NavBarAddCvs";

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
      <NavBarAddCvs/> <br />
      <div className="title">Add your CV Down here </div>
      <hr />
      <form>
        <Form>Full Name</Form>
        <div className="form-date">
          <label className="select-label">Birth of Date</label>
          <input
            type="date"
            className="form-control"
          />
        </div>
        <Form>Address</Form>
        <Form>Phone Number</Form>
        <Form>Email</Form>
        <div className="dropdown-container">
          <label className="select-label">Language</label>
          <Select
            options={optionList}
            placeholder="Select Language"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            isMulti
          />
        </div>
        <Form>Degree</Form>
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
            <Form>Career</Form>
            <Form>Years of Experience</Form>
            <Form>Soft skills</Form>
            <Form>LinkedIn URL</Form>
            <Form>Language</Form>
            <Form>Skills</Form>
            <br />
            <br />
            <button type="submit">submit</button>
            <br />
            <br />
          </div>
        )}
        {showSelect === "2" && (
          <div>
            <Form>Career</Form>
            <Form>Years of Experience</Form>
            <Form>Soft skills</Form>
            <Form>LinkedIn URL</Form>
            <Form>Language</Form>
            <Form>Skills</Form>
            <br />
            <br />
            <button type="submit">submit</button>
          </div>
        )}
        {showSelect === "3" && (
          <div>
            <Form>Career</Form>
            <Form>Years of Experience</Form>
            <Form>Soft skills</Form>
            <Form>LinkedIn URL</Form>
            <Form>Language</Form>
            <Form>Skills</Form>
            <br />
            <br />
            <button type="submit">submit</button>
          </div>
        )}
        {showSelect === "4" && (
          <div>
            <Form>Career</Form>
            <Form>Years of Experience</Form>
            <Form>Soft skills</Form>
            <Form>LinkedIn URL</Form>
            <Form>Language</Form>
            <Form>Skills</Form>
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
