import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="bg-base-200 p-3 flex items-center mt-5 mb-1">
      <button className="bg-[#D72050] py-2 px-4 text-white mr-3">Latest</button>
      <Marquee pauseOnHover={true} className="space-x-5">
        <p className="font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          eius omnis
        </p>
        <p className="font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          eius omnis
        </p>

        <p className="font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          eius omnis
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
