
import "../login/loginform.css"

const LoginForm = () => {
    return (

        <div className="cover">
            <h1>Login to HireMe</h1>

            <input type="text" placeholder="Enter your username" />
            <input type="password" placeholder="Enter your password" />

            <div className="login-btn">Login</div>

            <p className="text">Or login using</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google">
                </div>
            </div>

        </div>
    )
}

export default LoginForm