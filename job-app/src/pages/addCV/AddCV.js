import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";
import Form from "../../components/forms/Form";
import "./AddCV.css";
import { useState } from "react";

function AddCV() {
  const [showSelect, setShowSelect] = useState("");

  const handleShowSelect = (event) => {
    const getuser = event.target.value;
    console.log(getuser);
    setShowSelect(getuser);
  };

  return (
    <div>
      <NavBar /> <br />
      <div className=" title">Basic Information</div>
      <hr />
      <Form>Full Name</Form>
      <Form>Address</Form>
      <Form>Phone Number</Form>
      <div className="email-input">
        <label className="emailLabel"> Email</label> <br />
        <input type="email" placeholder="Email" className="email-input" />
      </div>
      <Form>Years of Experience</Form>
      <Form>Language</Form>
      <Form>Skills</Form>
      <Form>Date of birth</Form>
      <Form>Career</Form>
      <Form>Degree</Form>
      <Form>Soft skills</Form>
      <Form>LinkedIn URL</Form>
      <div className="select">
        <label> Department:</label> <br />
        <select onChange={(e) => handleShowSelect(e)}>
          <option selected>Select your job:</option>
          <option value="1">Accounting </option>
          <option value="2">Programmer </option>
          <option value="3">Designer </option>
          <option value="3">Cyber security</option>
        </select>
      </div>
      {showSelect === "1" && (    //here but your box for the job 
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default AddCV;
