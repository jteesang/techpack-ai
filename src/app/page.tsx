'use client'
import TechpackLanding from '@/components/LandingPage';
import { UserProvider } from '@/context/UserContext';
import React from 'react';


const Home: React.FC = () => {
  return (
    <div>
      <UserProvider>
        <TechpackLanding />
      </UserProvider>
    </div>
  );
};

export default Home;
