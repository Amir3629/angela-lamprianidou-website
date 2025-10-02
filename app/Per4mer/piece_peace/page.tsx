import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Image from "next/image";

export default function PiecePeacePage() {
  const peaceMedia = [
    {
      src: "https://vimeo.com/904403735",
      alt: "Piece#Peace video",
      type: "video" as const,
      title: "Piece#Peace"
    },
    {
      src: "https://lamprianidou.com/Per4mer/piece_peace/AAA_1493%20(c)%20Brieuc%20Le%20Meur.jpg",
      alt: "Piece#Peace photo by Brieuc Le Meur",
      type: "image" as const,
      title: "Piece#Peace"
    }
  ];

  const description = `Piece#Peace

Piece#Peace is research that goes in search of new peace rituals.

How can dance transform our present time into peace?

People should be encouraged to discover their own thoughts and feelings in dance and thus to find a 
peaceful coexistence, because dance has the power to bring us from thinking to feeling. Now is the 
time to develop new rituals that embody peace and to take those rituals out into the open.


2022 seems to be a turning point in several respects. The war in Ukraine and the effects it has on the world give food for thought.

The famous metaphor of the butterfly flapping wings generating repercussions on the other side of 
the world is proving to be more relevant than ever. So what to do in the face of impending upheaval? 
Dance as a catalyst to unleash feelings within us can help provide emotional support to a society that 
has experienced so much fear and panic for the last two years and is now facing other bitter 
challenges.

In Wim Wenders' film "The Sky over Berlin", an actor asks himself the question "Why isn't peace 
permanent?" This sentence is the engine of my research and inspired me to my project.


Isn't it our own thoughts and feelings that play a major role in our view of life? As human beings, 
have we lost access to our body, into the body, and ultimately to experience something through the 
body?

I am convinced that dance can create deep access to one's own feelings, transform emotions and 
have a strengthening effect in a shared experience.

The ritual I want to develop is a combination of emotions that acts as a body-mind mechanism and 
can be fun.`;

  const additionalInfo = `Funded by the Federal Commissioner of the Federal Government for Culture and Media (BKM) in the 
program NEUSTART KULTUR, aid program DIS-TANZEN of the Dachverband Tanz Deutschland

Gefördert durch die Bundesbeauftragte der Bundesregierung für Kultur und Medien (BKM) im 
Programm NEUSTART KULTUR, Hilfsprogramm DIS-TANZEN des Dachverband Tanz Deutschland`;

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white website-font font-variation-2 page-bg-overlay page-bg-dark-overlay media-screen-medium" style={{
      backgroundImage: `url('https://lamprianidou.com/Per4mer/piece_peace/AAA_1493%20(c)%20Brieuc%20Le%20Meur.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
        <MediaGallerySeparated
          mediaItems={peaceMedia}
          title="Piece#Peace"
          description={description}
          additionalInfo={additionalInfo}
        />
      
      {/* Logo Images Section */}
      <div className="relative z-10 px-18 pb-10">
        <div className="max-w-4xl">
          <div className="flex justify-center items-center -mt-64">
            <Image
              src="/image.png"
              alt="Logo 1"
              width={240}
              height={100}
              className="object-contain h-[100px] mr-6"
            />
            <Image
              src="/image copy.png"
              alt="Logo 2"
              width={240}
              height={100}
              className="object-contain h-[100px] -mr-15"
            />
            <Image
              src="/image copy 2.png"
              alt="Logo 3"
              width={240}
              height={100}
              className="object-contain h-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
