import React, { useState, useEffect } from 'react';
import Loading from '@/components/Loading'; // Adjust the import path as needed

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or other async operation
    setTimeout(() => setLoading(false), 3000); // Loading for 3 seconds
  }, []);

  return (
    <div>
      {loading ? <Loading /> : <div>Content Loaded</div>}
    </div>
  );
};

export default App;
