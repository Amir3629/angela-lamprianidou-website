import MediaGallerySeparated from "../../../components/MediaGallerySeparated";

export default function TimePage() {
  const timeMedia = [
    {
      src: "/time_1.jpg",
      alt: "Time performance",
      type: "image" as const,
      title: "Time"
    },
    {
      src: "/time_2.jpg",
      alt: "Time performance", 
      type: "image" as const,
      title: "Time"
    },
    {
      src: "/time_3.jpg",
      alt: "Time performance",
      type: "image" as const,
      title: "Time"
    },
    {
      src: "/time_5.jpg",
      alt: "Time performance",
      type: "image" as const,
      title: "Time"
    }
  ];

  const description = `Time

An old woman is prisoner of her past. Released by her fears, lets her free, so the story begins, counting down to the 20's.

Time is inspired into the short life of the dancer Anita Berber (1899-1928), who acted during the 20's decade. In correspondence, the choreography of Time is consisting into the mix of the expressionist dance, with improvisation and contemporary elements. Central theme are the 20's, in which this style created and reached its best period.

The intention is to incorporate the spirit and atmosphere of the 20's, a very intensive decade with lots of changes and revolutions, into the aesthetic of our.`;

  const additionalInfo = `Production: 2002-2003
Direction: Marion Hassler, A.Lamprianidou
Choreography: Angela Lamprianidou
Dancer: A.Lamprianidou
Scenics: Giorgos Nouvakis
Wardrobe: Natalie Hoffmann, A.Lamprianidou
Light&Sound: Camelo Guino, Paul Rose
Music: John Cage, Cirque de Solei, Josephine Baker, John Cale

Technical Details:
Light: 
Stage: min 20x25 ft.indoor performance, possibility to hang scenic from the ceiling
Misc: CDplayer, scenics (<a href="https://lamprianidou.com/Per4mer/time/time_s.html" target="_blank" rel="noopener noreferrer" className="text-green-600  underline">click here</a>)
Duration: 55 min

performed 2002/03 in Barcelona and at Arena Festival/Erlangen`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1">
      <MediaGallerySeparated
        mediaItems={timeMedia}
        title="Time"
        description={description}
        additionalInfo={additionalInfo}
      />
    </div>
  );
}