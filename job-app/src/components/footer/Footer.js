import "./Footer.css";
const Footer = () => {
    return (
        <footer className="text-center ">
            <section id="contact-info">
                <div className="row footer-body">
                    <div className="socials">
                        <a href="https://ar-ar.facebook.com/" className="fa fa-facebook"></a>
                        <a href="https://twitter.com/i/flow/login" className="fa fa-twitter"></a>
                        <a href="https://www.linkedin.com/" className="fa fa-linkedin"></a>
                        <a href="https://www.slack.com/" className="fa fa-slack"></a>
                    </div>

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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d751.7271817053502!2d35.220692674590744!3d32.22736666315977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2s!4v1671897002489!5m2!1sar!2s" 
                            allowfullscreen="" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <p className="lead copy-right">&copy; C.A.P. NNU </p>
                </div>
            </section>
        </footer>
    );
};
export default Footer;