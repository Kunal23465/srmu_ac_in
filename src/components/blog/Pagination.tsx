import React from 'react';
import { useNavigate } from 'react-router-dom';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseRoute: string; // e.g., "/blog"
}

const PaginationBlog: React.FC<PaginationProps> = ({ currentPage, totalPages, baseRoute }) => {
  const navigate = useNavigate();

  const goToPage = (page: number) => {
    navigate(`${baseRoute}?page=${page}`);
  };

  // Generate an array of page numbers from 1 to totalPages
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Tailwind CSS classes for consistent styling
  const baseButtonClass = 'w-15 h-15 flex items-center justify-center border border-gray-300 text-sm transition-colors duration-150';
  const activeClass = 'bg-gray-800 text-[15px] text-white border-gray-800'; // Dark background for active page
  const inactiveClass = 'bg-white text-[15px] text-gray-700 hover:bg-gray-100 hover:text-[#0d6efd]'; // Light background for inactive pages
  const navButtonClass = 'w-15 h-15 flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors duration-150';

  return (
    <div className="flex mt-10 mx-auto justify-center">
      {/* Previous Button */}
      <button
        onClick={() => goToPage(Math.max(currentPage - 1, 1))}
        className={`${navButtonClass} rounded-l-md border-r-0`} // Rounded left, no right border
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {/* Page Numbers */}
      {pages.map((page, index) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`${baseButtonClass} 
            ${page === currentPage ? activeClass : inactiveClass}
            ${index === 0 && currentPage !== 1 ? 'border-l-0' : ''}
            ${index === pages.length - 1 && currentPage !== totalPages ? 'border-r-0' : ''}
            ${page === currentPage && currentPage === 1 ? 'rounded-tl-md rounded-bl-md' : ''}
            ${page === currentPage && currentPage === totalPages ? 'rounded-tr-md rounded-br-md' : ''}
            ${(index === 0 && currentPage !== 1) ? 'border-l' : ''}
            ${page !== currentPage ? 'border-l-0' : ''} 
          `}
          style={{ 
            // Manual adjustment for the first button's left border only if it's not the active one
            borderLeftWidth: (index === 0 && currentPage !== 1) ? '1px' : '0',
            // To eliminate the double border between active and inactive states
            marginLeft: page === currentPage ? '0' : '-1px', 
          }}
        >
          {page}
        </button>
      ))}
      {/* Next Button */}
      <button
        onClick={() => goToPage(Math.min(currentPage + 1, totalPages))}
        className={`${navButtonClass} rounded-r-md`} // Rounded right
        disabled={currentPage === totalPages}
        style={{ marginLeft: currentPage === totalPages ? '0' : '-1px' }} // Adjusted margin to prevent double border
      >
        &gt;
      </button>
    </div>
  );
};

export default PaginationBlog;