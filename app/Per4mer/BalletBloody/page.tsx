import MediaGallerySeparated from "../../../components/MediaGallerySeparated";

export default function BalletBloodyPage() {
  const balletMedia = [
    {
      src: "https://vimeo.com/1121775817",
      alt: "Ballet for bloody beginners video",
      type: "video" as const,
      title: "Ballet for bloody beginners"
    },
    {
      src: "https://lamprianidou.com/Per4mer/BalletBloody/Ballet_for_bloody_beginners.jpg",
      alt: "Ballet for bloody beginners",
      type: "image" as const,
      title: "Ballet for bloody beginners"
    },
    {
      src: "/ballet-bloody-beginners.png",
      alt: "Ballet for bloody beginners",
      type: "image" as const,
      title: "Ballet for bloody beginners"
    },
    {
      src: "/chr-exampericne-.jpeg",
      alt: "Choreographic experience",
      type: "image" as const,
      title: "Ballet for bloody beginners"
    },
    {
      src: "/chr-graph-exmpercien.jpeg",
      alt: "Choreographic experience",
      type: "image" as const,
      title: "Ballet for bloody beginners"
    },
    {
      src: "/chrp-expericne.jpeg",
      alt: "Choreographic experience",
      type: "image" as const,
      title: "Ballet for bloody beginners"
    }
  ];

  const description = `Ballet for bloody beginners

Ballet for bloody beginners is a participatory dance performance.
Everyone can be guided to take a position, show posture and be touched 
gently or delicately.
A choreographic experience that invites you to experience ballet with 
its strict positions differently.
We place special emphasis on the correct arm positions.
We rehearse until the coordination work between arm, head and foot work 
has been realised.
Excellent execution is rewarded or punished through various gestures. 
In the light of ballet, we tell a story together, which is also allowed 
to be fun.
Special features of this experience: I am allowed to touch you, 
punish you, encourage you and be strict, if you don't want that, 
you are not allowed in the ballet.`;

  const additionalInfo = `Concept Performance: Angela Lamprianidou 
Integrative Performance "the Public is invited to take part in this class"

Premiere at xplore 2023  https://xplore-berlin.de/angela-lamprianidou-2/ 
Production: Xplore 2023

Voices of the Public:
"It was the best performance in years"
"What a great approach to demonstrate hierarchy concepts"
"When can we participate again"`;

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white website-font page-bg-overlay page-bg-medium-overlay font-variation-1 media-screen-small" style={{
      backgroundImage: `url('/chr-exampericne-.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
        <MediaGallerySeparated
          mediaItems={balletMedia}
          title="Ballet for bloody beginners"
          description={description}
          additionalInfo={additionalInfo}
        />
    </div>
  );
}