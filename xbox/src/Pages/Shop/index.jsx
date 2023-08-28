import { React, useEffect } from "react";
import Shopintro from "../../Components/ShopIntro";
import ShopList from "../../Components/ShopList";


export default function Shop() {
    useEffect(() => {
        document.title = "XperienceXPad - Shop";
    }, []);
    return(
        <div>
            <Shopintro/>
            <ShopList/>
        </div>
    );
}