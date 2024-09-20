import React from 'react';
import { useUser } from '../context/UserContext';

const UserProfile: React.FC = () => {
    const { user } = useUser();

    return (
        <div className="flex items-center">
            {user && (
                <div className="flex items-center">
                    <img 
                        src={user.user_metadata.avatar_url} 
                        alt={user.user_metadata.full_name}
                        className="w-8 h-8 rounded-full"
                    />
                    <span className="ml-2 text-lg font-bold">{user.user_metadata.full_name}</span>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
