import React, { useState, useEffect } from 'react';

interface TypewriterTextareaProps {
  text: string;
  speed?: number; // Speed of typing in milliseconds
  placeholder?: string;
}

const TypewriterTextarea: React.FC<TypewriterTextareaProps> = ({ text, speed = 60, placeholder = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    console.log(`placeholder: ${placeholder}`)
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);
    
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [text, speed]);

  return (
    <textarea
      value={displayedText}
      readOnly
      placeholder={placeholder}
      className="block w-full px-3 py-2 border border-2 border-gray-300 rounded-lg resize-none"
      rows={4}
    />
  );
};

export default TypewriterTextarea;
