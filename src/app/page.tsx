"use client";

import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="container mx-auto px-12 py-6 flex flex-col gap-20">
      <Navbar />
      <Header />
      <main>
        <About />
      </main>
    </div>
  );
};

export default Home;
