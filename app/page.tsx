'use client';

import Link from "next/link"
import Header from "../components/Header"
import { useState } from "react"

export default function HomePage() {
  const [showArchive, setShowArchive] = useState(false);
  const [showWorkshop, setShowWorkshop] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleArchive = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowArchive(!showArchive);
      setShowWorkshop(false);
      setIsTransitioning(false);
    }, 300);
  };

  const toggleWorkshop = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowWorkshop(!showWorkshop);
      setShowArchive(false);
      setIsTransitioning(false);
    }, 300);
  };
  return (
    <div 
      className="min-h-screen relative overflow-hidden bg-black text-white website-font"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url('/homepage_background.jpg')`,
          backgroundSize: '100% auto',
          backgroundPosition: 'top center',
          backgroundRepeat: 'repeat-y',
        }}
      />

      {/* Dynamic Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Title Section */}
        <div className="pt-32 pl-6 md:pl-24">
          <div className="website-title mb-2">
            <Link href="/contact" className="hover:text-green-400 transition-colors">
              Choreographer&nbsp;&amp;&nbsp;Performer
            </Link>
            &nbsp;&amp;&nbsp;
            <button 
              onClick={toggleWorkshop}
              className="hover:text-green-400 transition-colors cursor-pointer"
            >
              Teaching
            </button>
          </div>
        </div>

        {/* Main Content - Performance Links */}
        <div className="mt-8 ml-6 md:ml-24 website-text relative">
          {/* Current Performances */}
          <div className={`transition-all duration-500 ease-in-out ${
            showArchive || showWorkshop
              ? 'opacity-0 transform translate-x-[-50px] pointer-events-none absolute top-0 left-0' 
              : 'opacity-100 transform translate-x-0'
          }`}>
        <Link href="/Per4mer/BalletBloody" className="block hover:text-green-400 transition-colors">
          Ballet for bloody beginners <span className="bg-black/80 px-2 py-1 rounded text-yellow-400 text-base font-bold">→ [BG: Med 60% | Font: +20% | Layout: ↓Vid→Img→Text | Screen: 550px (+50px)]</span>
        </Link>
            <Link href="/Per4mer/piece_peace" className="block hover:text-green-400 transition-colors">
              Piece#Peace <span className="bg-black/80 px-2 py-1 rounded text-yellow-400 text-base font-bold">→ [BG: Dark 80% | Font: Bold | Layout: ↓Vid→Img→Text | Screen: 600px (+100px)]</span>
            </Link>
            <Link href="/Per4mer/SocialMovement" className="block hover:text-green-400 transition-colors">
              Dance as a social movement <span className="bg-black/80 px-2 py-1 rounded text-yellow-400 text-base font-bold">→ [BG: Std 70% | Font: Big+Bold | Layout: ↓Img→Vid→Text | 900px (+400px)]</span>
            </Link>
            <Link href="/Per4mer/SITz" className="block hover:text-green-400 transition-colors">
              SITz <span className="bg-black/80 px-2 py-1 rounded text-yellow-400 text-base font-bold">→ [BG: Med 60% | Font: Wide | Layout: ↓Img→Vid→Text | 850px (+350px)]</span>
            </Link>
            <Link href="/Per4mer/FromNOWtoNow" className="block hover:text-green-400 transition-colors">
              From NOW to Now <span className="bg-black/80 px-2 py-1 rounded text-yellow-400 text-base font-bold">→ [BG: Light 50% | Font: +20% | Layout: ↓Vid→Img→Text | Screen: 650px (+150px)]</span>
            </Link>
            <Link href="/Per4mer/TanzhinTanzher" className="block hover:text-green-400 transition-colors">
              Tanz hin Tanz her <span className="bg-black/80 px-2 py-1 rounded text-yellow-400 text-base font-bold">→ [BG: Light 50% | Font: Bold | Screen: 800px (+300px)]</span>
            </Link>
            <Link href="/Per4mer/AppointmentOnStage" className="block hover:text-green-400 transition-colors">
              Appointment on stage <span className="bg-black/80 px-2 py-1 rounded text-yellow-400 text-base font-bold">→ [BG: Dark 80% | Font: Big+Bold | Layout: ↓Img→Vid→Text | 750px (+250px)]</span>
            </Link>
            <Link href="/Per4mer/alihop" className="block hover:text-green-400 transition-colors">
              alihop <span className="bg-black/80 px-2 py-1 rounded text-yellow-400 text-base font-bold">→ [BG: Med 60% | Font: Wide | Layout: ↓Vid→Img→Text | 900px (+400px)]</span>
            </Link>
            <Link href="/Per4mer/Appointment2" className="block hover:text-green-400 transition-colors">
              Appointment # 2 <span className="bg-black/80 px-2 py-1 rounded text-yellow-400 text-base font-bold">→ [BG: B&W 75% | Font: +20% | Layout: ↓Img→Vid→Text | 750px (+250px)]</span>
            </Link>
            <Link href="/Per4mer/opaeuropa" className="block hover:text-green-400 transition-colors">
              opa europa <span className="bg-black/80 px-2 py-1 rounded text-yellow-400 text-base font-bold">→ [BG: B&W 75% | Font: Bold | Layout: ↓Vid→Img→Text | 600px (+100px)]</span>
            </Link>
            <Link href="/Per4mer/tongue" className="block hover:text-green-400 transition-colors">
              tongue <span className="bg-black/80 px-2 py-1 rounded text-yellow-400 text-base font-bold">→ [BG: Med 60% | Font: Big+Bold | Screen: 550px (+50px)]</span>
            </Link>
            <Link href="/Per4mer/backtoemotion" className="block hover:text-green-400 transition-colors">
              back to emotion <span className="bg-black/80 px-2 py-1 rounded text-yellow-400 text-base font-bold">→ [BG: Light 50% | Font: Wide | Layout: ↓Vid→Img→Text | Screen: 850px (+350px)]</span>
            </Link>
            <Link href="/Per4mer/thenote" className="block hover:text-green-400 transition-colors">
              the note <span className="bg-black/80 px-2 py-1 rounded text-yellow-400 text-base font-bold">→ [BG: Dark 80% | Font: +20% | Screen: 600px (+100px)]</span>
            </Link>
            <Link href="/Per4mer/sit" className="block hover:text-green-400 transition-colors">
              sit <span className="bg-black/80 px-2 py-1 rounded text-yellow-400 text-base font-bold">→ [BG: Std 70% | Font: Bold | Layout: ↓Vid→Img→Text | Img:650px Vid:1280px HUGE]</span>
            </Link>
            
            {/* Workshop Button */}
            <button 
              onClick={toggleWorkshop}
              className="hover:text-green-400 transition-colors cursor-pointer text-left"
            >
              {showWorkshop ? 'Back to Current' : 'Workshop'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            
            <Link href="/homemotion" className="block hover:text-green-400 transition-colors">
              Hom<span className="text-red-500 text-3xl font-medium">ε</span>motion <span className="bg-black/80 px-2 py-1 rounded text-yellow-400 text-base font-bold">→ [BG: Light 50% | Font: Big+Bold | Layout: ↓Img→Vid→Text | 950px (+450px)]</span>
            </Link>

            {/* Spacing for separation */}
            <div className="h-8"></div>

            {/* Enter Discipline Jaw Sessions - in Current view */}
            <a 
              href="http://you-are-the-point.de" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:text-green-400 transition-colors"
            >
              Enter Discipline Jaw Sessions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>

            {/* Archive Button - in Current view */}
            <button 
              onClick={toggleArchive}
              className="hover:text-green-400 transition-colors cursor-pointer text-left block"
            >
              Archive&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
          </div>

          {/* Archive Items */}
          <div className={`transition-all duration-500 ease-in-out ${
            showArchive 
              ? 'opacity-100 transform translate-x-0' 
              : 'opacity-0 transform translate-x-[50px] pointer-events-none absolute top-0 left-0'
          }`}>
            <Link href="/archive/el-cuerpo-del-otro" className="block hover:text-green-400 transition-colors">
              el cuerpo del otro
            </Link>
            <Link href="/archive/time" className="block hover:text-green-400 transition-colors">
              time
            </Link>
            <Link href="/archive/loop" className="block hover:text-green-400 transition-colors">
              loop
            </Link>
            <Link href="/archive/katharsi" className="block hover:text-green-400 transition-colors">
              katharsi
            </Link>
            <Link href="/archive/shortcuts" className="block hover:text-green-400 transition-colors">
              shortcuts
            </Link>
            <Link href="/archive/art-sit" className="block hover:text-green-400 transition-colors">
              art sit
            </Link>
            <Link href="/archive/movie" className="block hover:text-green-400 transition-colors">
              movie
            </Link>

            {/* Spacing for separation */}
            <div className="h-8"></div>

            {/* Enter Discipline Jaw Sessions - in Archive view */}
            <a 
              href="http://you-are-the-point.de" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:text-green-400 transition-colors"
            >
              Enter Discipline Jaw Sessions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>

            {/* Back to Current Button - in Archive view */}
            <button 
              onClick={toggleArchive}
              className="hover:text-green-400 transition-colors cursor-pointer text-left block"
            >
              Back to Current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
          </div>

          {/* Workshop Items */}
          <div className={`transition-all duration-500 ease-in-out ${
            showWorkshop 
              ? 'opacity-100 transform translate-x-0' 
              : 'opacity-0 transform translate-x-[50px] pointer-events-none absolute top-0 left-0'
          }`}>
            <Link href="/workshop/jaw-release" className="block hover:text-green-400 transition-colors">
              Jaw and Body Release
            </Link>
            <Link href="/workshop/raw-man-tick" className="block hover:text-green-400 transition-colors">
              RAW-MAN-TICK
            </Link>
            <Link href="/workshop/you-are-point" className="block hover:text-green-400 transition-colors">
              You are the point
            </Link>
            <Link href="/workshop/life-choreography" className="block hover:text-green-400 transition-colors">
              Lifechoreography
            </Link>
            <Link href="/workshop/expansion" className="block hover:text-green-400 transition-colors">
              Expansion and Explosion
            </Link>
            <Link href="/workshop/dance-news" className="block hover:text-green-400 transition-colors">
              Dance News
            </Link>
            <Link href="/workshop/zeitgeist" className="block hover:text-green-400 transition-colors">
              Gegen den Zeitgeist
            </Link>
            <Link href="/workshop/flipflop" className="block hover:text-green-400 transition-colors">
              Flip Flop for everyone
            </Link>
            <Link href="/workshop/yoga" className="block hover:text-green-400 transition-colors">
              Yoga - Composition - Dance
            </Link>
            <Link href="/workshop/composition" className="block hover:text-green-400 transition-colors">
              Composition
            </Link>
            <Link href="/workshop/cia" className="block hover:text-green-400 transition-colors">
              CIA
            </Link>
            <a 
              href="/ReferenceWorkshops.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:text-green-400 transition-colors"
            >
              Reference (PDF)
            </a>
            {/* Spacing for separation */}
            <div className="h-8"></div>
            
            <a 
              href="http://you-are-the-point.de" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:text-green-400 transition-colors"
            >
              Enter Discipline Jaw Sessions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
            <button 
              onClick={toggleArchive}
              className="hover:text-green-400 transition-colors cursor-pointer text-left block"
            >
              Archive&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            <button 
              onClick={toggleWorkshop}
              className="hover:text-green-400 transition-colors cursor-pointer text-left block"
            >
              Back to Current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
          </div>
        </div>


      </div>

    </div>
  )
}