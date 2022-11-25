import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";
import Form from "../../components/forms/Form";

import "./AddCV.css";
import { useState } from "react";


function AddCV() {
  const [showSelect, setShowSelect] = useState("");
  const handleShowSelect = (event) => {
    const getuser = event.target.value;
    setShowSelect(getuser);
  };

  return (
    <div>
      <NavBar /> <br />
      <div className="title">Add your CV Down here </div>
      <hr />
      <form>
      <Form>Full Name</Form>
      <Form>Date of birth</Form>
      <Form>Address</Form>
      <Form>Phone Number</Form>

      <Form>Email</Form>
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
          <br /><br />
          <button type="submit">submit</button>
          <br /><br />
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
          <br /><br />
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
          <br /><br />
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
          <br /><br />
          <button type="submit">submit</button>
        </div>
      )}
      </form>
      <Footer />
    </div>
  );
}

export default AddCV;
