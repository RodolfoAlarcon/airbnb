import { Link } from "react-router-dom";
import "./css/Login.css";

export const Login = () => {
  return (
    <div className="container-fluid containerLogin">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-12">
            <form className="p-4 rounded-3 loginForm">
              <h2 className="text-center text-light mb-4">Login</h2>
              <div className="mb-3">
                <input
                  placeholder="Correo Electrónico"
                  type="email"
                  className="form-control loginInput"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <input
                  placeholder="Contraseña"
                  type="password"
                  className="form-control loginInput"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label text-white"
                  for="exampleCheck1"
                >
                  Recordar
                </label>
              </div>
              <button type="submit" className="btn btnForm w-100">
                Enviar
              </button>
              <div className="text-center mt-2">
                <span className="text-white">
                  ¿No tienes cuenta?{" "}
                  <Link className="linkText" src="/">
                    Registrate
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
