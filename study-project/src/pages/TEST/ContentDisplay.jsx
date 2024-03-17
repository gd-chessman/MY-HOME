// ContentDisplay.js
import React from 'react';

const ContentDisplay = ({ content }) => {
  return (
    <div>
      <h2>{content.title}</h2>
      <p>{content.body}</p>
    </div>
  );
};

export default ContentDisplay;
