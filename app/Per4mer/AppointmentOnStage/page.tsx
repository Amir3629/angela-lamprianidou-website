'use client';

import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function AppointmentOnStagePage() {
  const appointmentMedia = [
    {
      src: "https://vimeo.com/176374765",
      alt: "Appointment on Stage Video",
      type: "video" as const,
      title: "Appointment on Stage Video"
    },
    {
      src: "/01Appointment©MirjamDumont2016.jpg",
      alt: "Appointment on Stage",
      type: "image" as const,
      title: "Appointment on Stage"
    },
    {
      src: "/05Appointment©MirjamDumont2016 Kopie.jpeg",
      alt: "Choreographic Rendezvous",
      type: "image" as const,
      title: "Choreographic Rendezvous"
    },
    {
      src: "/07Appointment©MirjamDumont2016 Kopie.jpeg",
      alt: "Five Performers",
      type: "image" as const,
      title: "Five Performers"
    },
    {
      src: "/09appointment©MirjamDumont.jpg",
      alt: "Feeling-Thinking Unity",
      type: "image" as const,
      title: "Feeling-Thinking Unity"
    },
    {
      src: "https://vimeo.com/293207886",
      alt: "Appointment on Stage Video",
      type: "video" as const,
      title: "Appointment on Stage Video"
    }
  ];

  const description = `(I want to be the person I am - I am the person I want to be)

"Appointment on Stage" is a choreographic rendezvous with others 
and an encounter with oneself. Five performers of different generations 
and national backgrounds experience and acknowledge the body as a feeling-
thinking unity: „I trust you to be the dance, the man, the moi". 
This acceptance by the individual turns into a composition in which there is 
an interpretive dancing without kissing and a kissing without documentation. 

Do you understand?`;

  const additionalInfo = `Angela Lamprianidou creates an integral dance affair made of words and movement; an autonomous whole. 
It reveals a conversing of cultures in which language plays the leading and the supporting role.

The changing syntax that ensues in the piece raises, among others, 
the bold question „Am I the person who I want to be?" 
Do I want to be the person who I am?"


Appointment on stage had its Premiere 2016 at Ballhaus Ost in Berlin   www.ballhausost.de/appointment-on-stage-2`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography relative">
      <Header />
      <MediaGallerySeparated
        mediaItems={appointmentMedia}
        title="Appointment on stage"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by Mirjam Dumont"
        imageSize="xlarge"
      />
       <div className="fixed bottom-4 right-4 z-50">
         <a 
           href="https://www.goethe.de/en/index.html" 
           target="_blank" 
           rel="noopener noreferrer"
           className="block hover:opacity-100 transition-opacity duration-200"
         >
           <img 
             src="/image-removebg-preview-8.png" 
             alt="Goethe Institut Logo" 
             className="w-24 h-auto opacity-80 hover:opacity-100"
           />
         </a>
       </div>
    </div>
  );
}