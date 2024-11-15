import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const RightLayout = () => {
  return (
    <div>
      <div>
        <h2 className="font-semibold mb-4">Login With</h2>
        <div className="*:w-full space-y-2">
          <button className="btn btn-outline rounded">
            <FaGoogle></FaGoogle> Login with Google
          </button>
          <button className="btn btn-outline rounded">
            <FaGithub></FaGithub> Login with Google
          </button>
        </div>
      </div>

      <div>
        <h2 className="font-semibold mt-7 mb-4">Find Us On</h2>
        <div className="*:w-full">
          <div className="join join-vertical *:bg-white rounded">
            <button className="btn join-item ">
              <FaFacebook></FaFacebook> Facebook
            </button>
            <button className="btn join-item">
              <FaTwitter></FaTwitter> Twitter
            </button>
            <button className="btn join-item">
              {" "}
              <FaInstagram></FaInstagram> Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightLayout;
