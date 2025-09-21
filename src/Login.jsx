import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body ">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email ID</legend>
              <input type="text" className="input" placeholder="Type here" />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Login </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
