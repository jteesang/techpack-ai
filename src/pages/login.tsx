import React from 'react';
import { createClient } from '@supabase/supabase-js';
import Home from '@/components/ui/Home';
import { useUser } from '@/context/UserContext';
import GoogleLogin from '@/components/Login';
import AuthDialog from '@/components/AuthDialog';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!; 
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Login: React.FC = () => {  
  return (
    <div>
      <header className="flex justify-between items-center py-3 px-6 border-b border-gray-200">
        <Home />
      </header>
      <AuthDialog />
    </div>
  );
};

export default Login;
