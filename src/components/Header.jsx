import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <figure className="mt-7">
        <img src={logo} className="w-[300px] mx-auto" alt="" />
      </figure>
    </div>
  );
};

export default Header;
