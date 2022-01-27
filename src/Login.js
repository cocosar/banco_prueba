import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <div className="login-form">
            <h2>Inicio de sesión</h2>
            <h3>Por favor ingrese sus datos</h3>
            <form>
                <div>
                    Rut
                    <input />
                </div>
                <div>
                    Password
                    <input
                        type="password"
                        
                    />
                </div>
                <Link to="/action">INICIO SESIÓN</Link>
            </form>
        </div>
    )
}


export default LoginForm