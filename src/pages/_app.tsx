import '@/app/globals.css';
import { supabase } from '@/app/utils/createClient';
import Account from '@/components/Account';
import Auth from '@/components/Auth';
import { UserProvider } from '@/context/UserContext';
import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: any) {
  // const [session, setSession] = useState<Session | null>(null);


  return (
    <UserProvider>
      <Component {...pageProps} />;

    </UserProvider>
    // <div>

    //   {/* {!session ? <GoogleLogin /> : <Account key={session.user.id} session={session} />} */}
    // </div>
  )
}

export default MyApp;
