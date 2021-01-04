import React from "react";
import HeroSection from "../components/HomeComponents/HeroSection";
import PostsSection from "../components/HomeComponents/PostsSection";
import PageLayout from "../components/PageLayout";

const HomePage = () => {
  return (
    <PageLayout>
      <main className="HomePage">
        <HeroSection />
        <PostsSection />
      </main>
    </PageLayout>
  );
};

export default HomePage;
