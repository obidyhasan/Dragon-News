import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#000"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
