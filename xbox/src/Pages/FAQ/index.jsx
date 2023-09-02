import { React, useEffect, useState } from "react";
import FAQIntro from "../../Components/FAQIntro";
import FAQSection from "../../Components/FAQSection";

export default function FAQ() {
    useEffect(() => {
        document.title = "XperienceXPad - FAQ";
    }, []);
    const [faqs] = useState([
        {
            question: "Can I use an Xbox Series X controller with an Xbox One console?",
            answer: "Yes, you can use an Xbox Series X controller with an Xbox One console. The controllers are backward compatible, meaning you can connect your Series X controller to your Xbox One just as you would with an Xbox One controller. However, some new features, like the Share button, may not work on the older Xbox One console.",
            open: false
        },
        {
            question: "How do I connect my Xbox controller to my PC?",
            answer: "To connect your Xbox controller to your PC, you can use a USB cable or connect via Bluetooth (if your controller supports it). For USB, simply plug the controller into your PC's USB port. For Bluetooth, make sure your PC has Bluetooth capability, turn on your controller, and pair it in your PC's Bluetooth settings. Follow on-screen instructions to complete the setup.",
            open: false
        },
        {
            question: "What's the difference between Xbox One and Xbox Series X controllers?",
            answer: "The main differences between Xbox One and Xbox Series X controllers are the addition of a Share button on Series X controllers for capturing screenshots and videos, improved D-pad design for better precision, and slight ergonomic changes for improved comfort. Series X controllers are also compatible with more devices, including PC and mobile.",
            open: false
        },
        {
            question: "Can I use an Xbox controller on my Android phone?",
            answer: "Yes, you can use an Xbox controller on your Android phone. Make sure your phone supports Bluetooth and then pair the controller with your phone in Bluetooth settings. It's an excellent way to enhance your mobile gaming experience.",
            open: false
        },
        {
            question: "What's the purpose of the Xbox controller's 'Sync' button?",
            answer: "The 'Sync' button on an Xbox controller is used to connect it to a console or device wirelessly. Pressing this button allows the controller to enter pairing mode, making it discoverable for Bluetooth connections or syncing with Xbox consoles.",
            open: false
        },
        {
            question: "Can I customize the button mapping on my Xbox controller?",
            answer: "Yes, you can customize button mapping on Xbox controllers through the Xbox Accessories app on Xbox consoles and the Xbox Accessories app for Windows 10. This feature allows you to remap buttons and create custom profiles to suit your gaming preferences.",
            open: false
        },
        {
            question: "How do I update the firmware on my Xbox controller?",
            answer: "To update your Xbox controller's firmware, connect it to an Xbox console and go to Settings > Devices & connections > Accessories. Select your controller, and if an update is available, you'll be prompted to install it. This ensures your controller has the latest features and improvements.",
            open: false
        },
        {
            question: "Do Xbox controllers work with Mac computers?",
            answer: "Yes, Xbox controllers can work with Mac computers. You can connect them via Bluetooth or use a USB cable. For Bluetooth, pair the controller in your Mac's Bluetooth settings. For USB, simply plug it in. Some games may require additional setup or third-party software to recognize the controller.",
            open: false
        },
        {
            question: "What should I do if my Xbox controller won't turn on?",
            answer: "If your Xbox controller won't turn on, try these steps: Replace the batteries or charge the controller (if it's rechargeable). Check for loose battery connections, and ensure the controller is within range of the console. If all else fails, perform a hard reset by holding down the Xbox button for 10 seconds, then power it on again.",
            open: false
        },
        {
            question: "Can I use an Xbox controller on a PlayStation console?",
            answer: "In general, Xbox controllers are not compatible with PlayStation consoles due to different hardware and software ecosystems. However, some third-party adapters or modding solutions may allow limited functionality, but these are not officially supported and can be complex to set up. It's recommended to use controllers designed for the respective consoles for the best experience.",
            open: false
        }
    ]);
    return(
        <div>
            <FAQIntro/>
            <FAQSection faqs={faqs}/>
        </div>
    );
}