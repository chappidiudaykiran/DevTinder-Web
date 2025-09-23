import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [emailid, setEmailid] = useState("john@example.com");
  const [Password, setPassword] = useState("John@123");
  const handleLogin = async() => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        emailid,
        Password
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };
  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body ">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email ID</legend>
              <input
                type="text"
                value={emailid}
                onChange={(e) => setEmailid(e.target.value)}
                className="input"
                placeholder="Type here"
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="text"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="Type here"
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>Login </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
