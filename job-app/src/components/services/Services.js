
import "./ServicesStyle.css";
const Services=()=>{
    return(
        <section className="cards" id="services">
            <h1 class="title">Services</h1>
            <div className="content">
                < div className="card">
                    <div className="imag">
                        <img src="./images/find.jpg" alt="..." >
                        </img>
                    </div>
                    <div className="info">
                        <h2>Find employees</h2>
                        <p>Companies struggle to locate employees,so we are in HireMe we make it simple for you by showing employee resumes and providing simple filtering so you can find the best possibilities as quickly as possible.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="imag">
                        <img src="./images/Filter.jpg" alt="..."  >
                        </img>
                    </div>
                    <div className="info">
                        <h2>Filter</h2>
                        <p>When reviewing resumes, it might be challenging to find the information you're looking for, whether it's years of experience or age. With a touch of a button, so we are in HireMe we've given you fast ways to quickly find the ideal candidate. Here, you'll find everything you need to hire the ideal candidate.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="imag">
                        <img src="./images/cv.jpg" alt="..."  >
                        </img>
                    </div>
                    <div className="info">
                        <h2>Add CV</h2>
                        <p>Employees can submit a CV with ease by adding the necessary information to the area on the page dedicated for it, and he can change it at any moment by entering into his account, that he will make it before attaching the CV.</p>
                    </div>
                </div>
                </div>
                
                </section>
                
    )
    
    
    }
    export default Services;