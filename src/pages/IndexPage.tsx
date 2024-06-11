import React from "react";
import ContactBlock from "src/modules/ContactBlock";
import FeatureBlock from "src/modules/Features/FeatureBlock";
import Footer from "src/modules/Footer";
import GalleryBlock from "src/modules/Gallery/GalleryBlock";
import Header from "src/modules/Header";
import StartBlock from "src/modules/Start/StartBlock";
import VideoBlock from "src/modules/VideoBlock";

const IndexPage = () => {
  return (
    <div>
      <Header />

      <main>
        <StartBlock />

        <FeatureBlock />

        <GalleryBlock />

        <VideoBlock />

        <ContactBlock />
      </main>

      <Footer />
    </div>
  );
};

export default IndexPage;
