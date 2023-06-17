import Navbar from "@/components/sections/Navbar";
import Header from "@/components/sections/Header";
import About from "@/components/sections/About";
import MyProjects from "@/components/sections/MyProjects";

const Home = () => {
  return (
    <div className="container mx-auto px-8 py-5 flex flex-col gap-20">
      <Navbar />
      <Header />
      <main className="flex flex-col gap-20">
        <About />
        <MyProjects />
      </main>
    </div>
  );
};

export default Home;
