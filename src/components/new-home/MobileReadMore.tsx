import { useState } from 'react';
import Classes from "../../utils/styles/Global.module.css";
type MobileReadMoreProps = {
  children: string;
  className?: string;
};

export default function MobileReadMore({ children, className = '' }: MobileReadMoreProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={className}>
      <p className={`md:hidden ${expanded ? '' : 'line-clamp-2'}`}>{children}</p>
      <p className="hidden md:block">{children}</p>
      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        className="mt-1 inline-flex text-xs font-bold text-[#FFC107] md:hidden"
        aria-expanded={expanded}
      >
        {expanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}
