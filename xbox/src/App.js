import React from "react";
import FirstHeroSection from "./Components/FirstHeroSection";
import ImportantInfo from "./Components/ImportantInfo";
import HighlightedProducts from "./Components/HighlightedProducts";
import HomeProducts from "./Components/HomeProducts";

function App() {
  return (
    <div>
      <FirstHeroSection/>
      <ImportantInfo/>
      <HighlightedProducts/>
      <HomeProducts/>
    </div>
  );
}

export default App;