import { Button } from "@/components/ui/Button"
import { ChevronRight, User, LayoutDashboard, Settings, LogOut, Plus } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { supabase } from "@/app/utils/createClient";
import Home from "./ui/Home";
import { UserProvider, useUser } from "@/context/UserContext";
import { useRouter } from "next/router";

const Sidebar= () => {
  const { user } = useUser();
  const router = useRouter();
  // const [userId, setUserId] = useState('');
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname?.startsWith(path) ? 'text-[#3366FF] bg-[#EBF3FF]' : 'text-gray-600 hover:bg-[#EBF3FF] hover:text-[#3366FF]'
  }

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Error signing out:', error);
      return;
    }

    // Redirect to the home page or another page after signing out
    router.push('/');
  };

//   useEffect(() => {
//     const handleAuth = async () => {
//         const { data: { session }, error } = await supabase.auth.getSession();
//         if (error) {
//             console.error('Error fetching session:', error.message);
//             return;
//         }
//         if (session) {
//             const user = session.user;
//             setUserId(user.id)
//         }
//     }
//     handleAuth();
// }, []);
  
  return (
    <UserProvider>
      <aside className="w-64 bg-[#F8FAFC] border-r border-gray-200 p-6">
        <nav>
          <Link href={`/profile/${user?.id}`} passHref>
            <Button variant="ghost" className={`w-full justify-start mb-2 ${isActive(`/profile/${user?.id}`)}`}>
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
          </Link>
          <Link href={`/dashboard/${user?.id}`} passHref>
              <Button variant="ghost" className={`w-full justify-start mb-2 ${isActive(`/dashboard/${user?.id}`)}`}>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
          </Link>
  
        </nav>
        <Button
          onClick={handleSignOut}
          variant="ghost"
          className="w-52 justify-start mt-auto text-gray-600 hover:bg-[#EBF3FF] hover:text-[#3366FF] absolute bottom-6">
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </aside>
    </UserProvider>

  );
};

export default Sidebar;
