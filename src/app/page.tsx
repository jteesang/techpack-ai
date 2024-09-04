'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const Home: React.FC = () => {
  const router = useRouter();

  const handleCreateTechpack = () => {
    router.push('/generate');
  };

  const handleGetStarted = () => {
    router.push('#pricing');
  };

  const handleSignUp = () => {
    router.push('/signup');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 relative">
      <div className="absolute top-4 right-4 space-x-4">
        <button
          onClick={handleSignUp}
          className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-gray-800"
        >
          Sign In
        </button>
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-green-800 text-white rounded hover:bg-gray-900"
        >
          Login
        </button>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold mb-6">Welcome to Techpack Generator</h1>
        <p className="text-lg mb-6">Create your techpacks efficiently with our tool.</p>
        <button
          onClick={handleCreateTechpack}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Create a New Techpack
        </button>
        <button
          onClick={handleGetStarted}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Get Started
        </button>
      </div>

      <section id="pricing" className="mt-20 p-6 bg-white shadow-md rounded-lg mx-4">
        <h2 className="text-2xl font-semibold">Pricing Options</h2>
        <p className="mt-4">Choose a plan that fits your needs:</p>
        <ul className="list-disc list-inside mt-4">
          <li>Basic Plan - $10/month</li>
          <li>Pro Plan - $30/month</li>
          <li>Enterprise Plan - $100/month</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
