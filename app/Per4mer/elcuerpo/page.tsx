'use client';

import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function ElCuerpoPage() {
  const elcuerpoMedia = [
    {
      src: "/el_cuerpo_del_otro_1.jpg",
      alt: "El cuerpo del otro performance 1",
      type: "image" as const,
      title: "El cuerpo del otro"
    },
    {
      src: "/el_cuerpo_del_otro_2.jpg",
      alt: "El cuerpo del otro performance 2",
      type: "image" as const,
      title: "El cuerpo del otro"
    },
    {
      src: "/el_cuerpo_del_otro_3.jpg",
      alt: "El cuerpo del otro performance 3",
      type: "image" as const,
      title: "El cuerpo del otro"
    },
    {
      src: "https://vimeo.com/manage/videos/1121775817",
      alt: "El cuerpo del otro Video",
      type: "video" as const,
      title: "El cuerpo del otro Video"
    }
  ];

  const description = `El cuerpo de otro refers to the sensuality and 
usage of one's own body and that of the other one. 

A puritan and effective escenography, in which different 
reactions of the body are described, will allow you as 
spectators, create your own stories starting 
with thoughts about your own bodies. 
`;

  const additionalInfo = `Her studies of dentistry helped her this time to put us into a world at the same time real and fantastic.
A theory is created that the teeth itself is a body.
Its characteristics are comparable with our own physic and like the maxilla fits into the mandibula, one body fits into the other one.

A performance that certainly doesn't let you go home without you having touched a part of your body, and hopefully you will have someone to practice with.

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

performed 2006/07/08 in Barcelona`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      
      {/* Title */}
<MediaGallerySeparated
        mediaItems={elcuerpoMedia}
        title="El cuerpo del otro"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by Gerard Cabarrocas"
        imageSize="xlarge"
      />
    </div>
  );
}