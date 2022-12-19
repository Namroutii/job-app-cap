
import "./Inputs.css";
const Date = () => {
  return (
    <>
    <div className="date-input">
      <label className="label-form">Birth of Date</label>
      <div className="input-date">
        <input
          calendar-picker="date"
          className="fab-DateInput"
          type="date"
          min="1960-01-01"
          max="2004-12-31"
          required
        />
      </div>
      </div>
    </>
  );
};
export default Date;
