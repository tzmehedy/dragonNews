import { Form, Link } from "react-router-dom";
import Header from "./Shared/Header";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const handelLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    userLogin(email, password)
      .then((result) => {
        toast("Successfully Login");
      })
      .catch((error) => {
        toast(error.message);
      });
  };
    return (
      <>
        <Navbar></Navbar>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Please Login</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <Form onSubmit={handelLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </Form>
              <div className="p-3 mb-10">
                <p>
                  If you are not register, Please{" "}
                  <Link className="text-blue-700 underline" to={"/register"}>
                    Register
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Login;