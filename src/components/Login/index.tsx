import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <NavBar />
            <div className="card-layout">
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control rounded-4" id="floatingInput" placeholder="Username" />
                    <label className="floatingInput">Username</label>
                    <Link to={"/forgotPassword"}>Esqueceu sua senha?</Link>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password" />
                    <label className="floatingPassword">Password</label>
                </div>
                <Link className="w-100 btn btn-sm btn-primary" to={"/home"} >Sign in</Link>
            </div>
            <Footer />
        </>
    );
}

export default Login;