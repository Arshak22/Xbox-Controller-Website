import { React, useEffect } from "react";
import FirstHeroSection from "../../Components/FirstHeroSection";
import ImportantInfo from "../../Components/ImportantInfo";
import HighlightedProducts from "../../Components/HighlightedProducts";
import HomeProducts from "../../Components/HomeProducts";
import Guidelines from "../../Components/Guidlines";
import Testimonials from "../../Components/Testimonials";

export default function Home() {
    useEffect(() => {
        document.title = "XperienceXPad";
    }, []);
    return(
        <div>
            <FirstHeroSection/>
            <ImportantInfo/>
            <HighlightedProducts/>
            <HomeProducts/>
            <Guidelines/>
            <Testimonials/>
        </div>
    );
}