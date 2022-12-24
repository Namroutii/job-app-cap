import "./ServicesStyle.css";
import { Link } from "react-router-dom";

const Services = (props) => {
  return (
    <>
      <section className="card cards-services h-100 ">
        <Link to={props.link} className="services-links"><img src={props.imag} alt="..."></img></Link>
        <div className="card-body">
          <Link to={props.link} className="services-links"><h5 className="card-title">{props.info}</h5></Link>
          <p className="card-text">{props.paragraph}</p>
        </div>
      </section>
    </>
  );
};
export default Services;
