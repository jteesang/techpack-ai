import Link from 'next/link';
import { useState } from 'react';

const LoginButton: React.FC = () => {
  // Simulate user authentication status
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLogin = () => {
    // Simulate authentication toggle
    setIsAuthenticated(true);
  };

  return (
    <button 
      onClick={handleLogin} 
      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      {isAuthenticated ? (
        <Link href="/profile">
          <a>Go to Profile</a>
        </Link>
      ) : (
        <Link href="/signin">
          <a>Sign In</a>
        </Link>
      )}
    </button>
  );
};

export default LoginButton;
