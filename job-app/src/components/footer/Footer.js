import "./Footer.css";
const Footer = () => {
    return (
        <footer id="footer">
                <div className="logo-motto">
                    <img className="footer-logo" src="./images/Logo-Footer.png" alt=""></img>
                    <h5><span className="footer-motto"></span></h5>
                </div>
                < div className="footer-contact">
                    <div className="p-1"><span class="fw-bold loc">Location: Nablus 24st</span></div>
                    <div className="p-1"><span class="fw-bold phone">Phone: 092355555</span></div>    
                    <div className="p-1"><span class="fw-bold email">Email: hireme@gmail.com </span></div>
                </div> 
                < div className="socials">
                    
                </div> 
        </footer>
    )
}
export default Footer