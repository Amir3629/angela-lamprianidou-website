import MediaGallerySeparated from "../../../components/MediaGallerySeparated";

export default function OpaEuropaPage() {
  const opaEuropaMedia = [
    {
      src: "https://vimeo.com/156945895",
      alt: "Opa Europa performance video 1",
      type: "video" as const,
      title: "Opa Europa Performance Video 1"
    },
    {
      src: "https://vimeo.com/21881790",
      alt: "Opa Europa performance video 2",
      type: "video" as const,
      title: "Opa Europa Performance Video 2"
    },
    {
      src: "https://vimeo.com/162344737",
      alt: "Opa Europa performance video 3",
      type: "video" as const,
      title: "Opa Europa Performance Video 3"
    },
    {
      src: "https://vimeo.com/158752221",
      alt: "Opa Europa performance video 4",
      type: "video" as const,
      title: "Opa Europa Performance Video 4"
    },
    {
      src: "https://lamprianidou.com/Per4mer/OpaEuropa/opaeuropa3.jpg",
      alt: "Opa Europa performance 1",
      type: "image" as const,
      title: "Opa Europa"
    },
    {
      src: "https://lamprianidou.com/Per4mer/OpaEuropa/opaeuropa4.jpg",
      alt: "Opa Europa performance 2",
      type: "image" as const,
      title: "Opa Europa"
    },
    {
      src: "/Erup.jpeg",
      alt: "Opa Europa",
      type: "image" as const,
      title: "Opa Europa"
    },
    {
      src: "/Erup3.jpeg",
      alt: "Opa Europa",
      type: "image" as const,
      title: "Opa Europa"
    },
    {
      src: "/Opa-eru1.jpeg",
      alt: "Opa Europa",
      type: "image" as const,
      title: "Opa Europa"
    },
    {
      src: "/europa.jpeg",
      alt: "Opa Europa",
      type: "image" as const,
      title: "Opa Europa"
    },
    {
      src: "/opa-eroupa-show.jpg",
      alt: "Opa Europa show",
      type: "image" as const,
      title: "Opa Europa"
    },
    {
      src: "https://lamprianidou.com/Per4mer/OpaEuropa/opaeuropa5.jpg",
      alt: "Opa Europa performance 3",
      type: "image" as const,
      title: "Opa Europa"
    },
    {
      src: "https://lamprianidou.com/Per4mer/OpaEuropa/opaeuropa6.jpg",
      alt: "Opa Europa performance 4",
      type: "image" as const,
      title: "Opa Europa"
    },
    {
      src: "https://lamprianidou.com/Per4mer/OpaEuropa/opaeuropa7.jpg",
      alt: "Opa Europa performance 5",
      type: "image" as const,
      title: "Opa Europa"
    },
    {
      src: "https://lamprianidou.com/Per4mer/OpaEuropa/opaeuropa8.jpg",
      alt: "Opa Europa performance 6",
      type: "image" as const,
      title: "Opa Europa"
    }
  ];

  const description = `Opa Europa

Tanz tanz sonst sind wir verloren 

She is Hellas. Choreographer Angela Lamprianidou moves between her 
various identities (Spanish, German and Greek) and enters into different 
realities. Angela was born in Germany, her origins are Greek, and she has 
lived in Barcelona for the last 11 years. This combination of identities 
means she can flow between the three geographic and/or mental states. 

Using Greek mythology and traditional Greek dance, she establishes a 
dialogue between her biography and current politics. Us and the polis. 

"Zeus comes along and steals Europa. If only this could happen today!" 

"The interviews and encounters between audience, guests, Zeus and Europa 
 are a meal both light and indigestible, so please make sure that you don't 
 eat, fuck or shit before the show!" 

 Tanz, tanz oder wir sind verloren (dance, dance, or we are lost) - is 
 this all that we have left?`;

  const additionalInfo = `Choreography and Artistic Direction: Angela Lamprianidou 
Interpretation: Paqiro Lopèz, Eli Ruiz Fernandez Guest, Angela Lamprianidou 
Music: Dimitris Mitropanos, Melina Merkouri, Greek Music and Soul 
& voice en off: Julia Koch 
Lights: Andres Acebes 
Colaboradors: Antic Teatre Barcelona, Jakob Kremer prodution 2012 oktober 
 
Technical needs: 
stage min: variable, could be inside and outdoor performance, from 6x6 to 10x10, white linoleum 
sound: 1 lavalier and 2 handheld micros, 3.5mm-stereo-mini-jack for computer`;

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white website-font page-bg-overlay page-bg-bw font-variation-2 media-screen-medium" style={{
      backgroundImage: `url('/europa.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <MediaGallerySeparated
        mediaItems={opaEuropaMedia}
        title={
          <a
            href="https://lamprianidou.com/Per4mer/OpaEuropa/Opa%20Europa%20by%20Angela%20Lamprianidou.pdf"
            target="_blank"
            className="text-green-400 hover:text-green-300 underline"
          >
            Opa Europa
          </a>
        }
        description={description}
        additionalInfo={additionalInfo}
        photographer="antic teatre"
      />
    </div>
  );
}