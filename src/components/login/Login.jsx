import "./Login.scss"
function Login() {
    return (
        <div className="Login-div">
            <form className="Login-form" action="">
                <img src="https://cdn-icons-png.flaticon.com/512/3024/3024605.png" />
                <div className="L-I-div">
                    <label>Faculty ID : </label>
                    <input className="Login-input" type="text" name="" id="" />
                </div>
                <div className="L-I-div">
                    <label>Faculty ID : </label>
                    <input className="Login-input" type="text" name="" id="" />
                </div>

                <div className="L-I-div">
                    <label>Password : </label>
                    <input className="Login-input" type="text" name="" id="" />
                </div>
                <a className="Login-btn" href="/attendace">Login</a>
                <div className="Login-r-btn">
                    Don't have account ?  <a href="/register">Register</a>
                </div>
            </form>
        </div>
    );
}
export default Login;