import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="container mx-auto px-12 py-6 flex flex-col">
      <Navbar />
      <Header></Header>
    </div>
  );
};

export default Home;
