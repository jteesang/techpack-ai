import { useState, useEffect, MouseEvent } from 'react'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { ChevronRight, User, LayoutDashboard, Settings, LogOut, Edit, Check } from 'lucide-react'
import { supabase } from '@/app/utils/createClient';
import Sidebar from '@/components/Sidebar';
import ProfileIcon from "@/components/ui/ProfileIcon";
import ProfileAccount from '@/components/ui/ProfileAccount'
import { UserProvider, useUser } from '@/context/UserContext'
import Home from '@/components/ui/Home'
import NavBar from '@/components/NavBar'

  const Profile = () => {
    const { user } = useUser();
    const [userId, setUserId] = useState('');
    const [isSaving, setIsSaving] = useState(false)
    const [isEditing, setIsEditing] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState(''); // for email
    const [formData, setFormData] = useState({
      id: user?.id,
      name: user?.user_metadata.full_name,
      email: user?.email,
      subscription_plan: 'basic',
      avatar_url: user?.user_metadata.avatar_url
    });
    const [plans] = useState(['basic', 'standard', 'premium']); // Subscription plan options

    useEffect( () => {
        // console.log(`IN PROFILE, USER: ${JSON.stringify(user)}`)

        if (user) {
            setFormData({
                id: user?.id,
                name: user?.user_metadata.full_name,
                email: user?.email,
                subscription_plan: 'basic',
                avatar_url: user?.user_metadata.avatar_url
            })
        }
    }, [user])
  
    // useEffect(() => {

    //     // TODO - FIX THE EXTRA /API/USERS CALL
    //     console.log(`USER ID: ${typeof userId}`)
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

    //     const fetchProfile = async () => {
    //         try {

    //           // Adjust the URL based on your API endpoint
    //           const response = await fetch(`/api/users/${String(userId)}`, {
    //             method: 'GET'
    //           });
              
    //           if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //           }
    //           const data = await response.json();
    //           console.log(`${JSON.stringify(data)}`)

    //           // Update the form data state with the fetched data
    //           setFormData(data);
    //         } catch (error) {
    //           console.error('Failed to fetch profile data:', error);
    //         }
    //     };

    //     if (userId === "") {
    //         console.log(`USER ID: ${userId}`)
    //         handleAuth();
    //     }
    //     // handleAuth();
    //     fetchProfile();
    //     if (!isEditing) {
    //         setIsSaving(false)
    //     }

    // }, [userId, isEditing]);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setEmail(value);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(value)) {
        setError('Invalid email address');
        
      } else {
        setError('');
      }

      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSelectChange = (value: string) => {
        setFormData(prev => ({ ...prev, subscription_plan: value }))
    };

    const handleSubmit = async (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      console.log(`SUBMIT BUTTON PRESSED -----`)

      setIsEditing(false); // Exit edit mode after successful update
      setIsSaving(true)

      console.log(`${JSON.stringify(formData)}`)
      try {
        const response = await fetch(`/api/users/${String(formData.id)}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json()

        console.log('Profile updated successfully');
      } catch (error) {
        console.error(`Error: ${error}`)
      }
    };

    if (!userId) {
        <div>User not authenticated!</div>
    }

return (
  <UserProvider>
    <div className="min-h-screen bg-white font-sans flex">
      {/* Sidebar */}
        <Sidebar />

      {/* Main content */}
      <div className="flex-1">
        <header className="flex justify-between items-center py-3 px-6 bg-gradient-to-b from-[#EBF3FF] via-[#E7F0FF] to-[#E1ECFF] p-8 shadow-none border border-[#D1E2FF]">
          <Home/>
          <NavBar/>
        </header>

        <main className="max-w-3xl mx-auto mt-8 px-4">
          <Card className="bg-gradient-to-b from-[#EBF3FF] via-[#E7F0FF] to-[#E1ECFF] p-8 rounded-3xl shadow-none border border-[#D1E2FF]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <ProfileIcon className="h-20 w-20 mr-4" name={formData.name} url={formData.avatar_url} placeholder={'Account'}/>
              <div>
                  <h2 className="text-2xl font-bold text-gray-900">{formData.name}</h2>
                  {/* <p className="text-sm text-gray-500">humanhood WORLD</p> */}
                </div>
              </div>
              <Button
                onClick={() => isEditing ? handleSubmit : setIsEditing(true)}
                className={`bg-[#3366FF] hover:bg-[#2952CC] text-white rounded-full px-4 py-2 transition-all duration-300 ease-in-out ${
                    isSaving ? 'animate-pulse' : ''
                }`}
                disabled={isSaving}
                >
              {isEditing ? (
                <>
                {isSaving ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                ) : (
                <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                )}
                {isSaving ? 'Saving...' : 'Save'}
                </>
                ) : (
                    <>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Profile
                    </>
                )}
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={!isEditing || isSaving}
                  className="bg-white border-gray-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing || isSaving}
                  className="bg-white border-gray-200"
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </div>
              <div>
                <label htmlFor="subscriptionPlan" className="block text-sm font-medium text-gray-700 mb-1">Subscription Plan</label>
                <Select
                  disabled={!isEditing || isSaving}
                  value={formData.subscription_plan}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger className="w-full bg-white border-gray-200">
                    <SelectValue placeholder="Select a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </main>
      </div>
    </div>
    </UserProvider>

  )
}

export default Profile;