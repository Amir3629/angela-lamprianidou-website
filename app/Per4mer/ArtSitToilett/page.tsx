'use client';

import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function ArtSitToilettPage() {
  const artSitMedia = [
    {
      src: "/art_sit_1.jpg",
      alt: "Installation Art S(h)IT",
      type: "image" as const,
      title: "Installation Art S(h)IT"
    },
    {
      src: "/art_sit_2.jpg", 
      alt: "Bathroom Installation",
      type: "image" as const,
      title: "Bathroom Installation"
    },
    {
      src: "/art_sit_3.jpg",
      alt: "Experimental Performance",
      type: "image" as const, 
      title: "Experimental Performance"
    },
    {
      src: "/art_sit_4.jpg",
      alt: "Arena Festival",
      type: "image" as const,
      title: "Arena Festival"
    }
  ];

  const description = `"Installation Art S(h)IT"
The first feeling of happiness is to shit! 
Generally on the 0 near the 0, you let things go.
To let things go is something very lovely.
Sometimes it hurts...
But at least you discover, it was the best flush vibration.
So art SIT became an experimental performance.
Art Sit can only be exhibited in adequately big bathrooms.`;

  const additionalInfo = `Direction: Angela Lamprianidou
Location: Gossen Hallen, Erlangen, @ Arena Festival 2000
Video: https://vimeo.com/1124725779

It was in the middle of 1999, as a group of artists came up to me and asked me if I would like to, as they knew my fragy style, to design the toilets of a big factory, during the ARENA dance&theatre festival.

The fabric was big, amazing, offering me totally the spirit and inspiration to say yes to this project.

We were nearly 20 different artists, musicians, painters, photographers, etc. So I started to design my part... a very intimate part, that everybody visits every day...

The result of art SIT, surprised me a lot.
At the beginning it was just a design for fantastic big bathrooms, but at the end it developed to an experimental performance, where the people who supposed to be the audience got to be performer at the same time.

Of course my spirit, a cassette recorder, the design and my music gave them a certain impulse, but I did not helping them by performing myself.

Performed 1999 at Arena Festival/Erlangen`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      <MediaGallerySeparated
        mediaItems={artSitMedia}
        title="Installation Art S(h)IT"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by Arena Festival"
        imageSize="xlarge"
      />
    </div>
  );
}