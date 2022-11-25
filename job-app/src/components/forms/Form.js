import './Form.css';


const Form = (props) => {
return (
   <>
      <form>
      <div className='form'>
            <label > {props.children} </label>
            <input type="text" placeholder={props.children} required />
      </div>
      </form>
   </>
   )

}






export default Form;