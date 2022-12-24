
import "./Inputs.css";
const Selects = (props) => {
  return (
    <>
      
      <div className="input">
      <label htmlFor="select-degree" className="label-form"> Degree:</label>
        <select  ref={props.refer} id="select-degree" className="form-select" required>
          <option value={'NAN'}>Select your Degree:</option>
          <option value="Bachelor">Bachelor  </option>
          <option value="Below Tawjihi">Below Tawjihi  </option>
          <option value="Tawjihi"> Tawjihi  </option>
          <option value="Diploma ">Diploma  </option>
          <option value="Master">Master  </option>
          <option value="Doctorate">Doctorate </option>
        </select>
      </div>

    </>
  );
};
export default Selects;
