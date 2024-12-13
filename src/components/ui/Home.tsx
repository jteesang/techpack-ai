import Link from 'next/link';
import Image from 'next/image'
import TechpackAIlogo from '@/app/assets/TechpackAIlogo.svg'

const Home = () => {
    return (
      <div className="flex items-center">
        <Image src={TechpackAIlogo} alt="techpack.ai" width={24} height={24} className="text-[#3366FF]" />
        <Link href="/" className="ml-2 text-lg font-bold text-[#3366FF]">
          techpack.ai
        </Link>
      </div>
    )
}

export default Home;