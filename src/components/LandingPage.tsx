import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { Plus, ArrowRight, ChevronDown, Play, Check } from 'lucide-react';
import CheckoutForm from './CheckoutForm';
import Home from './ui/Home';
import NavBar from './NavBar';
import Login from './Login';
import Footer from './ui/Footer';
import CoverPage from '@/app/assets/CoverPage.png';
import BillOfMaterials from '@/app/assets/BillOfMaterials.png';
import Callouts from '@/app/assets/Callouts.png';
import Colorways from '@/app/assets/Colorways.png';
import FitComment from '@/app/assets/FitComment.png';
import FitPics from '@/app/assets/FitPics.png';
import FoldingPackaging from '@/app/assets/FoldingPackaging.png';
import GradedSpecs from '@/app/assets/GradedSpecs.png';
import Inspiration from '@/app/assets/Inspiration.png';
import LabelPlacements from '@/app/assets/LabelPlacements.png';
import PhotoSpecs from '@/app/assets/PhotoSpecs.png';
import PrintFabric from '@/app/assets/PrintFabric.png';
import { useUser } from '@/context/UserContext';

interface PageCardProps {
  title: string;
  description: string;
  image: StaticImageData;
}
interface PricingPlanProps {
  name: string;
  icon: string;
  price: string;
  perUser?: string;
  features: string[];
  bgColor: string;
  buttonColor: string;
  iconBgColor: string;
}

interface CircleDiagramProps {
  title: string;
  percentage: string;
  description: string;
}

// Data
const pageCards: PageCardProps[] = [
  { title: "Cover Page", description: "Includes a flat sketch of front and back of your design.", image: CoverPage },
  { title: "Inspiration Page", description: "Images that inspired your design, like a mood board.", image: Inspiration },
  { title: "Callouts Page", description: "Details on the flat sketch (front and back).", image: Callouts },
  { title: "Print Fabric Replacement", description: "This page tells the manufacturer what fabrics are to be used in what places on the garment.", image: PrintFabric },
  { title: "Colorways Page", description: "This page includes all the different color ways that you want to produce for this garment. You can determine the colorways that you want when creating with techpack.ai", image: Colorways },
  { title: "Bill of Materials (BOM)", description: "This page includes all the materials used in the construction of your garment. This will be auto generated but can be fully edited after tech pack creation.", image: BillOfMaterials },
  { title: "Folding/Packaging", description: "This page includes diagrams showing how you want your garment folded and packaged for shipment.", image: FoldingPackaging },
  { title: "Label Placements", description: "This page tells the manufacturer where you want your labels placed on your garment, and what kind of labels you want to use (and label design).", image: LabelPlacements },
  { title: "Proto Specs Page", description: "This page includes the assumed measurements of your garment. These specs can be fully edited if they're not accurate.", image: PhotoSpecs },
  { title: "1st & 2nd Fit Specs", description: "This page has a chart for you or the manufacturer to input adjusted specs after the first and second fittings of the produced prototype.", image: FitPics },
  { title: "Fit & Comment Page", description: "This page is for your comments on the first and second fittings. This is where you record the necessary adjustments needed for a proper fit.", image: FitComment },
  { title: "Graded Specs Page", description: "This page includes the final measurements of the garment that will be used for the full production run. These final measurements are added in later by the designer or manufacturer.", image: GradedSpecs },
];

