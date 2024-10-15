import { UserProvider, useUser } from '@/context/UserContext';
import React from 'react';
import ProfileAccount from './ui/ProfileAccount';
import ProfileIcon from './ui/ProfileIcon';
import Link from 'next/link';

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = () => {
  const { user } = useUser();
  
  return (
    <UserProvider>
      <div className="flex items-center space-x-2">
        <Link href={`/profile/${user?.id}`} passHref>
          <div className="flex items-center">
            <ProfileAccount className="mr-2" name={user?.user_metadata.full_name} />
            <ProfileIcon className="h-8 w-8" name={user?.user_metadata.full_name} url={user?.user_metadata.avatar_url} />
          </div>
        </Link>
      </div>
    </UserProvider>
  );
};

export default NavBar;
