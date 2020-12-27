import React from "react";
import { useHistory } from "react-router-dom";
import { LoginBg } from "../../assets";
import { Button, Input, Gap, Link } from "../../components";

const Login = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} alt="Register image" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input lable="Email" placeholder="Email" />
        <Gap height={18} />
        <Input lable="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Login" onClick={() => history.push("/")} />
        <Gap height={100} />
        <Link
          title="Belum punya akun? Silahkan Daftar"
          onClick={() => history.push("/register")}
        />
      </div>
    </div>
  );
};

export default Login;
