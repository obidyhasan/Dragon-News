import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftLayout from "./Home/LeftLayout";
import RightLayout from "./Home/RightLayout";

const HomeLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 font-poppins">
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="grid grid-cols-1 md:grid-cols-4 gap-5 my-8">
        <aside>
          <LeftLayout></LeftLayout>
        </aside>
        <section className="col-span-2">
          <h1 className="font-semibold mb-4">Dragon News Home</h1>
          <Outlet></Outlet>
        </section>
        <aside>
          <RightLayout></RightLayout>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