const pricingPlans: PricingPlanProps[] = [
  {
    name: "Starter",
    icon: "🔵",
    price: "$300/yr",
    perUser: "per user",
    features: ["60 Tech packs / year (60 Credits)", "1 Regeneration for each tech pack"],
    bgColor: "bg-white",
    buttonColor: "bg-[#0047FF] text-white border-2 border-[#0374FC]",
    iconBgColor: "bg-blue-100",
  },
  {
    name: "Atelier",
    icon: "🏅",
    price: "$800/yr",
    perUser: "per user",
    features: ["180 Tech packs / year (180 Credits)", "2 Regenerations for each tech pack"],
    bgColor: "bg-gradient-to-b from-[rgba(120,189,0,0.5)] to-[rgba(241,255,43,0.5)]",
    buttonColor: "bg-[#0047FF] text-white border-2 border-[#0374FC]",
    iconBgColor: "bg-green-100",
  },
  {
    name: "Pro",
    icon: "💎",
    price: "$1333/yr",
    perUser: "per user",
    features: ["300 Tech packs / year (300 Credits)", "3 Regenerations for each tech pack"],
    bgColor: "bg-white",
    buttonColor: "bg-[#0047FF] text-white border-2 border-[#0374FC]",
    iconBgColor: "bg-yellow-100",
  },
  {
    name: "Enterprise",
    icon: "🏢",
    price: "$1999/yr",
    perUser: "per user",
    features: ["500 Tech packs / year (500 Credits)", "3 Regenerations for each tech pack"],
    bgColor: "bg-white",
    buttonColor: "bg-[#0047FF] text-white border-2 border-[#0374FC]",
    iconBgColor: "bg-blue-100",
  },
  {
    name: "Pay Per Pack",
    icon: "💰",
    price: "$12/Pack",
    features: ["1 Credit = 1 Completed tech pack (Includes 1 free Regeneration)"],
    bgColor: "bg-gradient-to-b from-[rgba(120,189,0,0.5)] to-[rgba(241,255,43,0.5)]",
    buttonColor: "bg-[#0047FF] text-white",
    iconBgColor: "bg-blue-100",
  },
];



// Components
const Header: React.FC = () => {
  const { user } = useUser();

  return (
    // TODO - old header
    // <header className="flex justify-between items-center py-4 px-8">
    //   <div className="flex items-center w-64">
    //     <Image src="/TechpackAIlogo.png" alt="techpack.ai" width={256} height={80} className="object-contain" />
    //   </div>

    //   <button type="button" onClick={() => handleCreateTechpack()} className="bg-[#0047FF] text-white px-8 py-4 rounded-[24px] flex items-center text-sm font-medium border-2 border-[#0374FC]">
    //     <span>Create a New Techpack</span>
    //     <div className="bg-white rounded-full p-2 ml-3">
    //       <Plus className="h-4 w-4 text-[#0047FF]" />
    //     </div>
    //   </button>

    //   <div className="flex items-center gap-3">
    //     <div className="flex flex-col items-end">
    //       <span className="text-sm font-medium">Wyatt Sommer</span>
    //       <span className="text-xs text-gray-500">humanhoodWORLD</span>
    //     </div>
    //     <div className="w-10 h-10 relative">
    //       <Image src="/user-avatar.png" alt="User avatar" layout="fill" className="rounded-full object-cover" />
    //     </div>
    //     <ChevronDown className="h-4 w-4 text-gray-400" />
    //   </div>
    // </header>

    <header className="flex justify-between items-center py-3 px-6 bg-gradient-to-b from-[#F8FAFC] via-[#E7F0FF] to-[#E1ECFF] p-8 shadow-none border border-[#D1E2FF]">
      <Home/>
      {/* <button type="button" onClick={() => handleCreateTechpack()} className="bg-[#0047FF] text-white px-8 py-4 rounded-[24px] flex items-center text-sm font-medium border-2 border-[#0374FC]">
        <span>Create a New Techpack</span>
        <div className="bg-white rounded-full p-2 ml-3">
          <Plus className="h-4 w-4 text-[#0047FF]" />
        </div>
      </button> */}
      <div className="flex flex-row">
        {!user ? <Login /> : <NavBar/>}
      </div>
    </header>
  )


};

const PageCard: React.FC<{ card: PageCardProps }> = ({ card }) => (
  <div className="w-full bg-white rounded-[48px] shadow-lg overflow-hidden">
    <div className="p-6 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 pr-4 mb-4 md:mb-0">
        <Image src={card.image} alt={card.title} width={200} height={150} className="object-cover rounded-xl" />
      </div>
      <div className="w-full md:w-1/2 pl-4">
        <h3 className="text-xl font-semibold text-[#0047FF] mb-2">{card.title}</h3>
        <p className="text-sm text-gray-600">{card.description}</p>
      </div>
    </div>
  </div>
);

