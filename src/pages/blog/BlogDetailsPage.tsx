import React from 'react';
import { useParams } from 'react-router-dom';
import { blogCards } from '../../data/blog/blog-data';
import Classes from "../../utils/styles/Global.module.css"
import CustomTopFooter from '../../utils/custom/CustomTopFooter';
import { CustomTopFooterAbout } from '../../data/about/aboutusData';

const BlogDetailsPage: React.FC = () => {
  const { blogRouteKey } = useParams<{ blogRouteKey: string }>();
  const blog = blogCards.find((b) => b.routeKey === blogRouteKey);

  if (!blog) {
    return (
      <div className="py-20 text-center bg-gray-50">
        <h1 className="text-3xl font-semibold text-red-600 mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600">The blog post you are looking for does not exist.</p>
      </div>
    );
  }

  return (


    <>

      <div className={`${Classes["container"]}`}>
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            {/* Date */}

            {/* Title */}
            <h1 className="font32 fw500 text-[#023047]">{blog.title}</h1>

            <div className="inline-block mb-10 bg-[#ffb703] px-2 rounded-xl text-[#0f4a85] ">
              {blog.date}
            </div>


            {/* Image */}
            <div className="mb-8">
              <img
                src={blog.imagePath}
                alt={blog.title}
                className="w-full h-full object-cover  shadow-lg"
              />
            </div>



            <div className="mt-8 text-[17px] prose prose-lg text-justify ">
              <div dangerouslySetInnerHTML={{ __html: blog.longContent }} />
            </div>
          </div>
        </div>
      </div>
      <CustomTopFooter data={CustomTopFooterAbout} />

    </>

  );
};

export default BlogDetailsPage;
