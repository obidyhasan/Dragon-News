import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="">
      <figure className="mt-7">
        <img src={logo} className="w-[300px] mx-auto" alt="" />
      </figure>
      <p className="text-center text-gray-500 mt-3 mb-2">
        Journalism Without Fear or Favour
      </p>
      <p className="text-center font-medium sm">
        {moment().format("dddd, MMMM Do YYYY")}
      </p>
    </div>
  );
};

export default Header;
