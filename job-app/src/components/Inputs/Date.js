import React from "react";

const Date = () => {
  return (
    <>
      <label className="label-form">Birth of Date</label>
      <div className="input">
        <input
          calendar-picker="date"
          className="fab-TextInput "
          type="date"
          required
        />
      </div>
    </>
  );
};
export default Date;
