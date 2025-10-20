import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";
export default function Shortcuts08Page() {
  const shortcutsMedia = [
    {
      src: "/shortcuts11.png",
      alt: "Shortcuts performance",
      type: "image" as const,
      title: "Shortcuts"
    }
  ];

  const description = `Waiting for the future makes us remember the past, we remember waiting for the future. (B.Pascal) From this point of view the artist asks herself, where are the lived moments, the moments that constitute the past. Our memories are our lived moments, even though the happiness based on Pascal doesn't exist, they are those moments that allow us to explore the material happiness of the flesh, even though they only last 3 seconds.

Parting from this phrase that the present lasts 3 seconds, Angela Lamprianidou puts together the different short cut sequences full of memories and experiments of the present in the particular reflexion of Being Here and Now.

The dancer starts with a pair of showings in form of a literary voyage.`;

  const additionalInfo = `Production: Work in progress
Choreography& Dance: A.Lamprianidou
Lights: Ignasi Llorens
Music: Paul Rose (institut fatima)
performed 5th November 2008 at Casa Elizalde Barcelona
and 2006 at Schwankhalle/Bremen`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />      <MediaGallerySeparated
        mediaItems={shortcutsMedia}
        title="Shortcuts"
        description={description}
        additionalInfo={additionalInfo}
      />
    </div>
  );
}