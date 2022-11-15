

import './Form.css';




const Form =(props)=>{




    return(

     
       <> 
 <div className='form'>
    <label > {props.children} </label> 
    <input type="text" placeholder={props.children} required/>
 </div>


       </>
)

}






export default Form;