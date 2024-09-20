import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import AuthDialog from './AuthDialog';
import UserProfile from './UserProfile';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
    const { session, user } = useUser();
    const router = useRouter();
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleNavigateToProfile: () => void = () => {
        router.push(`/profile/${user?.id}`)
    }
    
    const handleGoogleLogin: () => void = () => {
        router.push(`/login`)
    }

    return (
        <div className="relative">
            {session ? (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded" 
                  onClick = {handleNavigateToProfile}
                >
                Profile
                </button>
            ) : (
                <button 
                  className="bg-green-500 text-white px-4 py-2 rounded" 
                  onClick={handleGoogleLogin}
                >
                Login
                </button>
            )}

            {/* {isDialogOpen && <AuthDialog onClose={() => setDialogOpen(false)} />} */}
        </div>
    );
};

export default Login;
