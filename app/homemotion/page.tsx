import MediaGallerySeparated from "../../components/MediaGallerySeparated";

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
    },
    {
      src: "https://lamprianidou.com/homemotion/homemo/livingroom2.jpg",
      alt: "Homεmotion Living Room",
      type: "image" as const,
      title: "Homεmotion Artist Residency"
    },
    {
      src: "https://lamprianidou.com/homemotion/homemo/Floor.jpg",
      alt: "Homεmotion Floor",
      type: "image" as const,
      title: "Homεmotion Artist Residency"
    }
  ];

  const description = `Homεmotion
a place to expand and create new visions -



Hello dear creative people,
I rent out my beautiful 100 m2 art space flat with a studio to be creative, for any kind of artistic disciplines like filmmaking, writing, movers practises or any kind of consciousness work.
The flat has a very minimalist approach.
It has two sleeping rooms with high-quality futons and tatamis (Japanese mattress), a daylight-bathroom with bathtub, a fully equipped kitchen and artworks of photographers and painters with whom I share common respect.
The place is also full of original details from the period (which period? Neoclassical), like wooden and terrazzo floors, cupboards and doors; the very high ceilings ensure a great room climate.
A balcony allows a view to a diverse and growing neighbourhood, beautiful old buildings and once a week there is the local market for regional products right in front of the door.
A refurbished space- and still holding the fascination of 1930 - is waiting for you to be inspired.
I invite people who want to expand their thoughts into an authentic space.
I will explain to you all the details you have to know, you can ask me anything. Please be respectful towards the neighbours and enjoy your stay.
The flat is located 4 minutes walking distance from Agios Nicolaos metro station (green line) and six minutes walk from Attika station (red line).
You are also only 3 stations away from Monastiraki (Athens Centre).
The area is something like Neuköln in Berlin, very upcoming but still authentic. Make a step into fantasy and exploration.
I am a choreographer and an energy shifter and I am very happy to offer you a special experience in the city of Athens!
Welcome!`;

  const additionalInfo = `Brief description of organisation
Brief description of organisation
It is a project of multidisciplinary artist Angela Lamprianidou, choreographer, producer, coach and energy shifter. 

 The artistic director Angela Lamprianidou has several years of experience in performing arts, physical theatre and production. Brief description of residency program
Art residency: A place to expand and create new visions.
Located in the centre of Athens, yet a still raw and to be explored neighbourhood.
It includes all kinds of markets and cafes, a fully functioning urban infrastructure.
The Street Michail Voda used to be the place where all the artists lived and the aristocracy was thinking.The street establishes a flow between north and south Athens and connects the city like a channel.
The 100 m2 flat was built in the 30´s and holds all the original features, a true journey in time.




Vision:
The essential interaction is to be in an authentic environment of the choreographer who has build for you a platform to expand your own Gesamtkunstwerk. 
The first sleeping room which also interacts as a writers room is named Apollon.
The Z(s)econd room is an extra place to host a guest or to disappear from time to time, to be pleazzzzed....etc....
Ether, the upstairs and downstairs around the bathroom and the loft above is there in case you want to explicitly get in touch with your own upstairs and downstairs intuition:)!
The kitchen aka Chaos, where everything originates and concentrates and things cook up. Only a genius controls the Chaos.

The working space Eros indicates the motor of all creation.
Poseidon, the hallway flows along. It indicates direction and channels. Be water my friend!
The studio space Eros gives you the possibility to expand upon all your perceptions and your emotional motor towards what you have absorbed in the flat, downtown, above, instead and why not.

 

Location : Greece Agios Nikolaos Green line, red Line Attiki

Adress: Michel Voda 189, 10446 Athen..



art places to visit in athen

https://www.fabricaathens.gr/home-en/

and http://boozecooperativa.com



"Angela Lamprianidou's HomEmotion Artist Residency in Athens, Greece 
 is a dynamic space-time which encompasses opportunities for passionate play, 
 restorative rest, and miraculous inspiration. My experience as a resident 
 in the summer of 2021 was one of welcome into a portal curated to meet 
 and embrace me exactly where I was. 
 
 Angela introduced me to many warm and wonderful people and places in Athens 
 when I arrived. Amongst them, I met the members of Fabrica Athens, the theater 
 in collaboration with the residency, and this community became like family 
 to me. Angela was attentive and caring throughout my time at HomEmotion, 
 checking in often about my experience of the space and my creative process. 
 The tranquility of HomEmotion meant I could hear myself clearly, 
 and that my voice had a chance to change and grow during my stay.
 
 I enjoyed the beauty and comfort of the home as a refuge 
 from fast-paced Athens. Throughout the months, I came to know 
 the bustling surroundings of the apartment as an environment 
 of spontaneity and heartfelt interaction. When I first arrived 
 at HomEmotion, I was transitioning out of a rather claustrophobic 
 time in my life. HomEmotion was first a site of healing,  and when 
 I began to feel settled into daily rituals, the residency offered 
 great structure for my artistic experimentation. 
 
 I leave the residency now with an experimental, theatrical, 
 poetic video piece set in the kitchen, no less. Angela's 
 intention of "You Are The Point" comes through at HomEmotion–– 
 The residency is a supportive and flexible space that encourages 
 you to create exactly what is right for you!"
 
 Tal Yuval Mor, Written in October, 2021`;

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white website-font page-bg-overlay page-bg-light-overlay font-variation-3 media-screen-xxl" style={{
      backgroundImage: `url('https://lamprianidou.com/homemotion/homemo/HomemotionEIngen.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <MediaGallerySeparated
        mediaItems={homemotionMedia}
        title={
          <span>
            Hom<span className="text-3xl font-normal text-red-500">ε</span>motion
          </span>
        }
        description={description}
        additionalInfo={additionalInfo}
        photographer="Christoforos Doulgeris"
      />
    </div>
  );
}