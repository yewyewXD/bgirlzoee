import React from "react";
import GallerySection from "../components/HomeComponents/GallerySection";
import HeroSection from "../components/HomeComponents/HeroSection";
import PostsSection from "../components/HomeComponents/PostsSection";
import PageLayout from "../components/PageLayout";

const HomePage = () => {
  return (
    <PageLayout>
      <main className="HomePage">
        <HeroSection />
        <PostsSection />
        <GallerySection />
      </main>
    </PageLayout>
  );
};

export default HomePage;
