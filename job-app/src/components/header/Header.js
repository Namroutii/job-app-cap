
import "./HeaderStyle.css"
function Header()
{
    return(
        <section>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="https://imageio.forbes.com/specials-images/imageserve/6048dc531c59789da537ae0c/Job-Search-Hiring-Website--Young-business-man-searching-for-job-online-a-hand-holding/960x0.jpg?format=jpg&width=960" class="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://sloanreview.mit.edu/wp-content/uploads/2021/02/GEN-Laker-Virtual-Hiring-Interview-Online-1290x860-1.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://media.istockphoto.com/id/1256603011/photo/business-network-concept-customer-support-shaking-hands.jpg?s=612x612&w=0&k=20&c=uRYJ6c2EyNO92w0wQlCScEVwbdoyHaXzfIxw1q7zNLA=" class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        </section>
    )
}

export default Header;




