import Footer from "../../components/footer/Footer";
import LoginForm from "../../components/login/loginform";
import NavBarLogin from "../../components/NavBarLogin/NavBarLogin.";
import "./Login.css"

function Login() {
  return (
    <>
      <NavBarLogin />
      <div className="login-page">
        <LoginForm />
      </div>
      <Footer />
    </>
  );
}
export default Login;
