import React from 'react';
import './custom-tabs.css';

function Tabs({ tabsData, activeTab, onTabClick }) {
  return (
    <div className="tabs-container">
      <ul className="tabs-list">
        {tabsData.map((tab, index) => (
          <li
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => onTabClick(index)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="tab-content">{tabsData[activeTab].content}</div>
    </div>
  );
}

export default Tabs;
