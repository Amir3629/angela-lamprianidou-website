'use client';

import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function ElCuerpoDelOtroPage() {
  const elCuerpoMedia = [
    {
      src: "/el_cuerpo_1.jpg",
      alt: "El cuerpo del otro",
      type: "image" as const,
      title: "El cuerpo del otro"
    },
    {
      src: "/el_cuerpo_2.jpg", 
      alt: "The other's body",
      type: "image" as const,
      title: "The other's body"
    },
    {
      src: "/el_cuerpo_3.jpg",
      alt: "Body Sensuality",
      type: "image" as const, 
      title: "Body Sensuality"
    },
    {
      src: "/el_cuerpo_4.jpg",
      alt: "Dentistry Studies",
      type: "image" as const,
      title: "Dentistry Studies"
    }
  ];

  const description = `El cuerpo del otro (the other's body) refers to the sensuality and usage of one's own body and that of the other one. 

A puritan and effective escenography, in which different reactions of the body are described, will allow you as spectators, create your own stories starting with thoughts about your own bodies. 

Her studies of dentistry helped her this time to put us into a world at the same time real and fantastic. A theory is created that the teeth itself is a body. Its characteristics are comparable with our own physic and like the maxilla fits into the mandibula, one body fits into the other one.`;

  const additionalInfo = `A performance that certainly doesn't let you go home without you having touched a part of your body, and hopefully you will have someone to practice with. 

Video: https://vimeo.com/1121775817

Production: 2006-2007 
Direction: Angela Lamprianidou 
Choreography: A.Lamprianidou 
Dancers: Julia Koch, Gerard Cabarrocas
Text: A.Lamprianidou 
Music: Paul Rose 
Paintings: G.Cabarrocas 

Technical Details: 
Lights: 8 Pc, 3 profiler 
Stage: min 20x25ft, Walls to can write on 
Misc: CD-Player 
Duration: 65 min 

Performed 2006/07/08 in Barcelona`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      <MediaGallerySeparated
        mediaItems={elCuerpoMedia}
        title="El cuerpo del otro (the other's body)"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by Barcelona Production"
        imageSize="xlarge"
      />
    </div>
  );
}