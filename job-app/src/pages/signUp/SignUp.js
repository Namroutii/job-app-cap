import "./SignUp.css"
// import NavBarLogin from "../../components/NavBarLogin/NavBarLogin.";
import Footer from "../../components/footer/Footer";
import Name from "../../components/Inputs/Name";
import Email from "../../components/Inputs/Email";
import Phone from "../../components/Inputs/Phone";
import Password from "../../components/Inputs/Password";
import Date from "../../components/Inputs/Date";

function SignUp() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            {/* <NavBarLogin /> */}
            <div className="signUp-page">
                <form className="signUp-cover" onSubmit={handleSubmit}>
                    <h1 className="signUp-header">Sign Up</h1>
                    <Name>Full Name</Name>
                    <Email />
                    <Phone>Phone Number</Phone>
                    <Date />
                    <Password />
                    <button className="signUp-button">Submit</button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default SignUp;