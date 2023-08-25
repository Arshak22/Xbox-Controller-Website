import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Preloader from "../../Components/Preloader";
import Footer from "../../Components/Footer";

export default function Layout() {
    const location = useLocation();
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        setShowPreloader(true);
        const timer = setTimeout(() => {
            setShowPreloader(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    useEffect(() => {
        if (showPreloader) {
            document.body.classList.add("prevent-scroll");
        } else {
            document.body.classList.remove("prevent-scroll");
        }
    }, [showPreloader]);

    return (
        <>
            {showPreloader && <Preloader />}
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}