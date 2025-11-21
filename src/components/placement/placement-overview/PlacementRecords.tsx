import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaLongArrowAltRight } from "react-icons/fa";

type Student = {
  id: number;
  name: string;
  degree: string;
  companyLogo: string;
  package: string;
  image: string;
};

const placementData: Record<string, Student[]> = {
  "2023": [
    {
      id: 1,
      name: "Shivam Agarwal",
      degree: "B.Tech. in Computer Science Engineering",
      companyLogo: "/logos/sap.png",
      package: "9.00 LPA",
      image: "/src/assets/images/placements/placement-overview/photo.jpg",
    },
    {
      id: 2,
      name: "Prashansha Srivastava",
      degree: "B.Tech. in Biotechnology",
      companyLogo: "/logos/learning.png",
      package: "5.70 LPA",
           image: "/src/assets/images/placements/placement-overview/photo.jpg",

    },
    {
      id: 3,
      name: "Gaurav Kumar Chaturvedi",
      degree: "B.Tech. in Mechanical Engineering",
      companyLogo: "/logos/hettich.png",
      package: "4.20 LPA",
        image: "/src/assets/images/placements/placement-overview/photo.jpg",

    },
    {
      id: 4,
      name: "Md Amaan Abidin",
      degree: "B.Tech. in Mechanical Engineering",
      companyLogo: "/logos/hettich.png",
      package: "4.20 LPA",
          image: "/src/assets/images/placements/placement-overview/photo.jpg",

    },
    {
      id: 5,
      name: "Sudhanshu Ranjan",
      degree: "B.Tech. in Electrical Engineering",
      companyLogo: "/logos/hettich.png",
      package: "4.20 LPA",
         image: "/src/assets/images/placements/placement-overview/photo.jpg",

    },
     {
      id: 6,
      name: "Ankur Singh",
      degree: "M.B.A. (Master of Business Administration)",
           image: "/src/assets/images/placements/placement-overview/photo.jpg",

      companyLogo: "/logos/beacon.png",
      package: "5.89 LPA",
    },
    {
      id: 7,
      name: "Vidushi Sharma",
      degree: "B.Sc.(Hons.) in Biotechnology",
         image: "/src/assets/images/placements/placement-overview/photo.jpg",

      companyLogo: "/logos/learning.png",
      package: "5.04 LPA",
    },
    {
      id: 8,
      name: "Anushka Kanojia",
      degree: "M.B.A. (Master of Business Administration)",
          image: "/src/assets/images/placements/placement-overview/photo.jpg",

      companyLogo: "/logos/learning.png",
      package: "5.64 LPA",
    },
    {
      id: 9,
      name: "Aditi Vikram",
      degree: "B.Tech. in Biotechnology",
          image: "/src/assets/images/placements/placement-overview/photo.jpg",

      companyLogo: "/logos/planetspark.png",
      package: "6.50 LPA",
    },
    {
      id: 10,
      name: "Gaurav Tiwari",
      degree: "B.Tech. in Electrical Engineering",
            image: "/src/assets/images/placements/placement-overview/photo.jpg",

      companyLogo: "/logos/company.png",
      package: "4.50 LPA",
    },
    {
  id: 11,
  name: "Arpita Tiwari",
  degree: "B.Sc.(Hons.) in Biotechnology",
  companyLogo: "/logos/mycaptain.png",
  package: "5.50 LPA",
        image: "/src/assets/images/placements/placement-overview/photo.jpg",

},
{
  id: 12,
  name: "Aryan Verma",
  degree: "B.Com.(Hons.) with L&T",
  companyLogo: "/logos/mycaptain.png",
  package: "5.50 LPA",
       image: "/src/assets/images/placements/placement-overview/photo.jpg",

},
{
  id: 13,
  name: "Prakrati Saraswat",
  degree: "B.Sc.(Hons.) in Agriculture",
  companyLogo: "/logos/mycaptain.png",
  package: "5.50 LPA",
      image: "/src/assets/images/placements/placement-overview/photo.jpg",

},
{
  id: 14,
  name: "Akarsh Verma",
  degree: "B.Sc.(Hons.) in Agriculture",
  companyLogo: "/logos/imperial.png",   // As per logo visible on card
  package: "3.47 LPA",
       image: "/src/assets/images/placements/placement-overview/photo.jpg",

},
{
  id: 15,
  name: "Sachin Kumar Singh",
  degree: "B.Tech. in Computer Science Engineering",
  companyLogo: "/logos/byjus.png",
  package: "8.00 LPA",
      image: "/src/assets/images/placements/placement-overview/photo.jpg",

},
{
  id: 16,
  name: "Lovkush Pandey",
  degree: "B.Tech. in Computer Science Engineering",
  companyLogo: "/logos/byjus.png",
  package: "8.00 LPA",
      image: "/src/assets/images/placements/placement-overview/photo.jpg",

},
{
  id: 17,
  name: "Aditya Mishra",
  degree: "B.Tech. in Computer Science Engineering",
  companyLogo: "/logos/byjus.png",
  package: "8.00 LPA",
      image: "/src/assets/images/placements/placement-overview/photo.jpg",

},
{
  id: 18,
  name: "Nekesh",
  degree: "B.Tech. in Computer Science Engineering",
  companyLogo: "/logos/byjus.png",
  package: "8.00 LPA",
      image: "/src/assets/images/placements/placement-overview/photo.jpg",

},
{
  id: 19,
  name: "Prem Prakash Verma",
  degree: "B.Tech. in Computer Science Engineering",
  companyLogo: "/logos/byjus.png",
  package: "8.00 LPA",
      image: "/src/assets/images/placements/placement-overview/photo.jpg",

},
{
  id: 20,
  name: "Abhishek Giri",
  degree: "B.Tech. in Computer Science Engineering",
  companyLogo: "/logos/byjus.png",
  package: "8.00 LPA",
      image: "/src/assets/images/placements/placement-overview/photo.jpg",

},
  ],
  "2024": [
    {
      id: 1,
      name: "Md Ataa Khan",
      degree: "B.Tech. in Computer Science Engineering",
       image: "/src/assets/images/placements/placement-overview/photo.jpg",

      companyLogo: "/logos/sap.png",
      package: "16.00 LPA",
    },
    {
      id: 2,
      name: "Tushar Trivedi",
      degree: "B.Tech. in Computer Science Engineering",
         image: "/src/assets/images/placements/placement-overview/photo.jpg",

      companyLogo: "/logos/sap.png",
      package: "16.00 LPA",
    },
    {
      id: 3,
      name: "Nikhil Kumar Tewari",
      degree: "B.C.A. (Bachelor of Computer Applications)",
      image: "/src/assets/images/placements/placement-overview/photo.jpg",

      companyLogo: "/logos/planetspark.png",
      package: "6.18 LPA",
    },
    {
      id: 4,
      name: "Sahul Pandey",
      degree: "B.B.A. (Bachelor of Business Administration)",
       image: "/src/assets/images/placements/placement-overview/photo.jpg",

      companyLogo: "/logos/company.png",
      package: "4.20 LPA",
    },
    {
      id: 5,
      name: "Harshita Shukla",
      degree: "B.Tech. in Biotechnology",
      image: "/src/assets/images/placements/placement-overview/photo.jpg",

      companyLogo: "/logos/company.png",
      package: "4.20 LPA",
    },
  ],
  "2025": [
    {
      id: 1,
      name: "Aryan Singh Rajpoot",
      degree: "B.C.A. (Bachelor of Computer Applications)",
       image: "/src/assets/images/placements/placement-overview/photo.jpg",

      companyLogo: "/logos/accenture.png",
      package: "3.40 LPA",
    },
    {
      id: 2,
      name: "Shiv Tiwari",
      degree: "B.C.A. (Bachelor of Computer Applications)",
       image: "/src/assets/images/placements/placement-overview/photo.jpg",

      companyLogo: "/logos/accenture.png",
      package: "3.40 LPA",
    },
    {
      id: 3,
      name: "Sachin Dubey",
      degree: "B.C.A. (Bachelor of Computer Applications)",
      image: "/src/assets/images/placements/placement-overview/photo.jpg",

      companyLogo: "/logos/accenture.png",
      package: "3.40 LPA",
    },
    {
      id: 4,
      name: "Abhishek Gupta",
      degree: "B.B.A. (Bachelor of Business Administration)",
      image: "/src/assets/images/placements/placement-overview/photo.jpg",

      companyLogo: "/logos/tcs.png",
      package: "2.60 LPA",
    },
    {
      id: 5,
      name: "Amit Singh",
      degree: "B.B.A. (Bachelor of Business Administration)",
      image: "/src/assets/images/placements/placement-overview/photo.jpg",

      companyLogo: "/logos/tcs.png",
      package: "2.60 LPA",
    },
  ],
};

