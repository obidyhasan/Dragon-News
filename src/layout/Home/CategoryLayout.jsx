import { useLoaderData } from "react-router-dom";
import Post from "../../components/Post";

const CategoryLayout = () => {
  const { data } = useLoaderData();
  return (
    <div className="space-y-5">
      {data.length ? (
        data.map((post, idx) => <Post key={idx} post={post}></Post>)
      ) : (
        <h1 className="font-bold">--- No data found ---</h1>
      )}
    </div>
  );
};

export default CategoryLayout;
