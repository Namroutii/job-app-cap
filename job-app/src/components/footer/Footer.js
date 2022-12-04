import "./Footer.css";
const Footer = () => {
    return (
    <footer className="p-1 text-center">
        <section id="contact-info" className="p-5">
            <div className="container">
                <div className="row g-4">
                    <h2 className="text-center mb-3 contact-info-title">Contact Information </h2>
                    <div className="logo-motto col">
                        <img className="footer-logo " src="./images/Logo-Footer.png" alt=""></img>
                        <h5><span className="footer-motto">Trust is all you need </span></h5>
                    </div>
                    < div className="footer-contact col">
                        <span className="p-1 fw-bold loc">Location: Nablus Rafidia st</span>
                        <span className="p-1 fw-bold phone">Phone: 092355555</span>  
                        <span className="p-1 fw-bold email">Email: hireme@gmail.com </span>
                    </div> 
                    <div className="col">
                        <div><h4 className="social-title">Social media:</h4></div>
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-linkedin"></a>
                    </div>
                </div>
            </div>
        </section>
        <div className="container">
            <p className="lead copy-right">&copy; C.A.P. NNU </p>
        </div>
    </footer>
    )
}
export default Footer;