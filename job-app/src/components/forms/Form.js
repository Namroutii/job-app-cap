import "./Form.css";

const Form = (props) => {
  return (
    <>
      <form>
        <div className="form-group">
          <label> {props.children} </label> <br />
          <input type="text" placeholder={props.children} required />
        </div>
      </form>
    </>
  );
};

export default Form;
