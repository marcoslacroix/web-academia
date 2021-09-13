import axios from "axios";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "utils/requests";

function ResetPassword() {
    
    const [sucessMessage, setSucessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const postChangePassword = () => {
    
        const queryParams = new URLSearchParams(window.location.search);
        const token = queryParams.get('token');

        if (password.length === 0 || password2.length === 0) {
            setErrorMessage("Informe as senhas!");
            return;
        }

        const data = JSON.stringify({
            token: token,
            password: password,
            password2: password2
        });

        axios.post(`${BASE_URL}/auth/change-password`, data, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then((response) => {
            setSucessMessage("Senha alterada com sucesso!");
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
                <h1 className="h3 mb-3 fw-normal">Por favor informe as senhas</h1>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control rounded-4" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
                    <label className="floatingInput">Informe sua senha</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control rounded-4" placeholder="Senha" onChange={e => setPassword2(e.target.value)}/>
                    <label className="floatingInput">Confirme sua senha</label>
                </div>
                <button onClick={e => postChangePassword()} type="submit" className="btn-redefinir text-cente w-50 btn btn-sm btn-primary" >Redefinir</button>
                {errorMessage && <div className="error"> {errorMessage} </div>}
                {sucessMessage && <div className="sucess"> {sucessMessage} </div>}
                <Link className="btn-voltar" to={"/"} >Voltar</Link>
            </div>
            <Footer />
        </>
    );
}

export default ResetPassword;