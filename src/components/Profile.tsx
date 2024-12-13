import React from 'react';

interface ProfileProps {
  name: string;
  email: string;
  subscriptionPlan: string;
}

const Profile: React.FC<ProfileProps> = ({ name, email, subscriptionPlan }) => {
  return (
    <div className="flex-1 p-6">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Name:</h2>
          <p className="text-lg">{name}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Email:</h2>
          <p className="text-lg">{email}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Subscription Plan:</h2>
          <p className="text-lg">{subscriptionPlan}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
