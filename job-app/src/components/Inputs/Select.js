import React from "react";

const Selects = () => {
  return (
    <>
          <label className="label-form"> Degree:</label>
    <div className="input">

        <select className="form-select">
          <option value={0}>Select your Degree:</option>
          <option value="1">Associate Degree </option>
          <option value="2">Bachelor's Degree </option>
          <option value="3">Masters Degree </option>
          <option value="4">Doctoral Degree</option>
        </select>
        </div>
      
    </>
  );
};
export default Selects;
