import React from "react";
import "./register.scss";
import { useHistory } from "react-router-dom";

import { RegisterBg } from "../../assets";
import { Button, Input, Gap, Link } from "../../components";

const Register = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} alt="Register image" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input lable="Full Name" placeholder="Full Name" />
        <Gap height={18} />
        <Input lable="Email" placeholder="Email" />
        <Gap height={18} />
        <Input lable="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Register" onClick={() => history.push("/")} />
        <Gap height={100} />
        <Link title="Kembali ke Login" onClick={() => history.push("/login")} />
      </div>
    </div>
  );
};

export default Register;
