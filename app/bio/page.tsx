'use client';

import MediaGallerySeparated from "../../components/MediaGallerySeparated";
import Header from "../../components/Header";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
// Inline styles for Bio page font size
const bioStyles = `
.bio-text-large {
  font-family: FreeMono, "courier new", monospace !important;
  letter-spacing: 0.23px !important;
  line-height: 1.1 !important;
  font-size: 23px !important;
  color: #000000 !important;
}

/* Force ONLY Bio page content text to be larger - NOT header */
.media-screen-small .website-text {
  font-size: 23px !important;
  color: #000000 !important;
}

.media-screen-small p {
  font-size: 23px !important;
  color: #000000 !important;
}

/* Target only specific content areas, avoid header completely */
.media-screen-small > div:not(header) .website-text,
.media-screen-small > div:not(header) p,
.media-screen-small > div:not(header) div,
.media-screen-small > div:not(header) span {
  font-size: 23px !important;
  color: #000000 !important;
}
`;

export default function BioPage() {
  const router = useRouter();
  const [showChoreographer, setShowChoreographer] = useState(false);
  const [showTeaching, setShowTeaching] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleChoreographer = () => {
    router.push('/');
  };

  const toggleTeaching = () => {
    router.push('/');
  };
  const bioMedia = [
    {
      src: "https://lamprianidou.com/Per4mer/bio/Angela-In.jpg",
      alt: "Angela Lamprianidou",
      type: "image" as const,
      title: "Angela Lamprianidou"
    }
  ];

  const description = `Angela Lamprianidou is a Greek choreographer, performer, producer, and body researcher with Spanish, German, and Indian roots. Her artistic language moves between dance, voice, energy, and anatomy — always grounded in presence, precision, and the unseen layers of human experience. She creates choreographic works that are not made to entertain, but to open space — for perception, for connection, for remembering what the body already knows.

Her journey began in Germany with early dance training under Henrike Guha, later continuing at the Eulàlia Blasi School in Barcelona. She went on to study choreography and new techniques of interpretation at the Institut del Teatre in Barcelona, where she received three Matrícula de Honor distinctions in Staging, Dance History, and Composition. At the same time, she completed a degree in Dentistry at the Friedrich-Alexander University in Erlangen — an unusual combination that still informs her somatic research today, particularly in the areas of neurophysiology, embodiment, and energetic release.

Angela's piece "SIT" received the Dansa Mes a Prop Award and was selected as a finalist at the international choreography competition No Ballet. Her works are deeply physical yet energetically subtle, unfolding as contemplative landscapes rather than staged events. The audience is never positioned as passive viewers — they are part of the atmosphere, participants in a live field of resonance. She often works in non-institutional, intimate, or forgotten spaces, where the raw edges of time and place become part of the performance itself.

Her creations have been presented across Europe, including at Mercat de les Flors, Antic Teatre, and the Teatre Nacional de Catalunya in Barcelona, Ponec Theatre in Prague, Tanzquartier Wien in Vienna, and Ballhaus Ost in Berlin. Angela lives and works between Athens and Berlin and continues to develop and share her work internationally. Wherever she goes, she brings not just performance, but a deep desire to enter into dialogue with the land, the people, and the invisible structures we all move within.

As a producer, she curates her own projects from concept to realization, crafting spaces where art is not separate from life. Her workshops — offered both nationally and internationally — are themselves performances: immersive, physical, energetic spaces where bodies speak, remember, and shift. These gatherings go beyond teaching; they are happenings, fields of transformation, and real-time rituals of collective research.

Angela has collaborated with artists such as Felix Ruckert, Roger Bernat, Tomeu Vergés, Caroline Brown, Santiago Sempere, and Iago Pericot. Her extended studies include Klein Technique with Barbara Mahler (USA), Feldenkrais Method, Energy Psychology with Astir Vlaminck (Germany), and yoga training at Shivashakti Yoga Barcelona. Since 2009, she has been researching the relationship between the jaw, the nervous system, and the body's energetic field — resulting in her own method of jaw and body release, which now flows into all aspects of her choreographic, performative, and teaching work.

Her artistic world is not one of hierarchy, but of shared presence. She doesn't create to impress — she creates to connect, to disturb comfort zones, to return to what is essential. There is an urgency in her work, but also great care. She says: "I don't create to entertain. I create to connect — to open time, to move energy, to remind us of what the body already knows. I love to bring my art into your country — and meet you there."

Reading her, watching her, moving with her — you feel that invitation. And you might just want to follow it.`;

  const additionalInfo = ``;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: bioStyles }} />
      <div className="min-h-screen bg-white">
      {/* Background image container */}
      <div 
        className="relative"
        style={{
          backgroundImage: 'url("/PURE ende.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '100vh'
        }}
      >
        {/* White overlay - covers only the background image area */}
        <div className="absolute inset-0 bg-white/60 z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 text-black website-font media-screen-small">
        
        <MediaGallerySeparated
      mediaItems={bioMedia}
          title={
            <div className="bio-text-large mb-2 font-black" style={{fontSize: '23px', fontFamily: 'FreeMono, courier new, monospace', letterSpacing: '0.23px', lineHeight: '1.1', color: '#000000'}}>
              <span>Angela Lamprianidou - </span>
              <button 
                onClick={toggleChoreographer}
                className=" transition-colors cursor-pointer font-bold"
              >
                Choreographer & Performer
              </button>
              <span> & </span>
              <button 
                onClick={toggleTeaching}
                className=" transition-colors cursor-pointer font-bold"
              >
                Teaching
              </button>
            </div>
          }
      description={description}
      additionalInfo={additionalInfo}
          photographer="© photo Brieuc Le Meur"
          imageSize="xlarge"
          textColor="black"
        />
        
        {/* Litfaßsäule Image - In main content area with text wrapping */}
        <div className="px-4 md:px-18 pb-10">
          <div className="relative">
            <div className="float-right ml-8 mb-8 mt-8">
              <img 
                src="/bottom_right_image.png" 
                alt="Litfaßsäule" 
                className="max-w-xs md:max-w-sm h-auto"
              />
            </div>
            
            {/* Text content that will wrap around the image */}
            <div className="bio-text-large leading-tight" style={{fontSize: '23px', fontFamily: 'FreeMono, courier new, monospace', letterSpacing: '0.23px', lineHeight: '1.1', color: '#000000'}}>
              <p>
                For more information please contact her at angelabrillante@gmail.com
              </p>
              <p>
                Angela continues to develop and share her work internationally, bringing not just performance, but a deep desire to enter into dialogue with the land, the people, and the invisible structures we all move within. Her workshops — offered both nationally and internationally — are themselves performances: immersive, physical, energetic spaces where bodies speak, remember, and shift.
              </p>
              <p>
                These gatherings go beyond teaching; they are happenings, fields of transformation, and real-time rituals of collective research. Angela has collaborated with artists such as Felix Ruckert, Roger Bernat, Tomeu Vergés, Caroline Brown, Santiago Sempere, and Iago Pericot.
              </p>
              <p>
                Her extended studies include Klein Technique with Barbara Mahler (USA), Feldenkrais Method, Energy Psychology with Astir Vlaminck (Germany), and yoga training at Shivashakti Yoga Barcelona. Since 2009, she has been researching the relationship between the jaw, the nervous system, and the body's energetic field.
              </p>
            </div>
            
            <div className="clear-both"></div>
          </div>
        </div>
        
        {/* Navigation Content */}
        <div className="px-4 md:px-18 pb-10">
          <div className="bio-text-large relative" style={{fontSize: '23px', fontFamily: 'FreeMono, courier new, monospace', letterSpacing: '0.23px', lineHeight: '1.1', color: '#000000'}}>
            {/* Choreographer & Performer Content */}
            <div className={`transition-all duration-500 ease-in-out ${
              showChoreographer 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-[50px] pointer-events-none absolute top-0 left-0'
            }`}>
              <Link href="/Per4mer/BalletBloody" className="block  transition-colors">
                Ballet for bloody beginners
              </Link>
              <Link href="/Per4mer/piece_peace" className="block  transition-colors">
                Piece#Peace
              </Link>
              <Link href="/Per4mer/SocialMovement" className="block  transition-colors">
                Dance as a social movement
              </Link>
              <Link href="/Per4mer/SITz" className="block  transition-colors">
                SITz
              </Link>
              <Link href="/Per4mer/FromNOWtoNow" className="block  transition-colors">
                From NOW to Now
              </Link>
              <Link href="/Per4mer/TanzhinTanzher" className="block  transition-colors">
                Tanz hin Tanz her
              </Link>
              <Link href="/Per4mer/AppointmentOnStage" className="block  transition-colors">
                Appointment on stage
              </Link>
              <Link href="/Per4mer/alihop" className="block  transition-colors">
                alihop
              </Link>
              <Link href="/Per4mer/appointment" className="block  transition-colors">
                Appointment # 2
              </Link>
              <Link href="/Per4mer/opaeuropa" className="block  transition-colors">
                opa europa
              </Link>
              <Link href="/Per4mer/tongue" className="block  transition-colors">
                tongue
              </Link>
              <Link href="/Per4mer/backtoemotion" className="block  transition-colors">
                back to emotion
              </Link>
              <Link href="/Per4mer/thenote" className="block  transition-colors">
                the note
              </Link>
              <Link href="/Per4mer/sit" className="block  transition-colors">
                sit
              </Link>
              
              {/* Spacing for separation */}
              <div className="h-8"></div>
              
              <Link href="/bio" className="block  transition-colors">
                Bio
              </Link>
              <Link href="/press" className="block  transition-colors">
                Press
              </Link>
              <Link href="/contact" className="block  transition-colors">
                Contact
              </Link>
              <Link href="/collaborations" className="block  transition-colors">
                Collaborations
              </Link>
              
              {/* Spacing for separation */}
              <div className="h-8"></div>
              
              <button 
                onClick={toggleTeaching}
                className=" transition-colors cursor-pointer text-left"
              >
                Workshop
              </button>
              <Link href="/homemotion" className="block  transition-colors">
                Hom<span className="text-red-500 text-3xl font-medium">ε</span>motion
              </Link>
              
              {/* Spacing for separation */}
              <div className="h-8"></div>
              
              <a 
                href="http://you-are-the-point.de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block  transition-colors"
              >
                Enter Discipline Jaw Sessions (you-are-the-point.de)
              </a>
              <Link href="/gallery" className="block  transition-colors">
                Gallery
              </Link>
              <button 
                onClick={toggleChoreographer}
                className=" transition-colors cursor-pointer text-left block"
              >
                Archive
              </button>
            </div>

            {/* Teaching Content */}
            <div className={`transition-all duration-500 ease-in-out ${
              showTeaching 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-[50px] pointer-events-none absolute top-0 left-0'
            }`}>
              <Link href="/workshop/jaw-release" className="block  transition-colors">
                Jaw and Body Release
              </Link>
              <Link href="/workshop/raw-man-tick" className="block  transition-colors">
                RAW-MAN-TICK
              </Link>
              <Link href="/workshop/you-are-point" className="block  transition-colors">
                You are the point
              </Link>
              <Link href="/workshop/life-choreography" className="block  transition-colors">
                Lifechoreography
              </Link>
              <Link href="/workshop/expansion" className="block  transition-colors">
                Expansion and Explosion
              </Link>
              <Link href="/workshop/dance-news" className="block  transition-colors">
                Dance News
              </Link>
              <Link href="/workshop/zeitgeist" className="block  transition-colors">
                Gegen den Zeitgeist
              </Link>
              <Link href="/workshop/flipflop" className="block  transition-colors">
                Flip Flop for everyone
              </Link>
              <Link href="/workshop/yoga" className="block  transition-colors">
                Yoga - Composition - Dance
              </Link>
              <Link href="/workshop/composition" className="block  transition-colors">
                Composition
              </Link>
              <Link href="/workshop/cia" className="block  transition-colors">
                CIA
              </Link>
              <Link href="/workshop/ta-panta-rei" className="block  transition-colors">
                Ta Panta Rei - Seniors Workshop
              </Link>
              <a 
                href="/ReferenceWorkshops.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block  transition-colors"
              >
                Reference (PDF)
              </a>
              
              {/* Spacing for separation */}
              <div className="h-8"></div>
              
              <button 
                onClick={toggleChoreographer}
                className=" transition-colors cursor-pointer text-left block"
              >
                Back to Current
              </button>
            </div>
          </div>
        </div>
        
        </div>
      </div>
    </div>
    </>
  );
}