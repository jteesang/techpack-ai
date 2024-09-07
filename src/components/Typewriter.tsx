import React, { useState, useEffect } from 'react';

interface TypewriterTextareaProps {
  text: string;
  speed?: number; // Speed of typing in milliseconds
  placeholder?: string;
}

const TypewriterTextarea: React.FC<TypewriterTextareaProps> = ({ text, speed = 80, placeholder = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isEditing, setIsEditing] = useState<boolean>(false); // Track if the textarea is being edited
  
  // Handle textarea focus
  const handleFocus = () => setIsEditing(true);

  // Handle textarea blur
  const handleBlur = () => setIsEditing(false);
  
  useEffect(() => {
    console.log(`placeholder: ${placeholder}`)
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      if (index >= text.length) {
        clearInterval(interval);
      } else {
        setDisplayedText((prev) => prev + text[index]);

      }
    }, speed);
    
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [text, speed]);

  return (
    <textarea
      value={displayedText}
      placeholder={placeholder}
      className="block w-full px-3 py-2 rounded-lg resize-none"
      onFocus={handleFocus}
      onBlur={handleBlur}
      rows={8}
    />
  );
};

export default TypewriterTextarea;
