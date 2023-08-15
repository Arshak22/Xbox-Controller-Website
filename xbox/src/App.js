import React from "react";
import FirstHeroSection from "./Components/FirstHeroSection";
import ImportantInfo from "./Components/ImportantInfo";
import HighlightedProducts from "./Components/HighlightedProducts";
import HomeProducts from "./Components/HomeProducts";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div>
      <FirstHeroSection/>
      <ImportantInfo/>
      <HighlightedProducts/>
      <HomeProducts/>
      <Testimonials/>
    </div>
  );
}

export default App;