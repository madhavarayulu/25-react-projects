import React, { useState } from 'react';
import Tabs from './Tabs';

function CustomTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsData = [
    { label: 'Home', content: 'Welcome to our website!' },
    { label: 'About', content: 'Learn more about us.' },
    { label: 'Contact', content: 'Get in touch with us.' },
  ];

  function handleTabClick(index) {
    setActiveTab(index);
  }

  return (
    <Tabs
      tabsData={tabsData}
      activeTab={activeTab}
      onTabClick={handleTabClick}
    />
  );
}

export default CustomTabs;
