
import "./Inputs.css";
const Date = () => {
  return (
    <>
    <div className="date-input">
      <label className="label-form">Birth of Date</label>
      <div className="input">
        <input
          calendar-picker="date"
          className="fab-DateInput"
          type="date"
          required
        />
      </div>
      </div>
    </>
  );
};
export default Date;
