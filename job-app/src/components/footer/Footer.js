import "./Footer.css";
const Footer = () => {
    return (
        <footer className="text-center">
            <section id="contact-info">
                <div className="row footer-body">
                    <h2 className="text-center contact-info-title " id="contact">
                        Contact Information{" "}
                    </h2>
                    <div className="logo-motto col">
                        <img className="footer-logo " src="./images/Logo-Footer.png" alt=""></img>
                        <h5>
                            <span className="footer-motto">Trust is all you need </span>
                        </h5>
                    </div>
                    <div className="footer-contact col">
                        <span className="fw-bold loc">Location: Nablus Rafedia st</span>
                        <span className="fw-bold phone">Phone: 092355555</span>
                        <span className="fw-bold email">Email: hireme@gmail.com </span>
                    </div>
                    <div className="col">
                        <div>
                            <h4 className="social-title">Social media:</h4>
                        </div>
                        <a href="https://ar-ar.facebook.com/" className="fa fa-facebook"></a>
                        <a href="https://twitter.com/i/flow/login" className="fa fa-twitter"></a>
                        <a href="https://www.linkedin.com/" className="fa fa-linkedin"></a>
                    </div>
                    <p className="lead copy-right">&copy; C.A.P. NNU </p>
                </div>

            </section>
        </footer>
    );
};
export default Footer;