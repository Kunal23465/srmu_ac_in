// src/pages/blog/BlogsPage.tsx
import React, { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import BlogCard from "../../components/blog/BlogCard";
// import { blogCards } from "../../data/blog/blog-data";
import Classes from "../../utils/styles/Global.module.css";
import PaginationBlog from "../../components/blog/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchBlogs } from "../../store/blogs/blogsThunk";
import { Helmet } from "react-helmet-async";

const BlogsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: blogCards } = useSelector((state: RootState) => state.getAllBlogs);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get("page") || "1", 10);
  const perPage = 9;

  const totalPages = Math.ceil(blogCards.length / perPage);
  const start = (page - 1) * perPage;
  const currentBlogs = blogCards.slice(start, start + perPage);

  const parentPath = "/blogs";

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  console.log("blogs", blogCards);
  return (
    <>
      {location.pathname === parentPath ? (
        <>
          <Helmet>
            <title>Blog | Shri Ramswaroop Memorial University, Lucknow</title>
            <meta name="description" content="Stay updated with the latest news, campus events, academic insights, and student stories from Shri Ramswaroop Memorial University, Lucknow. Explore inspiring blogs from SRMU’s vibrant community." />
          </Helmet>
          <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className={`${Classes["container"]}`}>
                <h2 className="text-xl sm:text-2xl md:text-[50px] font50 fw500 text-[#023047] text-center mb-15">Blogs</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {currentBlogs.map((card) => (
                    <BlogCard key={card.id} card={card} />
                  ))}
                </div>
                {blogCards.length > 9 && <PaginationBlog currentPage={page} totalPages={totalPages} baseRoute="/blogs" />}
              </div>
            </div>
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default BlogsPage;
