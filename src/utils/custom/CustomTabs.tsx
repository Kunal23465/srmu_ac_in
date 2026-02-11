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

  variant?: "underline" | "boxed" | "pill" | "segment";

  fullWidthUnderlineColor?: string;
  activeUnderlineColor?: string;

  activeTextColor?: string;
  inactiveTextColor?: string;
  hoverTextColor?: string;

  activeBgColor?: string;
  inactiveBgColor?: string;

  activeBorderColor?: string;
  inactiveBorderColor?: string;

  /**  NEW PROP */
  pillContainerBgColor?: string;
  alignTabs?: "start" | "center" | "end" | "between" | "around" | "evenly";
}

const CustomTabs = ({
  items,
  defaultActiveKey,
  activeKey: controlledKey,
  onChange,

  variant = "underline",

  fullWidthUnderlineColor = "#E5E7EB",
  activeUnderlineColor = "#000",

  activeTextColor = "#000",
  inactiveTextColor = "#777",
  hoverTextColor = "#000",

  activeBgColor = "#ffffff",
  inactiveBgColor = "transparent",

  activeBorderColor = "#000",
  inactiveBorderColor = "#D1D5DB",

  /**  Default value */
  pillContainerBgColor = "#f1f5f9",

  alignTabs,
}: CustomTabsProps) => {
  const isControlled = controlledKey !== undefined;
  const [internalKey, setInternalKey] = useState(defaultActiveKey || items[0]?.key);
  const [isMobile, setIsMobile] = useState(false);
  const justifyMap: Record<string, string> = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
  };

  const currentKey = isControlled ? controlledKey : internalKey;

  const handleClick = (key: string) => {
    if (!isControlled) setInternalKey(key);
    onChange?.(key);
  };

  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const underlineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (variant !== "underline") return;

    const index = items.findIndex((t) => t.key === currentKey);
    const activeTab = tabRefs.current[index];

    if (activeTab && underlineRef.current) {
      underlineRef.current.style.width = activeTab.offsetWidth + "px";
      underlineRef.current.style.transform = `translateX(${activeTab.offsetLeft}px)`;
    }
  }, [currentKey, items, variant]);



  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // mobile breakpoint
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="custom-tabs-container">
      <div
        className={`tabs-header gap-x-2 xl:gap-x-4 overflow-x-auto overflow-y-hidden
          ${variant === "boxed" ? "boxed-header" : ""}
          ${variant === "pill" ? "pill-header" : ""}
          ${variant === "segment" ? "segment-header" : ""}
        `}
        style={{
          justifyContent: isMobile
            ? "flex-start"
            : alignTabs
              ? justifyMap[alignTabs]
              : "flex-start",
          borderBottom:
            variant === "underline"
              ? `1px solid ${fullWidthUnderlineColor}`
              : "none",

          /**  Apply dynamic pill bg */
          background: variant === "pill" ? pillContainerBgColor : "transparent",
        }}
      >
        {items.map((tab, index) => {
          const isActive = tab.key === currentKey;

          return (
            <div
              key={tab.key}
              ref={(el) => (tabRefs.current[index] = el)}
              className={`tab-item text-sm xl:text-base block ${variant === "underline"} relative ${isActive ? "after:content-['']  after:absolute  after:w-full after:h-1   after:bg-[var(--underlineColor)] after:left-0 after:-bottom-[11px]" : ""
                }`}
              onClick={() => handleClick(tab.key)}
              style={{
                // @ts-ignore
                "--underlineColor": activeUnderlineColor,
                color: isActive ? activeTextColor : inactiveTextColor,
                backgroundColor: variant === "underline" ? "transparent" : isActive ? activeBgColor : inactiveBgColor,
                borderColor: variant === "pill" ? "transparent" : variant === "underline" ? "transparent" : isActive ? activeBorderColor : inactiveBorderColor,
              }}
              onMouseEnter={(e) => {
                if (variant === "pill") return; //  disable hover for pill
                e.currentTarget.style.color = hoverTextColor;
              }}
              onMouseLeave={(e) => {
                if (variant === "pill") return; //  disable hover for pill
                e.currentTarget.style.color = isActive ? activeTextColor : inactiveTextColor;
              }}
            >
              <div className="text-nowrap w-full  ">{tab.label}</div>
            </div>
          );
        })}

        {/* {variant === "underline" && (
          <div
            ref={underlineRef}
            className="active-underline"
            style={{ backgroundColor: activeUnderlineColor }}
          />
        )} */}
      </div>

      <div className="tabs-content">{items.find((t) => t.key === currentKey)?.content}</div>

      <style>
        {`
        .custom-tabs-container {
          width: 100%;
        }

        .tabs-header {
          display: flex;
          padding-bottom: 10px;
          position: relative;

        }

        .tab-item {
          cursor: pointer;
          font-weight: 500;
          padding: 8px 0px;
          transition: 0.2s;
          border-radius: 6px;
          border: 1px solid transparent;
        }

        .active-underline {
          position: absolute;
          bottom: -1px;
          height: 3px;
          width: 0px;
          transition: transform 0.3s ease, width 0.3s ease;
        }

        .boxed-header .tab-item {
          border-width: 1px;
        }

        /*  Pill Variant */
        .pill-header {
          padding: 6px;
          border-radius: 999px;
          gap: 8px;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .pill-header .tab-item {
          border-radius: 999px;
          padding: 10px 20px;
        }

        .segment-header {
          border: 1px solid #d1d5db;
          padding: 4px;
          border-radius: 12px;
          gap: 0;
        }

        .segment-header .tab-item {
          flex: 1;
          text-align: center;
          border-radius: 10px;
        }

        .tabs-content {
          padding-top: 20px;
        }
     

      @media screen and (max-width: 768px) {
  .pill-header {
  padding:auto 20px !important;
    border-radius: 20px !important;
  }
      .pill-header .tab-item {
          border-radius: 20px;
          padding: 5px 10px;
        }
}



      `}
      </style>
    </div>
  );
};

export default CustomTabs;
