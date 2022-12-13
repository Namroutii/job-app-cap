import "./ServicesStyle.css";
import { Link } from "react-router-dom";

const Services = (props) => {
  return (
    <section className="cardsServices" id="services">
      
      <div className="content">
        <Link to={props.link} className="services-links">
          <div className="cardServices">
            <div className="imagServices">
              <img src={props.imag} alt="..."></img>
            </div>

            <div className="infoServices">
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
