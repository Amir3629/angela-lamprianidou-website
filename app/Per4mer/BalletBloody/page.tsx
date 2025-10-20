'use client';

import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function BalletBloodyPage() {
  const balletBloodyMedia = [
    {
      src: "/IMG_2660.jgp",
      alt: "Ballet for bloody beginners",
      type: "image" as const,
      title: "Ballet for bloody beginners"
    },
    {
      src: "/Ballett .jgp.png",
      alt: "Ballet for bloody beginners",
      type: "image" as const,
      title: "Ballet for bloody beginners"
    }
  ];

  const description = `Ballett for bloody beginners is a participatory dance performance.
Everyone can be guided to take a position, show posture and be touched 
gently or delicately.
A choreographic experience that invites you to experience ballet with 
its strict positions differently.
We place special emphasis on the correct arm positions.
We rehearse until the coordination work between arm, head and foot work 
has been realised.
Excellent execution is rewarded or punished through various gestures.`;

  const additionalInfo = `In the light of ballet, we tell a story together, which is also allowed 
to be fun.
Special features of this experience: I am allowed to touch you, 
punish you, encourage you and be strict, if you don't want that, 
you are not allowed in the ballet.
Concept Performance: Angela Lamprianidou
Integrative Performance "the Public is invited to take part in this class"

Premiere at xplore 2023 https://xplore-berlin.de/angela-lamprianidou-2/
Production: Xplore 2023

Voices of the Public:
"It was the best performance in years"
"What a great approach to demonstrate hierarchy concepts"
"When can we participate again"
Ballet for bloody beginners`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      <MediaGallerySeparated
        mediaItems={balletBloodyMedia}
        title="Ballet for bloody beginners"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by Xplore 2023"
        imageSize="xlarge"
      />
    </div>
  );
}