import Navbar from "@/components/sections/Navbar";
import Header from "@/components/sections/Header";
import About from "@/components/sections/About";
import MyProjects from "@/components/sections/MyProjects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-8 py-5 flex flex-col gap-20 z-10 overflow-x-hidden">
        <Navbar />
        <Header />
        <main className="flex flex-col gap-40">
          <About />
          <MyProjects />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
