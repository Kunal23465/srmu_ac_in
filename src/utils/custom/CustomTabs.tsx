import { ConfigProvider, Tabs } from "antd";
import type { TabsProps } from "antd";
import { useState } from "react";
interface CustomTabsProps {
  items: TabsProps["items"];
  defaultActiveKey?: string;
}
const CustomTabs = ({ items, defaultActiveKey = "1" }: CustomTabsProps) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  return (
    <div className="py-2">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#0E2F46", // Tailwind's purple-600
          },
        }}
      >
        <Tabs
          activeKey={activeKey}
          onChange={(key) => setActiveKey(key)}
          defaultActiveKey={defaultActiveKey}
          items={items}
          renderTabBar={(props, DefaultTabBar) => (
            <DefaultTabBar
              {...props}
              className={`
              border-none!
              font-bold!
              [&_.ant-tabs-nav::before]:border-none!
              [&_.ant-tabs-tab]:text-xl!
              [&_.ant-tabs-tab]:text-gray-600!
              [&_.ant-tabs-tab]:px-3 
              [&_.ant-tabs-tab]:py-2 
              [&_.ant-tabs-tab[aria-selected='true']_.ant-tabs-tab-btn]:text-[#0E2F46] 
              [&_.ant-tabs-tab[aria-selected='true']_.ant-tabs-tab-btn]:font-bold!
              [&_.ant-tabs-ink-bar]:bg-[#0E2F46]!
              /* unselected tabs: add a visible red border on the tab element (li) so it's visible */
              [&_.ant-tabs-tab[aria-selected='false']]:border-b-4!
              [&_.ant-tabs-tab[aria-selected='false']]:border-[#ff0000]!
            `}
            />
          )}
        />
      </ConfigProvider>
    </div>
  );
};

export default CustomTabs;
