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
import { Link } from "react-router-dom";
import SeoHead from "../../components/seo/SeoHead";
import { ALL_TARGET_BLOGS, TARGET_PROGRAM_LINKS } from "../../components/blog/RelatedArticlesAndPrograms";

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
    if (blogCards.length === 0) {
      dispatch(fetchBlogs());
    }
  }, [blogCards.length, dispatch]);


  return (
    <>
      {location.pathname === parentPath ? (
        <>
          <SeoHead
            title="SRMU Blogs | Latest News, Updates, Events & Expert Insights"
            description="Stay updated with the latest news, campus events, academic insights, and student stories from Shri Ramswaroop Memorial University, Lucknow. Explore inspiring blogs from SRMU's vibrant community."
            pathname={parentPath}
          />
          <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className={`${Classes["container"]}`}>
                <h1 className="text-xl sm:text-2xl md:text-[50px] font50 fw500 text-[#023047] text-center mb-15">Blogs</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {currentBlogs.map((card, idx) => (
                    <BlogCard key={card.id || card.slug || `blog-${idx}`} card={card} />
                  ))}
                </div>
                {blogCards.length > 9 && <PaginationBlog currentPage={page} totalPages={totalPages} baseRoute="/blogs" />}

                {/* Static SEO Directory of Blog Articles & Featured Programs */}
                <div className="mt-16 pt-12 border-t border-gray-200">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#023047] mb-6">Explore All Articles & Guides</h2>
                  
                  {/* Featured Programs */}
                  <div className="mb-10 p-6 bg-[#f4f8fc] rounded-xl border border-[#c6d4ea]">
                    <h3 className="text-sm font-semibold text-[#0a4a85] uppercase tracking-wide mb-3">Featured Academic Programs & Updates</h3>
                    <div className="flex flex-wrap gap-3">
                      {TARGET_PROGRAM_LINKS.map((prog) => (
                        <Link
                          key={prog.path}
                          to={prog.path}
                          className="px-4 py-2 bg-white text-[#0a4a85] border border-[#0a4a85]/30 rounded-lg text-sm font-medium hover:bg-[#ffb703] hover:text-[#023047] transition-all"
                        >
                          {prog.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Blog Articles Directory */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {ALL_TARGET_BLOGS.map((item) => (
                      <div key={item.slug} className="p-3 bg-white rounded-lg border border-gray-200 hover:border-[#ffb703] transition-colors">
                        <Link to={`/blog/${item.slug}`} className="text-sm font-medium text-[#023047] hover:text-[#0a4a85] line-clamp-2">
                          {item.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
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
