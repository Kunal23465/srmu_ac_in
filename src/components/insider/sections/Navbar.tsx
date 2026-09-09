import { useEffect, useState } from "react";
import logo from "../../../assets/images/insider/srmu-insider-logo.png";
export function Navbar() {
    const [isVisible, setIsVisible] = useState(true);

    const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSerM8WGKBQovbrjtOu8q7pRSfvyzfGe3D283iAlhRsgKNVPrw/viewform?usp=dialog";

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                // Scrolling Down -> Hide Navbar
                setIsVisible(false);
            } else {
                // Scrolling Up -> Show Navbar
                setIsVisible(true);
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-6 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 w-full max-w-[96vw] mx-auto pointer-events-none transition-all duration-300 ease-in-out ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-28 opacity-0"
                }`}
        >
            {/* Pill 1: Logo Image Only */}
            <a
                href="#"
                className="group pointer-events-auto flex items-center justify-center rounded-full border-4 border-black bg-white px-5 py-2 shadow-[6px_6px_0px_0px_#000] hover:bg-[#fa5b84] transition-all hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000]"
            >
                <img
                    src={logo}
                    alt="SRMU Insiders Logo"
                    className="h-8 md:h-10 w-auto object-contain shrink-0"
                />
            </a>

            {/* Pill 2: Join Now Button */}
            <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto rounded-full border-4 border-black bg-[#f9da1e] px-4 sm:px-8 py-2 sm:py-3 font-black uppercase text-base md:text-lg text-black shadow-[6px_6px_0px_0px_#000] hover:bg-[#fa5b84] hover:text-white hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000] active:translate-y-[4px] active:shadow-none transition-all inline-block"
            >
                Join Now
            </a>
        </nav>
    );
}
