import "./ServicesStyle.css";
import { Link } from "react-router-dom";

const Services = (props) => {
  return (
    <section className="cards" id="services">
      
      <div className="content">
        <Link to={props.link} className="services-links">
          <div className="card">
            <div className="imag">
              <img src={props.imag} alt="..."></img>
            </div>

            <div className="info">
              <h2>{props.info}</h2>
              <p>
              {props.paragraph}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
export default Services;
