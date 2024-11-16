import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createAccount, updateUserProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  function handelRegister(e) {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    createAccount(email, password)
      .then(() => {
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate(location.state ? location.state : "/");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div className="full-height flex items-center justify-center max-w-7xl mx-auto p-5 ">
      <div className="card bg-base-100 w-full max-w-md shrink-0 ">
        <h1 className="font-semibold text-center my-7 text-xl">
          Register your account
        </h1>

        <hr className="mx-8" />

        <form onSubmit={handelRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered bg-base-200 border-none rounded"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered bg-base-200 border-none rounded"
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
              className="input input-bordered bg-base-200 border-none rounded"
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
              className="input input-bordered bg-base-200 border-none rounded"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded">Register</button>
          </div>
        </form>

        <p className="text-sm text-center mb-5">
          {"Already have an account?"}{" "}
          <Link to="/auth/login" className="text-orange-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
