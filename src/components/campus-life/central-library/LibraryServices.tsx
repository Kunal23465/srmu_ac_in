import React from 'react';
import { LibraryService, libraryServices } from '../../../data/campus-life/central-library/central-library-data';
import immm from "../../../assets/images/campus-life/central-library/core-values-08022405434112.jpg"

const LibraryServices: React.FC = () => {
    return (
        <div className="relative max-w-10xl mx-auto my-20 p-4 lg:p-0">

            <div
                className="absolute top-[-200px] right-0 w-full h-full lg:w-2/3 xl:w-[300px] 
                   bg-gray-200 rounded-lg lg:rounded-none lg:rounded-tr-lg shadow-xl overflow-hidden"
                style={{ zIndex: 1 }}
            >
                <img
                    src={immm}
                    alt="Students reading and studying outdoors"
                    className="w-full h-full rounded-br-lg z-999"
                />
            </div>

            <div
                className="relative lg:w-[80%] p-6 bg-white shadow-xl rounded-lg 
                   border border-yellow-400 py-15 px-10 mt-12 lg:mt-0 h-full
                   "
                style={{ zIndex: 0 }}
            >

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Library Services
                </h2>

                <div className="space-y-4">
                    {libraryServices.map((service: LibraryService) => (
                        <p key={service.title} className="text-sm leading-relaxed">
                            <span className="font-bold text-gray-800">
                                {service.title}:
                            </span>{' '}
                            <span className="text-gray-600">
                                {service.description}
                            </span>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LibraryServices;