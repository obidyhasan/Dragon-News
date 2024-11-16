import { useLoaderData, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import RightLayout from "./Home/RightLayout";
import { IoIosArrowRoundBack } from "react-icons/io";
const NewsDetailsLayout = () => {
  const data = useLoaderData();
  const { details, image_url, title } = data.data[0];

  const navigate = useNavigate();
  function handelBackButton() {
    navigate(-1);
  }

  return (
    <div className="max-w-7xl mx-auto px-5">
      <Header></Header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-7">
        <section className="col-span-3">
          <h2 className="font-semibold mb-4">Dragon News</h2>

          <section className="border rounded p-4 space-y-5">
            <figure>
              <img
                src={image_url}
                className="w-full object-cover rounded"
                alt=""
              />
            </figure>

            <h1 className="font-bold text-xl">{title}</h1>

            <p>{details}</p>

            <button
              onClick={handelBackButton}
              className="btn rounded-none btn-sm text-white bg-[#D72050] hover:bg-black"
            >
              <IoIosArrowRoundBack className="w-6 h-6" /> All news in this
              category
            </button>
          </section>
        </section>
        <aside>
          <RightLayout></RightLayout>
        </aside>
      </div>
    </div>
  );
};

export default NewsDetailsLayout;
