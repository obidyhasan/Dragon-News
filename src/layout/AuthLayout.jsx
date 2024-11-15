import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-[#F3F3F3] font-poppins">
      <section className="max-w-7xl mx-auto mx-auto">
        <Navbar></Navbar>
      </section>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
