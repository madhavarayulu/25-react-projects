import React from 'react';
import './nested-menu.css';
import MenuList from './MenuList';

function NestedMenu({ menus = [] }) {
  return (
    <div className="nested-menu-container">
      <MenuList list={menus} />
    </div>
  );
}

export default NestedMenu;
