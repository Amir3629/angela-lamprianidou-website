'use client';

import MediaGallerySeparated from "../../components/MediaGallerySeparated";
import Header from "../../components/Header";

export default function HomemotionPage() {
  const homemotionMedia = [
    {
      src: "https://www.youtube.com/embed/38m_gZ_jCMM?start=2",
      alt: "Homεmotion video",
      type: "video" as const,
      title: "Homεmotion Video"
    },
    {
      src: "https://lamprianidou.com/homemotion/homemo/HomemotionEIngen.jpg",
      alt: "Homεmotion - Main space",
      type: "image" as const,
      title: "Homεmotion Artist Residency"
    },
    {
      src: "https://lamprianidou.com/homemotion/homemo/Bedroom2.jpg",
      alt: "Homεmotion Bedroom",
      type: "image" as const,
      title: "Homεmotion Artist Residency"
    },
    {
      src: "https://lamprianidou.com/homemotion/homemo/workspace.jpg",
      alt: "Homεmotion Workspace",
      type: "image" as const,
      title: "Homεmotion Artist Residency"
    }
  ];

  const description = `This is a place to expand and create new visions -

Hello dear creative people,
I rent out my beautiful 100 m2 art space flat with a studio to be creative, for any kind of artistic disciplines like filmmaking, writing, movers practises or any kind of consciousness work.

The flat has a very minimalist approach.
It has two sleeping rooms with high-quality futons and tatamis (Japanese mattress), a daylight-bathroom with bathtub, a fully equipped kitchen and artworks of photographers and painters with whom I share common respect.
`;

  const additionalInfo = `The place is also full of original details from the period (which period? Neoclassical), like wooden and terrazzo floors, cupboards and doors; the very high ceilings ensure a great room climate.
A balcony allows a view to a diverse and growing neighbourhood, beautiful old buildings and once a week there is the local market for regional products right in front of the door. A refurbished space- and still holding the fascination of 1930 - is waiting for you to be inspired. I invite people who want to expand their thoughts into an authentic space. I will explain to you all the details you have to know, you can ask me anything. Please be respectful towards the neighbours and enjoy your stay. The flat is located 4 minutes walking distance from Agios Nicolaos metro station (green line) and six minutes walk from Attika station (red line). You are also only 3 stations away from Monastiraki (Athens Centre). The area is something like Neuköln in Berlin, very upcoming but still authentic. Make a step into fantasy and exploration.`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      <MediaGallerySeparated
        mediaItems={homemotionMedia}
        title={
          <>
            Hom<span className="text-red-600" style={{ color: '#ff0000 !important', fontWeight: 'bold' }}>ε</span>motion
          </>
        }
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by Angela Lamprianidou"
        imageSize="xlarge"
      />
    </div>
  );
}