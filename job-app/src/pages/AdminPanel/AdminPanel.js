
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
                    <div className="col-3">
                        <AdminPanelCard />
                    </div>
                    <div className="col-3">
                        <AdminPanelCard />
                    </div>
                    <div className="col-3">
                        <AdminPanelCard />
                    </div>
                    <div className="col-3">
                        <AdminPanelCard />
                    </div>
                </div>
            </div>
             <Charts/>
        </div>
    )

}
export default AdminPanel;