import { Form, Link } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





const Register = () => {
  const { userSignUp } = useContext(AuthContext);
  const handelRegister = (e) =>{
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const email = form.get("email")
    const password = form.get("password")

    userSignUp(email,password)
    .then(result=>{
      toast("Registration Successfully")
    })
    .catch(error =>{
      toast(error.message)
    })
  }

    return (
      <>
        <Navbar></Navbar>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Please Register</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <Form onSubmit={handelRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="PhotoUrl"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </Form>
              <div className="p-5 mb-10">
                <p>
                  Already have an account, Please{" "}
                  <Link to={"/login"} className="text-blue-700 underline">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Register;