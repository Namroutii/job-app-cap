import "./Footer.css";
const Footer = () => {
    return (
        <footer className="text-center">
            <section id="contact-info">            
                    <div className="row">
                        <h2 className="text-center contact-info-title">Contact Information </h2>
                        <div className="logo-motto col">
                            <img className="footer-logo " src="./images/Logo-Footer.png" alt=""></img>
                        </div>
                        <address address className="footer-contact col">
                            <span className="loc">Location: Nablus Rafidia st</span>
                            <span className="phone">Phone: 092355555</span>  
                            <span className="email">Email: hireme@gmail.com </span>
                        </address> 
                        <div className="col">
                            <div><h4 className="social-title">Social media:</h4></div>
                            <a href="https://ar-ar.facebook.com/" className="fa fa-facebook"></a>
                            <a href="https://twitter.com/i/flow/login" className="fa fa-twitter"></a>
                            <a href="https://www.linkedin.com/" className="fa fa-linkedin"></a>
                        </div>
                    </div>
                <h4 className="lead copy-right text-center">&copy; C.A.P. NNU </h4>
            </section>
        </footer>
        // <footer>
        //     <h2 className="text-center contact-info-title">Contact Information</h2>
        //     <div className="row">
        //         <div className="logo col">
        //             <img className="footer-logo " src="./images/Logo-Footer.png" alt=""></img>
        //         </div>
        //         <div className="footer-contact col">
        //             <span className="loc">Location: Nablus Rafidia st</span>
        //             <span className="phone">Phone: 092355555</span>  
        //             <span className="email">Email: hireme@gmail.com </span>
        //         </div>
        //         <div className="col">
        //             <h4 className="social-title">Social media:</h4>
        //             <a href="https://ar-ar.facebook.com/" className="fa fa-facebook"></a>
        //             <a href="https://twitter.com/i/flow/login" className="fa fa-twitter"></a>
        //             <a href="https://www.linkedin.com/" className="fa fa-linkedin"></a>
        //         </div>
        //     </div>
        //     <h4 className="lead copy-right text-center">&copy; C.A.P. NNU </h4>
        // </footer>
    )
}
export default Footer;