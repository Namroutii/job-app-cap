
import "./Inputs.css";
const Selects = () => {
  return (
    <>
          <label className="label-form"> Degree:</label>
    <div className="input">

        <select className="form-select">
          <option value={0}>Select your Degree:</option>
          <option value="1">Associate  </option>
          <option value="2">Bachelor's  </option>
          <option value="3">Masters  </option>
          <option value="4">Doctorate </option>
        </select>
        </div>
      
    </>
  );
};
export default Selects;
