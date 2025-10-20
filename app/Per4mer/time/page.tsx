'use client';

import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function TimePage() {
  const timeMedia = [
    {
      src: "https://www.youtube.com/watch?v=ZWSpSw8O5vc",
      alt: "Time Performance Video",
      type: "video" as const,
      title: "Time Performance Video"
    },
    {
      src: "/time_1.jpg",
      alt: "Time",
      type: "image" as const,
      title: "Time"
    },
    {
      src: "/time_2.jpg", 
      alt: "Anita Berber",
      type: "image" as const,
      title: "Anita Berber"
    },
    {
      src: "/time_3.jpg",
      alt: "1920s Expressionist Dance",
      type: "image" as const, 
      title: "1920s Expressionist Dance"
    },
    {
      src: "/time_4.jpg",
      alt: "Old Woman Prisoner",
      type: "image" as const,
      title: "Old Woman Prisoner"
    }
  ];

  const description = `An old woman is prisoner of her past. 
Released by her fears, lets her free, 
so the story begins, 
counting down to the 20's. 

Time is inspired into the short life 
of the dancer Anita Berber (1899-1928), 
who acted during the 20's decade. 
In correspondence, the choreography of 
Time is consisting into the mix of the 
expressionist dance, with improvisation 
and contemporary elements. Central theme 
are the 20's, in which this style 
created and reached its best period. 
The intention is to incorporate the 
spirit and atmosphere of the 20's, 
a very intensive decade with lots 
of changes and revolutions, 
into the aesthetic of our.`;

  const additionalInfo = (
    <>
      Production: 2002-2003 <br />
      <br />
      Choreography& Dance Angela Lamprianidou <br />
      <br />
      <br />
      Scenics: Giorgos Nouvakis <br />
      Wardrobe: Natalie Hoffmann, A.Lamprianidou <br />
      Light&Sound: Camelo Guino, Paul Rose <br />
      Music: John Cage, Cirque de Solei, <br />
      Josephine Baker, John Cale <br />
      <br />
      <br />
      Technical Details: <br />
      <br />
      Light: <br />
      Stage: min 20x25 ft.indoor performance, <br />
      possibility to hang scenic from the ceiling <br />
      Misc: CDplayer, <a href="/Per4mer/TimeScenics" target="_blank" rel="noopener noreferrer">scenics</a> <br />
      Duration: 55 min <br />
      <br />
      performed 2002/03 in Barcelona and at Arena Festival/Erlangen
    </>
  );

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      <MediaGallerySeparated
        mediaItems={timeMedia}
        title="Time"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by Barcelona Production"
        imageSize="xlarge"
      />
    </div>
  );
}