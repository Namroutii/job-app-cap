import "./Footer.css";
const Footer = () => {
    return (
        <footer className="text-center">
            <div className="row content-elements">
                <p className="text-center contact-info-title">Contact Information </p>
                <div className="logo-motto col">
                    <img className="footer-logo " src="./images/Logo-Footer.png" alt=""></img>
                </div>
                < div className="footer-contact col">
                    <span className="fw-bold loc">Location: Nablus Rafedia st</span>
                    <span className="fw-bold phone">Phone: 092355555</span>
                    <span className="fw-bold email">Email: hireme@gmail.com </span>
                </div>
                <div className="col">
                    <div><p className="social-title">Social media:</p></div>
                    <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
                    <a href="https://twitter.com/login" className="fa fa-twitter"></a>
                    <a href="https://www.linkedin.com" className="fa fa-linkedin"></a>
                </div>
            </div>

            <div>
                <p className="lead copy-right">&copy; C.A.P. NNU </p>
            </div>
        </footer>
    )
}
export default Footer;