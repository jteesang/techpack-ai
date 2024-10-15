import Image from 'next/image'
import TechpackAIlogo from '@/app/assets/TechpackAIlogo.svg'

const Footer = () => {
  return (
    <div className="pt-8">
      <footer className="bg-gradient-to-t from-[#6BFFF2] via-[#66F9F3] to-[#F8FAFC] pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-[3fr_4fr_4fr_4fr] gap-2">
            <div className="flex items-center justify-self-center self-center">
              <Image src={TechpackAIlogo} alt="techpack.ai" width={48} height={48} />
              <h1 className="ml-2 text-lg font-bold text-[#3366FF]">
                techpack.ai
              </h1>
            </div>
            <div className="items-center justify-self-center self-center">
              <h3 className="font-semibold mb-4">Demo Video</h3>
              <h3 className="font-semibold mb-4">Features</h3>
              <h3 className="font-semibold">Pricing</h3>
            </div>
            <div className="justify-self-center self-center">
              <h3 className="font-semibold mb-4">Log In</h3>
              <h3 className="font-semibold mb-4">Sign Up</h3>
              <h3 className="font-semibold">Help</h3>
            </div>
            <div className="col-span-1 flex items-center justify-self-center self-center">
              <input
                type="email"
                placeholder="Type your email"
                className="flex-grow px-4 py-2 rounded-l-full bg-gradient-to-r from-blue-500 to-blue-400 text-white placeholder-white w-full"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-r-full">
                Subscribe
              </button>
            </div>

          </div>
 
          <div className="mt-12 text-center text-sm text-gray-600">
            <div className="mt-4 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Terms of Service</a>
              {' · '}
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            </div>
            ©2024 techpack.ai LLC
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer;
