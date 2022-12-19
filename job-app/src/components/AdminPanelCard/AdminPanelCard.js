
import "./AdminPanelCard.css";



function AdminPanelCard() {
  return (
    <section className="cards-adminPanel" id="adminPanel">
      <div className="container-fluid">
        <div className="card-body-adminPanel">
          <div className="row">
            <div className="col-8">
              <div className="p title-adminPanel">Average age</div>
              <div className="h4 reports">25</div>
            </div>
            <div className="col-2 icon-adminPanel">
              <i class="fa-regular fa-calendar-days"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AdminPanelCard;
