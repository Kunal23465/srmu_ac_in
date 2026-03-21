import React from "react";
import { Link } from "react-router-dom";
import SeoHead from "../components/seo/SeoHead";

const PageNotFound:React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <SeoHead
                title="404 Page Not Found | Shri Ramswaroop Memorial University, Lucknow"
                description="The requested page could not be found on the SRMU website."
                pathname="/404"
                noindex
            />
            <div className="text-center">

                {/* 404 Number */}
                <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest">
                    404
                </h1>

                {/* Animated Line */}
                <div className="bg-blue-500 px-4 py-2 text-white text-sm rounded rotate-3 absolute mt-4 left-1/2 -translate-x-1/2">
                    Page Not Found
                </div>

                {/* Message */}
                <p className="mt-16 text-gray-600 text-lg">
                    Sorry, the page you are looking for does not exist.
                </p>

                {/* Back Home Button */}
                <Link
                    to="/"
                    className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
