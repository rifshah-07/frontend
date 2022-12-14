
import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const loginSubmit = async (formdata) => {
    console.log(formdata);

    const res = await fetch("http://localhost:5000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });

    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();

      sessionStorage.setItem("user", JSON.stringify(data));

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "You have loggedin successfully",
      });

      navigate("/chat");
    } else if (res.status === 401) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Email or Password is Incorrect",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Unknown error occured",
      });
    }
  };

  return (
    <div className="vh-100" style={{ backgroundColor: "#ccc" }}>
      <div className="col-md-3 mx-auto pt-5">
        <div className="card">
          <div className="card-body">
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={loginSubmit}
            >
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <h4 className="text-center">Login</h4>
                  <hr />
                  <label>Email Address</label>
                  <input
                    className="form-control mb-4"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control mb-4"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />

                  <button className="btn btn-primary w-100 mt-4">Submit</button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
