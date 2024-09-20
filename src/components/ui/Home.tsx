import Link from 'next/link';
import Image from 'next/image'

const Home = () => {
    return (
      <div className="flex items-center mb-8">
        <Image src="/placeholder.svg?height=24&width=24" alt="techpack.ai" width={24} height={24} className="text-[#3366FF]" />
        <Link href="/" className="ml-2 text-lg font-bold text-[#3366FF]">
          techpack.ai
        </Link>
      </div>
    )
}

export default Home;