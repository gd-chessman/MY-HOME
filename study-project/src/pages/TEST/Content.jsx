// Content.js
import React, { useState } from 'react';
import TableOfContents from './TableOfContents';
import ContentDisplay from './ContentDisplay';

const Content = () => {
  const [selectedContentIndex, setSelectedContentIndex] = useState(0);
  const contents = [
    { title: 'Introduction', body: 'Tổng quan khóa học.' },
    { title: 'Chapter 1', body: 'This is the content of Chapter 1.' },
    { title: 'Chapter 1', body: 'This is the content of Chapter 1.' },
    { title: 'Chapter 1', body: 'This is the content of Chapter 1.' },
    { title: 'Chapter 1', body: 'This is the content of Chapter 1.' },
    { title: 'Chapter 1', body: 'This is the content of Chapter 1.' },
    { title: 'Chapter 1', body: 'This is the content of Chapter 1.' },
    { title: 'Chapter 2', body: 'This is the content of Chapter 2.' }
  ];

  const handleItemClick = index => {
    setSelectedContentIndex(index);
  };

  return (
    <div>
      <TableOfContents contents={contents} onItemClick={handleItemClick} />
      {selectedContentIndex !== null && (
        <ContentDisplay content={contents[selectedContentIndex]} />
      )}
    </div>
  );
};

export default Content;
