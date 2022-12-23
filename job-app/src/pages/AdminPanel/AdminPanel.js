import AdminPanelCard from "../../components/AdminPanelCard/AdminPanelCard";
import "./AdminPanel.css";
import Charts from "../../components/AdminPanel/Charts";
import NavBarAdminPanel from "../../components/NavigationBars/NavBarAdminPanel";
import data from "../../data/CVsData"
function AdminPanel() {
    let temp;
    let ageSum = 0;
    let count = data.length;
    let city = {};
    let position = {};
    let experience = {};
    data.map((row) => {
        ageSum = ageSum + row.age;
        if (row.city in city) {
            city[row.city] += 1
        }
        else {
            temp = row.city;
            city[temp] = 0;
        }
        if (row.position in position) {
            position[row.position] += 1
        }
        else {
            temp = row.position;
            position[temp] = 0;
        }
        if (row.experience in experience) {
            experience[row.experience] += 1
        }
        else {
            temp = row.experience;
            experience[temp] = 0;
        }
    })
    console.log(experience);
    ageSum = ageSum / count;
    ageSum = ageSum.toFixed();
    const maxCity = Math.max(...Object.values(city));
    const maxPosition = Math.max(...Object.values(position));
    const maxExperience = Math.max(...Object.values(experience));
    function GetObjKey(obj, value) {
        return Object.keys(obj).find(key => obj[key] === value);
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <NavBarAdminPanel />
                </div>
                <div className="row first-row">
                    <div className="col-12 col-md-10 col-lg-6 col-xl-3">
                        <AdminPanelCard title="Age" reports={ageSum} className="text-first" border="border-left-first" icon="fa-regular fa-calendar-days" />
                    </div>
                    <div className="col-12 col-md-10 col-lg-6 col-xl-3">
                        <AdminPanelCard title="City" reports={GetObjKey(city, maxCity)} className="text-second" border="border-left-second" icon="fa-solid fa-city" />
                    </div>
                    <div className="col-12 col-md-10 col-lg-6 col-xl-3">
                        <AdminPanelCard title="Position" reports={GetObjKey(position, maxPosition)} className="text-third" border="border-left-third" icon="fa-solid fa-user" />
                    </div>
                    <div className="col-12 col-md-10 col-lg-6 col-xl-3">
                        <AdminPanelCard title="Experience" reports={GetObjKey(experience, maxExperience)} className="text-fourth" border="border-left-fourth" icon="fa-solid fa-file-csv" />
                    </div>
                </div>
            </div>
            <Charts />
        </div>
    )
}
export default AdminPanel;