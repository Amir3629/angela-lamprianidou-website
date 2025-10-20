'use client';

import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function PiecePeacePage() {
  const piecePeaceMedia = [
    {
      src: "/Peace-piece.jpg",
      alt: "Piece#Peace",
      type: "image" as const,
      title: "Piece#Peace"
    }
  ];

const sponsorLogos = [
    {
      src: "/logo-1.png",
      alt: "Bundesregierung für Kultur und Medien",
      type: "image" as const,
      title: "Bundesregierung für Kultur und Medien",
      link: "https://kulturstaatsminister.de"
    },
    {
      src: "/logo-2.png",
      alt: "Dachverband Tanz Deutschland", 
      type: "image" as const,
      title: "Dachverband Tanz Deutschland",
      link: "https://www.dachverband-tanz.de/home"
    },
    {
      src: "/logo-3.png",
      alt: "NEUSTART KULTUR",
      type: "image" as const,
      title: "NEUSTART KULTUR",
      link: "https://neustartkultur.dthg.de"
    },
    {
      src: "/logo-4.png",
      alt: "DIS-TANZEN",
      type: "image" as const,
      title: "DIS-TANZEN",
      link: "https://www.dis-tanzen.de/home"
    }
  ];

  const description = `is research that goes in search of new peace rituals.
How can dance transform our present time into peace?
People should be encouraged to discover their own thoughts and feelings in dance and thus to find a 
peaceful coexistence, because dance has the power to bring us from thinking to feeling. Now is the 
time to develop new rituals that embody peace and to take those rituals out into the open.`;

  const additionalInfo = `2022 seems to be a turning point in several respects. The war in Ukraine and the effects it has on the 
world give food for thought.
The famous metaphor of the butterfly flapping wings generating repercussions on the other side of 
the world is proving to be more relevant than ever. So what to do in the face of impending upheaval? 
Dance as a catalyst to unleash feelings within us can help provide emotional support to a society that 
has experienced so much fear and panic for the last two years and is now facing other bitter 
challenges.

In Wim Wenders' film "The Sky over Berlin", an actor asks himself the question "Why isn't peace permanent?" This sentence is the engine of my research and inspired me to my project.
Isn't it our own thoughts and feelings that play a major role in our view of life? As human beings, have we lost access to our body, into the body, and ultimately to experience something through the body?
I am convinced that dance can create deep access to one's own feelings, transform emotions and have a strengthening effect in a shared experience.
The ritual I want to develop is a combination of emotions that acts as a body-mind mechanism and can be fun.
Funded by the Federal Commissioner of the Federal Government for Culture and Media (BKM) in the program NEUSTART KULTUR, aid program DIS-TANZEN of the Dachverband Tanz Deutschland
Gefördert durch die Bundesbeauftragte der Bundesregierung für Kultur und Medien (BKM) im
Programm NEUSTART KULTUR, Hilfsprogramm DIS-TANZEN des Dachverband Tanz Deutschland`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      <MediaGallerySeparated
        mediaItems={piecePeaceMedia}
        title="Piece#Peace"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by Angela Lamprianidou"
        imageSize="xlarge"
      />
      
      {/* Sponsor Logos Section */}
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {sponsorLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <a
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    style={{ maxWidth: '120px' }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}