import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { auth } from "../../firebase.js";

import AmazonLogo from "../../assets/Amazon.com-Logo.svg.png";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged

        navigate("/");
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login__container">
      <Link to="/">
        <img className="login__logo" src={AmazonLogo} alt="" />
      </Link>

      <form>
        <h2>Giriş Yap</h2>

        <div>
          <label htmlFor="e-mail">E-mail</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            name="e-mail"
            value={email}
            id="e-mail"
            type="email"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            value={password}
            type="password"
          />
        </div>

        <button onClick={login} className="login__btn">
          Giriş Yap
        </button>

        <p className="login__text">
          Oturum açarak, Amazon'un Kullanım ve Satış Koşulları'nı kabul etmiş
          olursunuz. Kişisel verilerinizin Amazon tarafından nasıl işlendiğine
          ilişkin detaylı bilgi için Gizlilik Bildirimi, Çerez Bildirimi ve İlgi
          Alanına Dayalı Tanıtımları inceleyebilirsiniz.
        </p>
      </form>

      <span className="account__info">
        <span>Amazon hesabınız yok mu ?</span>
      </span>

      <button onClick={register} className="create__account__btn">
        Amazon hesabı oluşturun
      </button>
    </div>
  );
};

export default Login;
