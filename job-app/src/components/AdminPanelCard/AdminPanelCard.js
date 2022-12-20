
import "./AdminPanelCard.css";


function AdminPanelCard(props) {
  const classes = "title-adminPanel " + props.className
  const border = "container-fluid " + props.border
  return (
    <section className="cards-adminPanel" id="adminPanel">
      <div className={border}>
        <div className="card-body-adminPanel">
          <div className="row">
            <div className="col-8 AdminPanelCard">
              <div className={classes}>{props.title}</div>
              <div className="h5 reports">{props.reports}</div>
            </div>
            <div className="col-2 icon-adminPanel">
              <i className={props.icon}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AdminPanelCard;
