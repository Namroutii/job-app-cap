
import "./Inputs.css";
const Selects = () => {
  return (
    <>
      <label className="label-form"> Degree:</label>
      <div className="input">

        <select className="form-select">
          <option value={0}>Select your Degree:</option>
          <option value="1">Bachelor  </option>
          <option value="2">Below Tawjihi  </option>
          <option value="3"> Tawjihi  </option>
          <option value="4">Diploma  </option>
          <option value="5">Master  </option>
          <option value="6">Doctorate </option>
        </select>
      </div>

    </>
  );
};
export default Selects;
