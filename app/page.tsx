'use client';

import MediaGallerySeparated from "../components/MediaGallerySeparated";
import Header from "../components/Header";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [showFullBio, setShowFullBio] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  
  useEffect(() => {
    document.body.classList.add('homepage-new');
    return () => {
      document.body.classList.remove('homepage-new');
    };
  }, []);

  const bioMedia = [
    {
      src: "/bio_new.jpg",
      alt: "Angela Lamprianidou",
      type: "image" as const,
      title: "Angela Lamprianidou"
    }
  ];

  const shortDescription = `Angela Lamprianidou is a Greek choreographer, performer, producer, and body researcher with Spanish, German, and Indian roots. Her artistic language moves between dance, voice, energy, and anatomy — always grounded in presence, precision, and the unseen layers of human experience. She creates choreographic works that are not made to entertain, but to open space — for perception, for connection, for remembering what the body already knows.`;

  const fullDescription = `Angela Lamprianidou is a Greek choreographer, performer, producer, and body researcher with Spanish, German, and Indian roots. Her artistic language moves between dance, voice, energy, and anatomy — always grounded in presence, precision, and the unseen layers of human experience. She creates choreographic works that are not made to entertain, but to open space — for perception, for connection, for remembering what the body already knows.
Her journey began in Germany with early dance training under Henrike Guha, later continuing at the Eulàlia Blasi School in Barcelona. She went on to study choreography and new techniques of interpretation at the Institut del Teatre in Barcelona, where she received three Matrícula de Honor distinctions in Staging, Dance History, and Composition. At the same time, she completed a degree in Dentistry at the Friedrich-Alexander University in Erlangen — an unusual combination that still informs her somatic research today, particularly in the areas of neurophysiology, embodiment, and energetic release.
Angela's piece "SIT" received the Dansa Mes a Prop Award and was selected as a finalist at the international choreography competition No Ballet. Her works are deeply physical yet energetically subtle, unfolding as contemplative landscapes rather than staged events. The audience is never positioned as passive viewers — they are part of the atmosphere, participants in a live field of resonance. She often works in non-institutional, intimate, or forgotten spaces, where the raw edges of time and place become part of the performance itself.
Her creations have been presented across Europe, including at Mercat de les Flors, Antic Teatre, and the Teatre Nacional de Catalunya in Barcelona, Ponec Theatre in Prague, Tanzquartier Wien in Vienna, and Ballhaus Ost in Berlin. Angela lives and works between Athens and Berlin and continues to develop and share her work internationally. Wherever she goes, she brings not just performance, but a deep desire to enter into dialogue with the land, the people, and the invisible structures we all move within.
As a producer, she curates her own projects from concept to realization, crafting spaces where art is not separate from life. Her workshops — offered both nationally and internationally — are themselves performances: immersive, physical, energetic spaces where bodies speak, remember, and shift. These gatherings go beyond teaching; they are happenings, fields of transformation, and real-time rituals of collective research.
Angela has collaborated with artists such as Felix Ruckert, Roger Bernat, Tomeu Vergés, Caroline Brown, Santiago Sempere, and Iago Pericot. Her extended studies include Klein Technique with Barbara Mahler (USA), Feldenkrais Method, Energy Psychology with Astir Vlaminck (Germany), and yoga training at Shivashakti Yoga Barcelona. Since 2009, she has been researching the relationship between the jaw, the nervous system, and the body's energetic field — resulting in her own method of jaw and body release, which now flows into all aspects of her choreographic, performative, and teaching work.
Her artistic world is not one of hierarchy, but of shared presence. She doesn't create to impress — she creates to connect, to disturb comfort zones, to return to what is essential. There is an urgency in her work, but also great care. She says: "I don't create to entertain. I create to connect — to open time, to move energy, to remind us of what the body already knows. I love to bring my art into your country — and meet you there."
Reading her, watching her, moving with her — you feel that invitation. And you might just want to follow it.
www.you-are-the-point.de`;

  const additionalInfo = `For more information please contact her at angelabrillante@gmail.com`;

  const handleReadMore = () => {
    setIsAnimating(true);
    setShowFullBio(true);
    setIsAnimating(false);
  };

  const handleReadLess = () => {
    setIsAnimating(true);
    setShowFullBio(false);
    setIsAnimating(false);
  };

  const handleChoreographiesClick = () => {
    router.push('/choreographer');
  };

  const handlePerformerClick = () => {
    router.push('/choreographer');
  };

  const handleTeacherClick = () => {
    router.push('/choreographer?showWorkshop=true');
  };

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url('/pure2 copy.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        width: '100%',
        backgroundClip: 'padding-box'
      }}
    >
      <div className="absolute inset-0 bg-white/60 z-0"></div>
      
      <div className="relative z-10 min-h-screen text-black website-font angela-typography">
        <Header />
        
        <div ref={contentRef}>
          <MediaGallerySeparated
            mediaItems={bioMedia}
            title={
              <div>
                Angela Lamprianidou - 
                <button 
                  onClick={handleChoreographiesClick}
                  className="hover:text-gray-600 transition-colors duration-200 cursor-pointer"
                >
                  Choreographies
                </button>
                <span> // </span>
                <button 
                  onClick={handlePerformerClick}
                  className="hover:text-gray-600 transition-colors duration-200 cursor-pointer"
                >
                  Performer
                </button>
                <span> // </span>
                <button 
                  onClick={handleTeacherClick}
                  className="hover:text-gray-600 transition-colors duration-200 cursor-pointer"
                >
                  Teacher
                </button>
              </div>
            }
            description={shortDescription}
            additionalInfo={additionalInfo}
            photographer="© photo Brieuc Le Meur"
            textColor="black"
            preserveBackground={true}
            className={`bg-transparent transition-all duration-500 ease-in-out ${
              isAnimating ? 'opacity-90' : 'opacity-100'
            }`}
            imageSize="xlarge"
            isHomepage={true}
            showFullBio={showFullBio}
            setShowFullBio={setShowFullBio}
          />
        </div>
      
      </div>
    </div>
  );
}
