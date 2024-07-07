import React, { useState } from 'react';
import MenuList from './MenuList';
import { FaMinus, FaPlus } from 'react-icons/fa6';

function MenuItem({ item }) {
  const [currentChildren, setCurrentChildren] = useState({});

  function toggleChildren(getLabel) {
    setCurrentChildren({
      ...currentChildren,
      [getLabel]: !currentChildren[getLabel],
    });
  }

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => toggleChildren(item.label)}>
            {currentChildren[item.label] ? (
              <FaMinus style={{ color: '#e0e0e0' }} />
            ) : (
              <FaPlus style={{ color: '#e0e0e0' }} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      currentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
