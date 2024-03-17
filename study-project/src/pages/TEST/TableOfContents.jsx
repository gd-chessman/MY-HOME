// TableOfContents.js
import React from 'react';

const TableOfContents = ({ contents, onItemClick }) => {
  return (
    <div>
      <h2>Table of Contents</h2>
      <ul>
        {contents.map((item, index) => (
          <li key={index}>
            <button onClick={() => onItemClick(index)}>{item.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
