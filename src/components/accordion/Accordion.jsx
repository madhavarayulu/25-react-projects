import { useState } from 'react';
import { data } from './data';
import './accordion.css';

export default function Accordion() {
  const [select, setSelect] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multipleSelection, setMultipleSelection] = useState([]);

  function handleSingleSelection(currentId) {
    setSelect(currentId === select ? null : currentId);
  }

  function handleMultiSelection(currentId) {
    let copyOfMultiSelection = [...multipleSelection];
    const findIndexOfCurrentId = copyOfMultiSelection.indexOf(currentId);
    if (findIndexOfCurrentId === -1) {
      copyOfMultiSelection.push(currentId);
    } else {
      copyOfMultiSelection.splice(findIndexOfCurrentId, 1);
    }
    setMultipleSelection(copyOfMultiSelection);
  }

  function renderAccordionItem(dataItem, index) {
    return (
      <div key={dataItem.id || index} className="item">
        <div
          onClick={
            enableMultiSelect
              ? () => handleMultiSelection(dataItem.id)
              : () => handleSingleSelection(dataItem.id)
          }
          className="title"
        >
          <h3>{dataItem.question}</h3>
          <span>+</span>
        </div>
        {select === dataItem.id ||
        multipleSelection.indexOf(dataItem.id) !== -1 ? (
          <div className="content">{dataItem.answer}</div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map(renderAccordionItem)
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
