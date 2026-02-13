import React from "react";
import { Link } from "react-router-dom";
import { BlogCardType } from "../../data/blog/blog-data";

interface BlogCardProps {
  card: BlogCardType;
}
function replaceSpaceWithUnderscore(sentence: string) {
  return sentence.replace(/ /g, "_");
}
const BlogCard: React.FC<BlogCardProps> = ({ card }) => {
  return (
    <>
      <div className="bg-white rounded-2xl cursor-pointer border-2 border-[#ffb703] overflow-hidden flex flex-col hover:shadow-2xl min-h-[28rem]">
        <Link state={{ data: card }} to={`/blogs/${replaceSpaceWithUnderscore(card.title)}`}>
          <div className="p-6">
            <img src={card.imagePath} alt={card.title} className="w-full h-60 object-cover rounded-lg" />
          </div>
        </Link>
        <div className="p-6 flex flex-col flex-grow">
          <p className=" text-gray-500 mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-1 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {card.postedOn}
          </p>
          <h3 className="text-sm sm:text-[20px] fw600 text-black mb-3  cursor-pointer flex-grow">
            <Link state={{ data: card }} to={`/blogs/${replaceSpaceWithUnderscore(card.title)}`}>
              {card.title}
            </Link>
          </h3>

          <div className="mt-auto">
            <Link
              state={{ data: card }}
              to={`/blogs/${replaceSpaceWithUnderscore(card.title)}`}
              className="inline-flex items-center small-font fw600 px-4 py-3  text-[#023047] uppercase bg-[#ffb703] rounded-md hover:bg-white hover:border-[#ffb703] hover:border hover:text-[#ffb703]"
            >
              READ MORE
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
