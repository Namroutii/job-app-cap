import Footer from "../../components/footer/Footer";
import LoginForm from "../../components/login/loginform";
import NavBarLogin from "../../components/NavBarLogin/NavBarLogin.";

function Login() {
  return (
    <>
    <div className="login-page">
      <NavBarLogin/>
      <LoginForm />
      </div>
      <Footer/>
      </>
  );
}
export default Login;
