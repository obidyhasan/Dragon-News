import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { _id, details, image_url, title, author, rating, total_view } = post;

  return (
    <div>
      <div className="border rounded-md border-base-200">
        <div className="bg-base-200 rounded-t-md flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-2">
            <img
              src={author.img}
              className="w-10 h-10 rounded-full object-cover"
              alt=""
            />
            <div className="space-y-1">
              <h2 className="text-sm font-semibold">{author.name}</h2>
              <p className="text-xs text-gray-600">{author.published_date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaRegBookmark className="w-4 h-54"></FaRegBookmark>
            <IoShareSocialOutline className="w-5 h-5"></IoShareSocialOutline>
          </div>
        </div>
        <div className="p-4 ">
          <h1 className="font-bold">{title}</h1>
          <figure>
            <img
              src={image_url}
              className="w-full object-cover rounded-md my-3"
              alt=""
            />
          </figure>
          <p className="font-light text-sm line-clamp-4 text-gray-600">
            {details}
          </p>
          <Link
            to={`/newsDetails/${_id}`}
            className="text-sm font-semibold text-orange-500 block mt-2 mb-4"
          >
            Read More
          </Link>
          <hr />
          <div className="mt-2 flex gap-3 justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1 text-orange-500">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
              </div>
              <p className="text-sm font-medium text-gray-500">
                {rating.number}
              </p>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <FaEye></FaEye>
              <p className="text-sm font-medium ">{total_view}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
