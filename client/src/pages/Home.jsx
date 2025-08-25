import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BlogSection from "../components/BlogSection";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <BlogSection />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
