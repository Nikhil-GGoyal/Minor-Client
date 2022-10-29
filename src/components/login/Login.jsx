import "./login.scss"
function login() {
    return (
        // <div className="App">
            <form action="" className="container App">
            <div>
                <h1>Log in</h1>
                <h3>Mark the attendance in a digital way!</h3>
            </div>
            <div className="your-input">
                <div className="input">
                    <input type="text" name="email" id="email" required autoComplete="off" />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input">
                    <input type="text" name="facultyID" id="facID" required autoComplete="off" />
                    <label htmlFor="facID">Faculty ID</label>
                </div>
                <div className="input">
                    <input type="password" name="password" id="password" required autoComplete="off" />
                    <label htmlFor="password">
                        Password
                    </label>
                </div>
            </div>
            <a href="/#">Forgot Password?</a>
            <button>Sign in</button>
            </form>
        // </div>
    );
}
export default login;
