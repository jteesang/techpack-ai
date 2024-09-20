import { Button } from "@/components/ui/Button"
import { ChevronRight, Plus } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { Card} from "@/components/ui/Card"
import { useRouter } from "next/router"
import Home from "@/components/ui/Home"
import ProfileIcon from "@/components/ui/ProfileIcon"
import ProfileAccount from "@/components/ui/ProfileAccount"
import { useUser } from "@/context/UserContext"


const UploadOrDescribe: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();

  const handleUpload = () => {
    router.push('/creator');
  };

  const handleDescribe = () => {
    router.push('/inputform');
  };

  return (
  <div className="min-h-screen bg-white font-sans flex flex-col">
      <header className="flex justify-between items-center py-3 px-6 border-b border-gray-200">
      <Home/>

        <div className="flex items-center">
          {/* <ProfileAccount className={""} name={user.name}/> */}
          {/* <span className="mr-2 text-sm font-medium">Wyatt Sommer</span>
          <span className="mr-2 text-xs text-gray-500">humanhood WORLD</span> */}
          {/* <ProfileIcon className="h-8 w-8" name={}/> */}
          {/* <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Wyatt Sommer" />
            <AvatarFallback>WS</AvatarFallback>
          </Avatar> */}
          <ChevronRight className="ml-1 h-4 w-4 text-gray-400" />
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <Card className="max-w-4xl w-full bg-gradient-to-b from-[#EBF3FF] via-[#E7F0FF] to-[#E1ECFF] p-8 rounded-3xl shadow-none border border-[#D1E2FF]">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Unlock the Future of Fashion Design with Techpack.ai</h1>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between gap-6">
              <div className="w-1/2">
                <h2 className="text-lg font-medium mb-2 text-gray-700 text-center">Do you have Techpack details?</h2>
                <Button onClick={handleDescribe} size="lg" className="w-full bg-[#3366FF] hover:bg-[#2952CC] text-white px-4 py-6 rounded-full text-base font-semibold flex items-center justify-center">
                  <Plus className="mr-2 h-5 w-5" />
                  Use my own details
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="w-1/2">
                <h2 className="text-lg font-medium mb-2 text-gray-700 text-center">Do you have Techpack Sketch/ image?</h2>
                <Button onClick={handleUpload} size="lg" className="w-full bg-[#3366FF] hover:bg-[#2952CC] text-white px-4 py-6 rounded-full text-base font-semibold flex items-center justify-center">
                  <Plus className="mr-2 h-5 w-5" />
                  Use an image/sketch
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default UploadOrDescribe;
