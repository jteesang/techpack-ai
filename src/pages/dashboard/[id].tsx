'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { ChevronRight, Plus } from 'lucide-react'
import Sidebar from '@/components/Sidebar'
import { SidebarProps, TechpackVersion } from '@/app/types'
import { supabase } from '@/app/utils/createClient'
import { useRouter } from 'next/router'
import { getCurrentUserId } from '@/app/utils/getUser'
import ProfileIcon from '@/components/ui/ProfileIcon'
import { UserProvider, useUser } from '@/context/UserContext'
import { getTechpacksForUser } from '@/app/services/db'
import ProfileAccount from '@/components/ui/ProfileAccount'
import Home from '@/components/ui/Home'
import NavBar from '@/components/NavBar'

const Dashboard = ()  => {
    const { user } = useUser();
    const router = useRouter();
    const [userId, setUserId] = useState('');
    const [techpacks, setTechPacks] = useState<TechpackVersion[]>();

    useEffect(() => {
      const fetchUserId = async () => {
        const response = await getCurrentUserId();
        if (response) {
          setUserId(response);
        }
      };

      fetchUserId();
      // TODO delete?
      const fetchTechpacks = async () => {
        try {
          if (userId) {
            const response = await fetch(`/api/techpacks/${userId}`, {
              method: 'GET'
            });
          
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setTechPacks(data);
            // console.log(`${JSON.stringify(data)}`)
          }
        } catch (error) {
          console.error('Failed to fetch techpacks data:', error);
        }
    };

    const fetchTechpacks2 = async () => {
        try {
          if (userId) {
            // TODO - why no use api route?
            const response = await getTechpacksForUser(userId);
            
          
            if (!response) {
              throw new Error('Network response was not ok');
            }
           
            setTechPacks(response);
            console.log(`${JSON.stringify(response)}`)
          }
        } catch (error) {
          console.error('Failed to fetch techpacks data:', error);
        }
    };
    fetchTechpacks2();
    // Comment out for now
    // fetchTechpacks();
  }, [userId]);


  const handleCreateTechpack = () => {
    router.push('/path');
  };

  const handleTechpackDetails = (techpackId: string) => {
    router.push(`/viewer/${techpackId}`)
  }


  return (
  <UserProvider>
    <div className="min-h-screen bg-white font-sans flex">
      {/* Sidebar */}
        <Sidebar />

      {/* Main content */}
      <div className="flex-1">
        <header className="flex justify-between items-center py-3 px-6 bg-gradient-to-b from-[#EBF3FF] via-[#E7F0FF] to-[#E1ECFF] p-8 shadow-none border border-[#D1E2FF]">
          <Home />
          <NavBar />
        </header>

        <main className="p-6">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Your Techpacks</h2>
            <Button onClick={handleCreateTechpack} className="bg-[#3366FF] hover:bg-[#2952CC] text-white rounded-full px-4 py-2">
              <Plus className="mr-2 h-4 w-4" />
              New Techpack
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techpacks?.map((techpack) => (
              <Card key={techpack.techpack_id} className="bg-gradient-to-b from-[#EBF3FF] via-[#E7F0FF] to-[#E1ECFF] shadow-none border border-[#D1E2FF]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Version: {techpack.version}</CardTitle>
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    techpack.status?.toLowerCase() === 'completed' ? 'bg-green-100 text-green-800' :
                    techpack.status?.toLowerCase() === 'in progress' ? 'bg-blue-100 text-blue-800' :
                    techpack.status?.toLowerCase() === 'in review' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {techpack.status}
                  </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-row justify-center">
                        {techpack.name}
                    </div>
                  <div className="h-[100px] w-full relative">
                    {/* <Image
                      src={techpack.image}
                      alt={techpack.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    /> */}
                  </div>
                  <Button onClick={() => handleTechpackDetails(techpack.techpack_id)} variant="ghost" className="w-full mt-4 text-[#3366FF] hover:bg-[#EBF3FF]">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  </UserProvider>

  )
}

export default Dashboard;