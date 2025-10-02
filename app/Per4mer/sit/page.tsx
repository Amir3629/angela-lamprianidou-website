import MediaGallerySeparated from "../../../components/MediaGallerySeparated";

export default function SitPage() {
  const sitMedia = [
    {
      src: "https://vimeo.com/29003975",
      alt: "Sit performance video 1",
      type: "video" as const,
      title: "Sit Performance Video 1"
    },
    {
      src: "https://vimeo.com/156945479",
      alt: "Sit performance video 2",
      type: "video" as const,
      title: "Sit Performance Video 2"
    },
    {
      src: "https://lamprianidou.com/Per4mer/sit/sit01.jpg",
      alt: "Sit performance 1",
      type: "image" as const,
      title: "Sit Performance"
    },
    {
      src: "https://lamprianidou.com/Per4mer/sit/sit02.jpg",
      alt: "Sit performance 2",
      type: "image" as const,
      title: "Sit Performance"
    },
    {
      src: "https://lamprianidou.com/Per4mer/sit/sit03.jpg",
      alt: "Sit performance 3",
      type: "image" as const,
      title: "Sit Performance"
    },
    {
      src: "https://lamprianidou.com/Per4mer/sit/sit04.jpg",
      alt: "Sit performance 4",
      type: "image" as const,
      title: "Sit Performance"
    }
  ];

  const description = `Sit

How much time we spend 
sitting around, 
in between, 
near, 
over, 
alone. 

You also sit now, 
don't you?`;

  const additionalInfo = `Production: 2006 

Choreography-Direction: A.Lamprianidou 

Dancers: A.Lamprianidou, Julia Koch/Jana Wranova 

Music: Motörhead 

Technical Details: 

Lights: 4 side and floor spots 
Stage: min 20x20ft 
Misc: CD player 
Duration: 11 min 

performed 2009 at mercat de les flors, 
teatre estudi, les cort Barcelona 
and 2007 at Pfalzbaum Theater/Ludwigshaven`;

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white website-font page-bg-overlay font-variation-2 media-screen-largest video-screen-huge" style={{
      backgroundImage: `url('https://lamprianidou.com/Per4mer/sit/sit01.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <MediaGallerySeparated
        mediaItems={sitMedia}
        title="sit"
        description={description}
        additionalInfo={additionalInfo}
        photographer="Dimitris Pikors"
      />
    </div>
  );
}