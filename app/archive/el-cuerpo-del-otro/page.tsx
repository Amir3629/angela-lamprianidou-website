import MediaGallery from "../../../components/MediaGallery";

export default function ElCuerpoDelOtroPage() {
  const elCuerpoMedia = [
    {
      src: "/elcuerpo_1.jpg",
      alt: "El cuerpo del otro performance",
      type: "image" as const,
      title: "El cuerpo del otro"
    },
    {
      src: "/elcuerpo_2.jpg", 
      alt: "El cuerpo del otro performance",
      type: "image" as const,
      title: "El cuerpo del otro"
    },
    {
      src: "/elcuerpo_3.jpg",
      alt: "El cuerpo del otro performance", 
      type: "image" as const,
      title: "El cuerpo del otro"
    }
  ];

  const description = `El cuerpo del otro (the other's body)

The new show of A.L. refers to the sensuality and usage of one's own body and that of the other one. A puritan and effective escenography, in which different reactions of the body are described, will allow you as spectators, create your own stories starting with thoughts about your own bodies.

Her studies of dentistry helped her this time to put us into a world at the same time real and fantastic. A theory is created that the teeth itself is a body. Its characteristics are comparable with our own physic and like the maxilla fits into the mandibula, one body fits into the other one.

A performance that certainly doesn't let you go home without you having touched a part of your body, and hopefully you will have someone to practice with.`;

  const additionalInfo = `Production: 2006-2007
Direction: Angela Lamprianidou
Choreography: A.Lamprianidou
Dancers: Julia Koch, Gerard Cabarrocas
Text: A.Lamprianidou
Music: Paul Rose
Paintings: G.Cabarrocas

Technical Details:
Lights: 8 Pc, 3 profiler
Stage: min 20x25ft, Walls to can write on
Misc: CD-Player
Duration: 65 min

performed 2006/07/08 in Barcelona`;

  return (
    <MediaGallery
      mediaItems={elCuerpoMedia}
      title="El cuerpo del otro"
      description={description}
      additionalInfo={additionalInfo}
    />
  );
}