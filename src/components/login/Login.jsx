import "./login.scss"
function login() {
    return (
        <div class="container">
            <div class="text">
                <h1>Log in</h1>
                <br />
                <h3>Mark the attendance in a digital way!</h3>
            </div>
            <hr />
            <div class="your-input">
                <div class="input">
                    <input type="text" name="email" id="email" required />
                    <label for="email">Email</label>
                </div>
                <div class="input">
                    <input type="text" name="facultyID" id="facID" required />
                    <label for="facID">Faculty ID</label>
                </div>
                <div class="input">
                    <input type="password" name="password" id="password" required />
                    <label for=" password">
                        Password
                    </label>
                </div>
            </div>
            <a href="#" class="forgot-password-link">
                Forgot Password?
            </a>
            <button>Sign in</button>
        </div>
    );
}
export default login;
