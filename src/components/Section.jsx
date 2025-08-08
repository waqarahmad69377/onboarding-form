import React, { useState, useRef, useEffect } from 'react';

const Section = ({ id, title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  const toggleSection = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen, children]);

  return (
    <div className="mb-6 border border-[#C3FC68]/30 rounded-xl p-4 bg-white/5">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleSection}
      >
        <h3 className="text-lg font-semibold text-[#969696]">{title}</h3>
        <span className={`text-xl ${isOpen ? "text-[#C3FC68]":""} `}>{isOpen ? '▲' : '▼'}</span>
      </div>

      <div
        ref={contentRef}
        className="transition-all duration-500 ease-in-out overflow-hidden"
        style={{ maxHeight: height }}
      >
        <div className="mt-4 space-y-3 px-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Section;
