'use client';

import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function AlihopPage() {
  const alihopMedia = [
    {
      src: "/alihop_1.jpg",
      alt: "Alihop",
      type: "image" as const,
      title: "Alihop"
    },
    {
      src: "/alihop_2.jpg",
      alt: "Horse Riding",
      type: "image" as const,
      title: "Horse Riding"
    },
    {
      src: "/alihop_3.jpg",
      alt: "Dance Movements",
      type: "image" as const,
      title: "Dance Movements"
    },
    {
      src: "/alihop_4.jpg",
      alt: "Body Language",
      type: "image" as const,
      title: "Body Language"
    },
    {
      src: "https://vimeo.com/manage/videos/156945479",
      alt: "Alihop Video",
      type: "video" as const,
      title: "Alihop Video"
    }
  ];

  const description = `Alihop does not stem from a predetermined topic, 
but arose from the search for dance-related movements. 
Body language led to ideas for certain choreography moves. 
It might be surprising, then, that a piece that started with improvisation 
has ended up with horse riding as its main subject. 

Because dance is always about taming: 
dancers domesticate their bodies; 
choreographers tame dancers. 
And that is what we see in the most popular interpretations of dance, 
from the dance classes in the classic TV series Fame 
to the torturous choreography work in the recent Hollywood movie Black Swan. 
`;

  const additionalInfo = `For centuries the techniques of domestication have been inscribed into our bodies.
The animal - the horse - is the Other, the known Other, the tamed Other.

Bigger and stronger than man, it lets itself be brought down and tamed.

The noblest fighter is the knight - caballero in Spanish, Ritter in German
- a word that is used also for a man with good manners. The tamed tamer.
A figure we have known well throughout history,
from Genghis Khan to General Franco - a man who tried to make himself immortal by setting up thousands of statues of him riding a horse.
The horse as a metaphor has become part of our subconscious:
one of the classic examples in psychoanalysis is the case of little Hans, the boy who fears horses.
Freud interpreted this as the son's fear of his father in the struggle for the love of the mother.

We don't have space to go into other details here, for example the meaning of the whip, or the dominatrix in S&M practice, or the fact that George W Bush has never been seen on a horse.
We should simply take our seat in the theatre and observe the human body taking possession of space and each of us will find our own images or thoughts.

Alihop offers an original exploration of our centuries-old passage through movement - walking, riding, driving or flying.

premiere 2011 at the antic teatre barcelona

lights: Ignasi lorens
Music: Paul Rose, Schubert
Choreography and Performance: A. Lamprianidou duration: 30min`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      <MediaGallerySeparated
        mediaItems={alihopMedia}
        title="Alihop"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by Antic Teatre"
        imageSize="xlarge"
      />
    </div>
  );
}