import Footer from "../../components/footer/Footer";
import LoginForm from "../../components/login/loginform";
import NavBarLogin from "../../components/NavigationBars/NavBarLogin.";
import "./Login.css"
function Login() {
  return (
    <>
      <div className="login-body">
        <NavBarLogin />
        <div className="login-page">
          <LoginForm />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Login;
