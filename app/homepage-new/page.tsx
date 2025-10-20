'use client';

import MediaGallerySeparated from "../../components/MediaGallerySeparated";
import Header from "../../components/Header";
import Link from "next/link";
import { useEffect } from "react";

export default function HomepageNew() {
  // Set body class for homepage-new styling
  useEffect(() => {
    document.body.classList.add('homepage-new');
    return () => {
      document.body.classList.remove('homepage-new');
    };
  }, []);

  const bioMedia = [
    {
      src: "https://lamprianidou.com/Per4mer/bio/Angela-In.jpg",
      alt: "Angela Lamprianidou",
      type: "image" as const,
      title: "Angela Lamprianidou"
    }
  ];

  const description = `Angela Lamprianidou is a Greek choreographer, grown up in Essen-Germany and later emigrated to Barcelona.
In Barcelona, she studied 4 years, choreography and new techniques of interpretation at the "Institut del Teatre Barcelona", in Essen dance at "Luis Mijares dance Studio", Arnaldo Alvarez (Pina Bausch Company) and Ballett with Henrike Guha in Fürth, in Erlangen Dentistry at the "Friedrich Alexander University Erlangen-Nürnberg".

This melange de trois makes her pieces like conspiracies, with a looping logic and a certain tenaciousness, when it comes to understanding pure form and energy.

Angela lived in Barcelona for 13 years. Her teachers recognised very quickly her exceptional ability to focus on staging and choreographing.`;

  const additionalInfo = `She is a qualified Yoga teacher and Yoga Coach, certified by the "Shrivivek Center of Barcelona".

During her dance education, she studied Klein technique with Barbara Mahler and has participated in several workshops of BMC and somatic healing movement.

In 2019 she founded Homεmotion, a place to expand and create new Visions in Athens Center. She is the artistic director of this Artist residency.

Angela continues to develop and share her work internationally, bringing not just performance, but a deep desire to enter into dialogue with the land, the people, and the invisible structures we all move within. Her workshops — offered both nationally and internationally — are themselves performances: immersive, physical, energetic spaces where bodies speak, remember, and shift.

These gatherings go beyond teaching; they are happenings, fields of transformation, and real-time rituals of collective research. Angela has collaborated with artists such as Felix Ruckert, Roger Bernat, Tomeu Vergés, Caroline Brown, Santiago Sempere, and Iago Pericot.

Her extended studies include Klein Technique with Barbara Mahler (USA), Feldenkrais Method, Energy Psychology with Astir Vlaminck (Germany), and yoga training at Shivashkiti Yoga Barcelona. Since 2009, she has been researching the relationship between the jaw, the nervous system, and the body's energetic field — resulting in her own method of jaw and body release, which now flows into all aspects of her choreographic, performative, and teaching work.

Her artistic world is not one of hierarchy, but of shared presence. She doesn't create to impress — she creates to connect, to disturb comfort zones, to return to what is essential. There is an urgency in her work, but also great care. She says: "I don't create to entertain. I create to connect — to open time, to move energy, to remind us of what the body already knows. I love to bring my art into your country — and meet you there."

Reading her, watching her, moving with her — you feel that invitation. And you might just want to follow it.

www.you-are-the-point.de`;

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
      {/* White overlay for better text readability */}
      <div className="absolute inset-0 bg-white/60 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen text-black website-font">
        <Header />
        
        <MediaGallerySeparated
          mediaItems={bioMedia}
          title={
            <div>
              <h2 className="text-lg font-medium text-gray-600 mb-2">
                <span>Angela Lamprianidou - </span>
                <Link href="/choreographer" className=" transition-colors cursor-pointer">
                  Choreographer
                </Link>
                <span> & </span>
                <Link href="/choreographer" className=" transition-colors cursor-pointer">
                  Performer
                </Link>
                <span> & </span>
                <Link href="/choreographer?showWorkshop=true" className=" transition-colors cursor-pointer">
                  Teaching
                </Link>
              </h2>
              <h1 className="website-title" style={{ borderBottom: 'none', boxShadow: 'none' }}>Biography</h1>
            </div>
          }
          description={description}
          additionalInfo={additionalInfo}
          photographer="© photo Brieuc Le Meur"
          textColor="black"
          preserveBackground={true}
          className="bg-transparent"
        />
      
      {/* Litfaßsäule Image - Same as original homepage */}
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
          <div style={{ 
            fontSize: '18px', 
            lineHeight: '1.4', 
            color: '#000000',
            fontFamily: 'FreeMono, "courier new", monospace',
            marginBottom: '1rem'
          }}>
            <p style={{ fontSize: '18px', lineHeight: '1.4', marginBottom: '1rem', color: '#000000' }}>
              For more information please contact her at angelabrillante@gmail.com
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.4', marginBottom: '1rem', color: '#000000' }}>
              Angela continues to develop and share her work internationally, bringing not just performance, but a deep desire to enter into dialogue with the land, the people, and the invisible structures we all move within. Her workshops — offered both nationally and internationally — are themselves performances: immersive, physical, energetic spaces where bodies speak, remember, and shift.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.4', marginBottom: '1rem', color: '#000000' }}>
              These gatherings go beyond teaching; they are happenings, fields of transformation, and real-time rituals of collective research. Angela has collaborated with artists such as Felix Ruckert, Roger Bernat, Tomeu Vergés, Caroline Brown, Santiago Sempere, and Iago Pericot.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.4', marginBottom: '1rem', color: '#000000' }}>
              Her extended studies include Klein Technique with Barbara Mahler (USA), Feldenkrais Method, Energy Psychology with Astir Vlaminck (Germany), and yoga training at Shivashkiti Yoga Barcelona. Since 2009, she has been researching the relationship between the jaw, the nervous system, and the body's energetic field.
            </p>
          </div>
          
          <div className="clear-both"></div>
        </div>
      </div>
      </div>
    </div>
  );
}