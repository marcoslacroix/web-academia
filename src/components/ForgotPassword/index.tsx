import axios from "axios";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "utils/requests";


function ForgotPassword() {

    const [sucessMessage, setSucessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState("");

    const postLogin = () => {

        if (email.length === 0) {
            setErrorMessage("Email obrigatório");
            return
        }

        const data = JSON.stringify({
            email: email
        });

        axios.post(`${BASE_URL}/auth/forgot-password`, data, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then((response) => {
            setSucessMessage("Um link foi enviado para seu e-mail");
            setErrorMessage('');
        }).catch((error) => {
            setSucessMessage('');
            setErrorMessage(error.response.data.message);
        });
    };

    return (
        <>
            <NavBar />
            <div className="card-layout">
                <h1 className="h3 mb-3 fw-normal">Esqueceu sua senha?</h1>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control rounded-4" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
                    <label className="floatingInput">E-mail</label>
                </div>
                {errorMessage && <div className="error"> {errorMessage} </div>}
                {sucessMessage && <div className="sucess"> {sucessMessage} </div>}
                <button onClick={e => postLogin()} className="btn-redefinir text-cente w-50 btn btn-sm btn-primary" >Redefinir</button>
                <Link className="btn-voltar" to={"/"} >Voltar</Link>
            </div>
            <Footer />
        </>
    );
}

export default ForgotPassword;
declare module 'react-router-dom';


