
import "./Inputs.css";
const Date = (props) => {
  return (
    <>
    <div className="input">
    <div className="date-input">
      <label htmlFor="date" className="label-form">Birth of Date</label>
      <div className="input-date">
        <input
        required
        ref={props.refer}
          calendar-picker="date"
          className="fab-DateInput"
          type="date"
          min="1960-01-01"
          max="2004-12-31"
          id="date"
        />
      </div>
      </div>
      </div>
    </>
  );
};
export default Date;
