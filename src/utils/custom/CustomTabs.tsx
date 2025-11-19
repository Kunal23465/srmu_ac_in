import React, { useState, useRef, useEffect } from "react";

interface CustomTabsProps {
  items: {
    key: string;
    label: string;
    content: React.ReactNode;
  }[];

  defaultActiveKey?: string;
  activeKey?: string;
  onChange?: (key: string) => void;

  fullWidthUnderlineColor?: string;
  activeUnderlineColor?: string;

  activeTextColor?: string;
  inactiveTextColor?: string;
  hoverTextColor?: string;
}

const CustomTabs = ({
  items,
  defaultActiveKey,
  activeKey: controlledKey,
  onChange,

  fullWidthUnderlineColor = "#E5E7EB",
  activeUnderlineColor = "#000",

  activeTextColor = "#000",
  inactiveTextColor = "#777",
  hoverTextColor = "#000",
}: CustomTabsProps) => {
  const isControlled = controlledKey !== undefined;
  const [internalKey, setInternalKey] = useState(defaultActiveKey || items[0]?.key);

  const currentKey = isControlled ? controlledKey : internalKey;

  const handleClick = (key: string) => {
    if (!isControlled) setInternalKey(key);
    onChange?.(key);
  };

  // --- Refs for underline animation ---
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const underlineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const index = items.findIndex((t) => t.key === currentKey);
    const activeTab = tabRefs.current[index];

    if (activeTab && underlineRef.current) {
      const rect = activeTab.getBoundingClientRect();

      underlineRef.current.style.width = rect.width + "px";
      underlineRef.current.style.transform = `translateX(${activeTab.offsetLeft}px)`;
    }
  }, [currentKey, items]);

  return (
    <div className="custom-tabs-container">
      {/* Tab Headers */}
      <div className="tabs-header">
        {items.map((tab, index) => (
          <div
            key={tab.key}
            ref={(el) => (tabRefs.current[index] = el)}
            className={`tab-item ${tab.key === currentKey ? "active" : ""}`}
            onClick={() => handleClick(tab.key)}
          >
            {tab.label}
          </div>
        ))}

        {/* Active underline */}
        <div
          ref={underlineRef}
          className="active-underline"
          style={{ backgroundColor: activeUnderlineColor }}
        />
      </div>

      {/* Content */}
      <div className="tabs-content">
        {items.find((t) => t.key === currentKey)?.content}
      </div>

      {/* Styles */}
      <style>
        {`
        .custom-tabs-container {
          width: 100%;
        }

        .tabs-header {
          position: relative;
          display: flex;
          gap: 32px;
          padding-bottom: 10px;
          border-bottom: 1px solid ${fullWidthUnderlineColor};
        }

        .tab-item {
          cursor: pointer;
          font-weight: 600;
          font-size: 15px;
          padding-bottom: 6px;
          color: ${inactiveTextColor};
          transition: color 0.2s ease;
          position: relative;
        }

        .tab-item:hover {
          color: ${hoverTextColor};
        }

        .tab-item.active {
          color: ${activeTextColor};
        }

        /* ACTIVE underline that moves + resizes smoothly */
        .active-underline {
          position: absolute;
          bottom: -1px;
          height: 2px;
          width: 0px; 
          transition: 
            transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
            width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 2;
        }

        .tabs-content {
          padding-top: 20px;
        }
      `}
      </style>
    </div>
  );
};

export default CustomTabs;
