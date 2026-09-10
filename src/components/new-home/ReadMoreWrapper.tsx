import React, { useState } from 'react';

type ReadMoreWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export default function ReadMoreWrapper({ children, className = '', ...props }: ReadMoreWrapperProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      {/* Mobile: clamped to 2 lines with toggle */}
      <div
        {...props}
        className={`${className} md:hidden ${expanded ? '' : 'line-clamp-2 overflow-hidden'}`}
      >
        {children}
      </div>

      {/* Desktop: always full */}
      <div {...props} className={`${className} hidden md:block`}>
        {children}
      </div>

      {/* Read More / Read Less button — mobile only */}
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="mt-1 mb-2 inline-flex text-[13px] font-bold text-[#FFC107] md:hidden"
        aria-expanded={expanded}
      >
        {expanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}
