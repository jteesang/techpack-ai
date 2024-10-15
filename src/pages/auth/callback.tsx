import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/app/utils/createClient';
import { ProfileProps } from '@/app/types';
import { UserProvider, useUser } from '@/context/UserContext';
import { User } from '@supabase/supabase-js';
import { UserDetails } from '@/app/types/index';

const AuthCallback = () => {
  const router = useRouter();
  const { user, loading } = useUser();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const handleAuth = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error('Error fetching session:', error.message);
        return;
      }

      if (session) {
        const user = session.user;
        console.log(`user -----------: ${JSON.stringify(user)}`)
        setUserId(user.id);

        // Insert or update user in the 'users' table
        const { data, error } = await supabase
          .from('users')
          .upsert({   
            id: user.id,
            email: user.email,
            avatar_url: user.user_metadata?.avatar_url,
            name: user.identities ? user.identities[0]?.identity_data?.name : ''
          });
        
        if (error) {
          console.error('Error inserting user into database:', error.message);
        } else {
          console.log('User successfully inserted:', data);
        }

        // // Deconstruct object
        // const { id,  email } = user
        // const name = user.identities ? user.identities[0]?.identity_data?.name || '' : '';
        // const avatar_url = user.user_metadata?.avatar_url || '';
        // const newUser: UserDetails = {id : id, name: name, email: email, avatar_url: avatar_url}

        // // Set user in the React Context
        // setUser(newUser);
        // Redirect to profile page or dashboard
        if (session && user) {
          router.push(`/profile/${user.id}`)
        }
      }
    };

    handleAuth();
  }, [loading, router, user]);

  return (
    <UserProvider>
      <div>Redirecting...</div>
    </UserProvider>
    
  )
};

export default AuthCallback;