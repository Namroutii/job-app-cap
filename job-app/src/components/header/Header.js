
import "./HeaderStyle.css"
function Header()
{
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img className="d-block w-100" src="https://imageio.forbes.com/specials-images/imageserve/6048dc531c59789da537ae0c/Job-Search-Hiring-Website--Young-business-man-searching-for-job-online-a-hand-holding/960x0.jpg?format=jpg&width=960" alt="First slide"/>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src="https://sloanreview.mit.edu/wp-content/uploads/2021/02/GEN-Laker-Virtual-Hiring-Interview-Online-1290x860-1.jpg" alt="Second slide"/>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src="https://media.istockphoto.com/id/1256603011/photo/business-network-concept-customer-support-shaking-hands.jpg?s=612x612&w=0&k=20&c=uRYJ6c2EyNO92w0wQlCScEVwbdoyHaXzfIxw1q7zNLA=" alt="Third slide"/>
        </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
        </a>
        </div>
    
    
    )
}

export default Header;






