import React from "react";
import HeroSection from "../components/HomeComponents/HeroSection";
import PageLayout from "../components/PageLayout";

const HomePage = () => {
  return (
    <PageLayout>
      <main className="HomePage">
        <HeroSection />
      </main>
    </PageLayout>
  );
};

export default HomePage;
