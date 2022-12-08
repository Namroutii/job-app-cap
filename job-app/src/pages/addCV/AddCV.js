import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";
import Form from "../../components/forms/Form";
import "./AddCV.css";
import { useState } from "react";
import Select from "react-select";

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
  const [number, setNumber] = useState("");
  const [check, setCheck] = useState("");
  const [email, setEmail] = useState("");
  const [checkEm, setCheckEmail] = useState("");
  const checkNumber = () => {
    let stringNumber = String(number);
    if (stringNumber.length !== 9) setCheck("error");
    else setCheck("done");
  };
  const checkEmail = () => {
    if (email.length < 10) setCheckEmail("error");
    else setCheck("done");
  };

  return (
    <div>
      <NavBar /> <br />
      <div className="title">Add your CV Down here </div>
      <hr />
      <form>
        <Form>Full Name</Form>

        <label className="select-label">Birth of Date</label>
        <div className="form-date">
          <input type="date" className="form-control" />
        </div>

        <Form>Address</Form>

        <div className="form-number">
          <label>Phone Number</label>
          <input
            className="form-control form-control-lg"
            type="phone"
            placeholder="NUMBER"
            onChange={(e) => {
              setNumber(e.target.value);
              checkNumber();
            }}
          />
        </div>
        <p>{check}</p>
        <label className="select-label">Email</label>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
              checkEmail();
            }}
          />
        </div>
        <p>{checkEm}</p>

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
