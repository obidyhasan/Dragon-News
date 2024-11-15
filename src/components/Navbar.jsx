import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navbarLink = (
    <div className="flex items-center gap-5 text-gray-500 text-sm">
      <NavLink>Home</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Career</NavLink>
    </div>
  );

  return (
    <div>
      <div className="navbar p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navbarLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl hidden">daisyUI</a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{navbarLink}</ul>
        </div>
        <div className="navbar-end gap-2">
          <FaUserCircle className="w-7 h-7 text-gray-700" />
          <Link
            to={"/auth/login"}
            className="btn btn-sm rounded-none text-white bg-gray-700 font-medium px-4 hover:text-black"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
