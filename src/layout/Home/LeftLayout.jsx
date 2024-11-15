import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftLayout = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h1 className="font-semibold">All Category</h1>

      <div className="mt-4">
        {categories.map((category) => (
          <NavLink
            className="category-link "
            to={`/category/${category.category_id}`}
            key={category.category_id}
          >
            <div className="rounded transition-all duration-100 hover:bg-[#e7e7e7] my-2 px-3 text-gray-600 py-2">
              {category.category_name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftLayout;
