import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";
import "./AddCV.css";
import { useState } from "react";
import Select from "react-select";
import Text from "../../components/Inputs/Text";
import Email from "../../components/Inputs/Email";
import Phone from "../../components/Inputs/Phone";
import Date from "../../components/Inputs/Date";
import Selects from "../../components/Inputs/Select";
import Url from "../../components/Inputs/URL";

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
  const [showSelect, setShowSelect] = useState("");
  const handleShowSelect = (event) => {
    const getUser = event.target.value;
    setShowSelect(getUser);
  };
  return (
    <div>
      <NavBar /> <br />
      <br />
      <br />
      <div className="title">Add your CV Down here </div>
      <hr />
      <form>
        <Text>Full Name</Text>
        <Email />
        <Phone>Phone Number</Phone>
        <label className="label-form"> City:</label>
        <div className="form">
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
          </select>
        </div>
        <Text>Address</Text>
        <Date />
        <Selects />
        <label className="label-form">Language</label>
        <div className="form">
          <Select
            className="fab-TextInput "
            options={optionList}
            placeholder="Select Language"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            isMulti
          />
        </div>
        <label className="label-form"> Department:</label>
        <div className="form">
          <select className="form-select" onChange={(e) => handleShowSelect(e)}>
            <option value={0}>Select your job:</option>
            <option value="1">Programmer </option>
            <option value="2">Accountant </option>
            <option value="3">Designer </option>
            <option value="4">Cyber security</option>
          </select>
        </div>
        {showSelect === "1" && (
          <div>
            <Text>Career</Text>
            <Phone>Years</Phone>
            <Text>Soft skills</Text>
            <Url />
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
          <div>
            <Text>Career</Text>
            <Text>Years of Experience</Text>
            <Text>Soft skills</Text>
            <Url />
            <Text>Language</Text>
            <Text>Skills</Text>
            <br />
            <br />
            <button type="submit">submit</button>
          </div>
        )}
        {showSelect === "3" && (
          <div>
            <Text>Career</Text>
            <Text>Years of Experience</Text>
            <Text>Soft skills</Text>
            <Url />
            <Text>Language</Text>
            <Text>Skills</Text>
            <br />
            <br />
            <button type="submit">submit</button>
          </div>
        )}
        {showSelect === "4" && (
          <div>
            <Text>Career</Text>
            <Text>Years of Experience</Text>
            <Text>Soft skills</Text>
            <Url />
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
