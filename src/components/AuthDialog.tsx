'use client'

import Image from 'next/image'
import TechpackAIlogo from '@/app/assets/TechpackAIlogo.svg'
import Google from '@/app/assets/Google.svg';
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { ChevronRight } from 'lucide-react'
import { supabase } from '@/app/utils/createClient'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Footer from './ui/Footer'

const AuthDialog: React.FC = () => {
  const router = useRouter();

  const redirectTo = process.env.NEXT_PUBLIC_REDIRECT_URL || `${window.location.origin}/auth/callback`;
  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectTo
      }
    });

    if (error) {
      console.error('Error during Google sign-in:', error.message);
    }

  };

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        router.push(`/profile/${data.session.user.id}`); // Redirect to profile
      }
    });
  }, [router]);

  return (
    <div>
      <div className="min-h-screen bg-[#F8FAFC] font-sans flex items-center justify-center">
        <Card className="w-full max-w-md bg-gradient-to-b from-[#EBF3FF] via-[#E7F0FF] to-[#E1ECFF] p-8 rounded-3xl shadow-none border border-[#D1E2FF]">
          <div className="flex justify-center mb-6 space-y-2">
            <Image src={TechpackAIlogo} alt="techpack.ai" width={40} height={40} className="text-[#3366FF]" />
            <span className="ml-2 text-2xl font-bold text-[#3366FF]">techpack.ai</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">Log in to your account</h1>
          <div className="flex flex-col items-center space-y-2">
            <Button
              onClick={handleGoogleSignIn}
              className="w-3/4 bg-[#3366FF] hover:opacity-80 text-white rounded-full py-2 text-base font-semibold flex items-center justify-center"
            >
              <Image src={Google} alt="Google" width={20} height={20} className="mr-2" />
              Continue with Google
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              className="w-3/4 bg-[#3366FF] hover:opacity-80 text-white rounded-full py-2 text-base font-semibold flex items-center justify-center">
              Cancel
            </Button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account? <a href="/" className="font-medium text-[#3366FF] hover:underline">See more</a>
          </p>
        </Card> 
      </div>
      <Footer />
    </div>

    
  )
}

export default AuthDialog;
