// components/NextButton.tsx

import { useRouter } from 'next/router';
import { useState } from 'react';

interface NextButtonProps {
  nextId: string; // ID to navigate to when button is clicked
  disabled: boolean;
}

const NextButton: React.FC<NextButtonProps> = ({ nextId, disabled }) => {
  const router = useRouter();
  const [error, setError] = useState<boolean>(true);

  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(`nextId: ${nextId}`)
    if (nextId) {
        router.push(`/techpack/${nextId}`);
        setError(false);
    }
  };

  return (
    <button onClick={handleNextClick}
    disabled={disabled}
    className="absolute bottom-0 right-0 py-2 px-4 font-semibold rounded-lg transition-colors duration-300 bg-blue-500 text-white hover:bg-blue-600"
    >Next</button>
  );
};

export default NextButton;
