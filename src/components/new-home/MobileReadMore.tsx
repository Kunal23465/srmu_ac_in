import React, { useState, useEffect } from 'react';

type MobileReadMoreProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MobileReadMore({ children, className = '' }: MobileReadMoreProps) {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const clampStyle: React.CSSProperties =
    isMobile && !expanded
      ? {
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }
      : {};

  return (
    <div className={className}>
      <div style={clampStyle}>{children}</div>
      {isMobile && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          style={{
            color: '#FFC107',
            fontWeight: 700,
            fontSize: '12px',
            marginTop: '4px',
            display: 'inline-flex',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
          }}
          aria-expanded={expanded}
        >
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
}
