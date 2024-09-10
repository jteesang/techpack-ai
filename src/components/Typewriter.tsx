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
    console.log(`displayedText: ${displayedText}`)
    console.log(`text: ${text}`)

    if (text === undefined || text === null || text === '') {
      setDisplayedText(' ')
      return;
    }
    console.log(`placeholder: ${placeholder}`)
    let index = 0;
    const interval = setInterval(() => {
      // Append the current character to displayedText
      setDisplayedText((prev) => prev + text[index]);
      
      index += 1;
      
      if (index >= text.length - 1) {
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
      className="block w-full px-3 py-2 rounded-lg resize-none"
      // onFocus={handleFocus}
      // onBlur={handleBlur}
      rows={8}
    />
  );
};

export default TypewriterTextarea;