const PricingCard: React.FC<{ plan: PricingPlanProps }> = ({ plan }) => { 
  return (
    <div className={`w-full rounded-2xl border ${plan.bgColor} p-6 flex flex-col shadow-lg`}>
      <div className={`text-4xl mb-4 ${plan.iconBgColor} w-16 h-16 flex items-center justify-center rounded-full`}>
        {plan.icon}
      </div>
      <h3 className="text-3xl font-bold text-[#0047FF] mb-2">{plan.name}</h3>
      <div className="text-4xl font-bold mb-1">
        {plan.price} {plan.perUser && <span className="text-lg font-normal text-gray-600">{plan.perUser}</span>}
      </div>
      <hr className="border-t border-gray-200 my-4" />
      <ul className="space-y-4 mb-auto">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
            <span className="text-lg">{feature}</span>
          </li>
        ))}
      </ul>
      <div className={`w-full h-[60px] shadow-md rounded-full flex items-center justify-center mt-6 ${plan.buttonColor} text-lg font-semibold hover:opacity-80`}>
        <CheckoutForm uiMode={'embedded'} planId={plan.name} />
        <ArrowRight className="h-5 w-5" />
      </div>
    </div>
  );
}


const CircleDiagram: React.FC<CircleDiagramProps> = ({ title, percentage, description }) => (
  <div className="relative w-full max-w-[350px] aspect-square">
    <div className="absolute inset-0 border-[5px] border-[#0047FF] rounded-full"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
      <div className="text-5xl font-bold text-[#0047FF] mb-2">{percentage}</div>
      <div className="text-2xl font-semibold text-[#0047FF] mb-4">{title}</div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

// const Footer: React.FC = () => (
//   <footer className="bg-gradient-to-t from-[#6BFFF2] via-[#66F9F3] to-white pt-16 pb-8">
//     <div className="max-w-6xl mx-auto px-6">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//         <div>
//           <Image src="/TechpackAIlogo.png" alt="techpack.ai" width={150} height={48} className="mb-4" />
//           <div className="flex space-x-4">
//             {/* Social Media Icons (replace '#' with actual links) */}
//             <a href="#" className="text-gray-600 hover:text-gray-900">
//               <span className="sr-only">LinkedIn</span>
//               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                 {/* LinkedIn Icon SVG */}
//                 <path d="M19 0h-14c-2.761..."></path>
//               </svg>
//             </a>
//             {/* ...other social icons */}
//           </div>
//         </div>
//         <div>
//           <h3 className="font-semibold mb-4">Product</h3>
//           <ul className="space-y-2">
//             <li><a href="#" className="text-gray-600 hover:text-gray-900">Demo Video</a></li>
//             <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
//             <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-semibold mb-4">Company</h3>
//           <ul className="space-y-2">
//             <li><a href="#" className="text-gray-600 hover:text-gray-900">Log In</a></li>
//             <li><a href="#" className="text-gray-600 hover:text-gray-900">Sign Up</a></li>
//             <li><a href="#" className="text-gray-600 hover:text-gray-900">Help</a></li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-semibold mb-4">Subscribe to our newsletter</h3>
//           <div className="flex mb-4">
//             <input
//               type="email"
//               placeholder="Type your email"
//               className="flex-grow px-4 py-2 rounded-l-full bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none"
//             />
//             <button className="bg-[#0047FF] text-white px-6 py-2 rounded-r-full">
//               Subscribe
//             </button>
//           </div>
//           <div className="text-sm text-gray-600">
//             <a href="#" className="hover:text-gray-900">Terms of service</a> ·{' '}
//             <a href="#" className="hover:text-gray-900">Privacy policy</a>
//           </div>
//         </div>
//       </div>
//       <div className="text-center text-sm text-gray-600">
//         ©2024 techpack.ai LLC
//       </div>
//     </div>
//   </footer>
// );

const TechpackLanding: React.FC = () => {
  const router = useRouter();

  const handleCreateTechpack = () => {
    router.push('/path');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen   font-sans">
      <Header />

      <main className="bg-gradient-to-b from-[#E6FFF9] via-[#E1F9FF] to-[#E6F4FF]">
        <div className="h-1 bg-gradient-to-r from-green-300 via-blue-300 to-blue-400"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center py-16 pb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0047FF] leading-tight mb-12">
              Create fashion techpacks 10x faster with the help of AI
            </h1>
            <button onClick={() => handleCreateTechpack()} className="bg-[#0047FF] text-white px-12 py-6 rounded-3xl flex items-center text-lg font-medium mx-auto hover:opacity-80">
              Create a New Techpack
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </section>

          {/* How It Works Section */}
          <section className="py-16">
            <h2 className="text-4xl font-bold text-[#0047FF] text-center mb-12">
              See how techpack.ai works
            </h2>
            <div className="flex flex-col md:flex-row items-center bg-[#6B8BF5] rounded-3xl p-8 gap-8">
              <div className="relative flex-1">
                <Image src="/video-thumbnail.png" alt="Video Thumbnail" width={600} height={400} className="rounded-2xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-3xl p-4">
                    <Play className="h-12 w-12 text-[#0047FF]" />
                  </div>
                </div>
              </div>
              <div className="max-w-md text-white">
                <p className="mb-6 text-lg">
                  Create a techpack in minutes. Upload your sketches and let AI generate a complete, editable techpack ready for production.
                </p>
                <button type="button" className="bg-[#0047FF] text-white px-8 py-3 rounded-3xl flex items-center text-lg font-medium hover:opacity-80">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </section>

          {/* Pages Created Section */}
          <section className="py-16 bg-gradient-to-b from-[rgba(3,116,252,0.1)] to-[rgba(3,116,252,0)] rounded-3xl">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-[#0047FF] mb-12">
                What pages are created?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                {pageCards.map((card, index) => (
                  <PageCard key={index} card={card} />
                ))}
              </div>
              {/* <div className="mt-12 flex justify-center">
                <button className="bg-white text-[#0047FF] px-8 py-4 rounded-3xl border-2 border-[#0374FC] flex items-center text-lg font-semibold hover:opacity-80">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div> */}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(237, 243, 255, 1)] rounded-3xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0047FF] text-center mb-4">
                Explore Our Plans and Pricing
              </h2>
              <p className="text-center text-xl text-gray-600 mb-12">
                We have an option for every level of organization.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {pricingPlans.map((plan, index) => (
                  <PricingCard key={index} plan={plan} />
                ))}
              {/* </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {additionalPlans.map((plan, index) => (
                  <PricingCard key={index} plan={plan} />
                ))} */}
              </div>
            </div>
          </section>

          {/* Sustainability Section */}
          <section className="py-32 bg-white rounded-3xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0047FF] mb-6">
                Sustainability
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600 mb-16">
                10% of our profit will be used to help the world. Here's how:
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-12">
                <CircleDiagram
                  title="Eden Reforestation Projects"
                  percentage="5%"
                  description="Restoring landscapes and creating jobs to mitigate climate change."
                />
                <CircleDiagram
                  title="Remake.world"
                  percentage="5%"
                  description="Advocating fair pay and climate justice in the fashion industry."
                />
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-16 bg-[#EDF3FF]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl bg-white shadow-lg p-8 text-center">
                <h2 className="text-3xl font-bold text-[#0047FF] mb-4">
                  Create Your First AI Techpack Today!
                </h2>
                <button className="bg-[#0047FF] text-white px-6 py-3 rounded-3xl flex items-center text-lg font-semibold mx-auto hover:opacity-80">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
      {/* <Footer /> */}
    </div>
  )

};

export default TechpackLanding;