const PlacementRecords: React.FC = () => {
  const [activeYear, setActiveYear] = useState("2023");
  const [index, setIndex] = useState(0);

  const students = placementData[activeYear] || [];
  const itemsPerSlide = 5;

  const nextSlide = () => {
    if (students.length === 0) return;

    setIndex((prev) =>
      prev + itemsPerSlide >= students.length ? 0 : prev + itemsPerSlide
    );
  };

  const prevSlide = () => {
    if (students.length === 0) return;

    setIndex((prev) =>
      prev - itemsPerSlide < 0 ? students.length - itemsPerSlide : prev - itemsPerSlide
    );
  };

  const visibleStudents = students.slice(index, index + itemsPerSlide);

  const finalStudents =
    visibleStudents.length < itemsPerSlide
      ? [...visibleStudents, ...students.slice(0, itemsPerSlide - visibleStudents.length)]
      : visibleStudents;

  return (
    <div className="relative placement-record-bg w-full text-white py-24">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold mb-2">Placement Records</h2>
       

        <div className="flex items-center  mb-2 bg-white  rounded">
          {["2023", "2024", "2025"].map((year) => (
            <button
              key={year}
              onClick={() => {
                setActiveYear(year);
                setIndex(0);
              }}
              className={`px-10 py-3 text-sm font-semibold text-black  transition ${
                activeYear === year
                  ? "bg-yellow-400 "
                  : " hover:bg-yellow-400"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
</div>


         <p className="text-gray-300 mb-5 text-sm max-w-xl">
          Outstanding placement records showcase our commitment to student success and industry relevance
        </p>

        <div className="flex  gap-5 mb-6 ">
          <button
            onClick={prevSlide}
            className="p-2 border border-white/40 rounded hover:bg-white/20"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="p-2 border border-white/40 rounded hover:bg-white/20"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 transition-all duration-500">
            {finalStudents.map((stu) => (
              <div
                key={stu.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 py-6 px-4 text-center"
              >
                <img
                  src={stu.image}
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                />

                <h4 className="text-lg font-semibold">{stu.name}</h4>
                <p className="text-xs text-gray-300 mt-1">{stu.degree}</p>

                <div className="mt-5 flex justify-center">
                  <img src={stu.companyLogo} className="h-6 object-contain" />
                </div>

                <p className="mt-2 text-sm text-gray-200">
                  Package: <span className="font-semibold">{stu.package}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center text-center mt-12">
          <button className="px-8 py-3 hover:bg-[#f8b922] bg-transparent flex items-center gap-2  hover:text-black border border-[#f8b922] text-[#f8b922] font-medium rounded-xl shadow">
          <span>  VIEW ALL PLACED STUDENTS </span>
          <span><FaLongArrowAltRight /></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlacementRecords;
