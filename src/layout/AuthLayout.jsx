import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";

const AuthLayout = () => {
  const { loading } = useContext(AuthContext);

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="bg-[#F3F3F3] font-poppins">
          <section className="max-w-7xl mx-auto px-5">
            <Navbar></Navbar>
          </section>
          <Outlet></Outlet>
        </div>
      )}
    </div>
  );
};

export default AuthLayout;
