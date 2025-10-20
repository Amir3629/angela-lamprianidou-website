import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";
export default function ExpansionAndExplosionPage() {
  const expansionMedia = [
    {
      src: "/Angela-WS-expansion.jpg",
      alt: "Workshop Expansion and Explosion by Angela Lamprianidou",
      type: "image" as const,
      title: "Workshop Expansion and Explosion"
    }
  ];

  const description = `Expansion and Explosion

We expand? Where do we expand, which spaces 
and spatial possibilities do we have?
How is the connection between the inner and outer space?
Voice is meeting movement - movement is meeting you.
The connection between the object and the subject?
A melange of somatic sensing, choreography and 
pranayama will accompany this workshop.

Did you ever have thought and felt though, in, in between, 
over and so on to the themes you want to invite in you´re life? 
I designed a  workshop where there is space to do so.`;

  const additionalInfo = `PDF: /Workshop Expansion and Explotion by Angela Lamprianidou.pdf
More information: www.you-are-the-point.de`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1">
      <MediaGallerySeparated
        mediaItems={expansionMedia}
        title="Workshop Expansion and Explosion"
        description={description}
        additionalInfo={additionalInfo}
      />
    </div>
  );
}