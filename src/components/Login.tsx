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
        <div className="relative space-y-4">
            {session ? (
                <div>
                    
                </div>
                // <button
                //   className="bg-[#0047FF] text-white px-4 py-2 rounded-full hover:opacity-80" 
                //   onClick = {handleNavigateToProfile}
                // >
                // Profile
                // </button>
            ) : (
                <button 
                  className="bg-[#0047FF] text-white px-4 py-2 rounded-3xl shadow-md hover:opacity-80" 
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
