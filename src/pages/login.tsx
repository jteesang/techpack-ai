import React from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!; 
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Login: React.FC = () => {
  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin, // URL to redirect to after sign-in
      },
    });

    if (error) {
      console.error('Error during Google sign-in:', error.message);
    }

    // Handle the user sign-in process
    const session = supabase.auth.getSession();
    if (session) {
        const user = (await session).data.session?.user;

        // Insert the user into the 'users' table
        const { data, error } = await supabase
        .from('users')
        .upsert({
            id: user?.id,
            email: user?.email,
        });

        if (error) {
        console.error('Error inserting user into database:', error.message);
        } else {
        console.log('User successfully inserted:', data);
        }
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <button
          onClick={handleGoogleSignIn}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center"
        >
          <svg
            className="w-6 h-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z" />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
