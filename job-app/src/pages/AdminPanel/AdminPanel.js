
import AdminPanelCard from "../../components/AdminPanelCard/AdminPanelCard";
import NavBar from "../../components/NavBar/NavBar";
import "./AdminPanel.css";
import Charts from "../../components/AdminPanel/Charts";
function AdminPanel() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <NavBar />
                </div>
                <div className="row first-row">
                    <div className="col-12 col-md-10 col-lg-6 col-xl-3">
                        <AdminPanelCard title="Age" reports="24" className="text-first" border="border-left-first" icon="fa-regular fa-calendar-days" />
                    </div>
                    <div className="col-12 col-md-10 col-lg-6 col-xl-3">
                        <AdminPanelCard title="City" reports="Bethlehem" className="text-second" border="border-left-second" icon="fa-solid fa-city" />
                    </div>
                    <div className="col-12 col-md-10 col-lg-6 col-xl-3">
                        <AdminPanelCard title="Position" reports="Accountant" className="text-third" border="border-left-third" icon="fa-solid fa-user" />
                    </div>
                    <div className="col-12 col-md-10 col-lg-6 col-xl-3">
                        <AdminPanelCard title="Experience" reports="3" className="text-fourth" border="border-left-fourth" icon="fa-solid fa-file-csv" />
                    </div>
                </div>
            </div>
            <Charts />
        </div>
    )
}
export default AdminPanel;