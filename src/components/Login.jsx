import { Link } from "react-router-dom";

const Login = () => {
  function handelLogin(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    console.log({ email, password });
  }

  return (
    <div className="full-height flex items-center justify-center max-w-7xl mx-auto">
      <div className="card bg-base-100 w-full max-w-md shrink-0 ">
        <h1 className="font-semibold text-center my-7 text-xl">
          Login your account
        </h1>

        <hr className="mx-8" />

        <form onSubmit={handelLogin} className="card-body">
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
        </form>

        <p className="text-sm text-center mb-5">
          {"Don't have an account?"}{" "}
          <Link to="/auth/register" className="text-orange-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
