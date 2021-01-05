import React from "react";
import GallerySection from "../components/HomeComponents/GallerySection";
import HeroSection from "../components/HomeComponents/HeroSection";
import InterestsSection from "../components/HomeComponents/InterestsSection";
import PostsSection from "../components/HomeComponents/PostsSection";
import PageLayout from "../components/PageLayout";

const HomePage = () => {
  return (
    <PageLayout>
      <main className="HomePage">
        <HeroSection />
        <PostsSection />
        <GallerySection />
        <InterestsSection />
      </main>
    </PageLayout>
  );
};

export default HomePage;
