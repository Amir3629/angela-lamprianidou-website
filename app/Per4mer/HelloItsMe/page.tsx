'use client';

import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function HelloItsMePage() {
  const helloItsMeMedia = [
    {
      src: "/hello_its_me_1.jpg",
      alt: "Hello, It's Me",
      type: "image" as const,
      title: "Hello, It's Me"
    },
    {
      src: "/hello_its_me_2.jpg",
      alt: "Ta panta rhei",
      type: "image" as const,
      title: "Ta panta rhei"
    },
    {
      src: "/hello_its_me_3.jpg",
      alt: "Cross-generational Ensemble",
      type: "image" as const,
      title: "Cross-generational Ensemble"
    },
    {
      src: "/hello_its_me_4.jpg",
      alt: "Senior Perspectives",
      type: "image" as const,
      title: "Senior Perspectives"
    },
    {
      src: "/IMG_3302.mov",
      alt: "Hello It's Me Video 1",
      type: "video" as const,
      title: "Hello It's Me Video 1"
    },
    {
      src: "/IMG_3156.mov",
      alt: "Hello It's Me Video 2",
      type: "video" as const,
      title: "Hello It's Me Video 2"
    }
  ];

  const description = `"Hello, It's Me" (ta panta rhei) explores the question of how seniors are perceived in our society. In a cross-generational ensemble, people over the age of 70 collaborate to artistically express their experiences and emotions.
Under the direction of Angela Lamprianidou, a piece is created that presents the older body as an equally valuable and important perspective in dance and performing arts. It challenges society to make space for older individuals, to listen to their voices, and to acknowledge their presence.
The piece invites the audience to overcome generational boundaries and think together about an inclusive future where everyone
experiences participation and
respect.
with : Dorothee Unkelbach, Ingrid Türk, Brigitte Groß, Genoveva Kellnberger.
Unfornatly 2 died so i have to digest and find a way to primier it.
Subventioned by the Dezentrale für Kulturelle Arbeit`;

  const additionalInfo = ``;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      <MediaGallerySeparated
        mediaItems={helloItsMeMedia}
        title="Hello, It's Me (ta panta rhei)"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by Dezentrale für Kulturelle Arbeit"
        imageSize="xlarge"
      />
    </div>
  );
}