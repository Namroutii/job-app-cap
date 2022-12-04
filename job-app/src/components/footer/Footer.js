import "./Footer.css";
const Footer = () => {
    return (
    <footer class="p-1 text-center">
        <section id="contact-info" class="p-5">
            <div class="container">
                <div class="row g-4">
                    <h2 class="text-center mb-3 contact-info-title">Contact Information </h2>
                    <div className="logo-motto col">
                        <img className="footer-logo " src="./images/Logo-Footer.png" alt=""></img>
                        <h5><span className="footer-motto">Trust is all you need </span></h5>
                    </div>
                    < div className="footer-contact col">
                        <span class="p-1 fw-bold loc">Location: Nablus Rafidia st</span>
                        <span class="p-1 fw-bold phone">Phone: 092355555</span>  
                        <span class="p-1 fw-bold email">Email: hireme@gmail.com </span>
                    </div> 
                    <div class="col">
                        <div><h4 class="social-title">Social media:</h4></div>
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-linkedin"></a>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
            <p class="lead copy-right">&copy; C.A.P. NNU </p>
        </div>
    </footer>
    )
}
export default Footer;