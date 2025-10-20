import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";
export default function ShortcutsPage() {
  const shortcutsMedia = [
    {
      src: "/shortcuts_1.png",
      alt: "Shortcuts performance",
      type: "image" as const,
      title: "Shortcuts"
    }
  ];

  const description = `Shortcuts

Waiting for the future makes us remember the past, we remember waiting for the future. (B.Pascal)

From this point of view the artist asks herself, where are the lived moments, the moments that constitute the past. Our memories are our lived moments, even though the happiness based on Pascal doesn't exist, they are those moments that allow us to explore the material happiness of the flesh, even though they only last 3 seconds.`;

  const additionalInfo = `Parting from this phrase that the present lasts 3 seconds, Angela Lamprianidou puts together the different short cut sequences full of memories and experiments of the present in the particular reflexion of Being Here and Now.

The dancer starts with a pair of showings in form of a literary voyage. An insect lands from the nowhere and forms from the background a couple of figures alluding to the Silent movies in an immediate present, moving away from what a taxidermist could have of the view of the past.

Production: Work in progress
Choreography& Dance: A.Lamprianidou
Lights: Ignasi Llorens
Music: Paul Rose (institut fatima)

performed 5th November 2008 at Casa Elizalde Barcelona and 2006 at Schwankhalle/Bremen

More information:
<a href="http://www.casaelizalde.com/index.php?name=News&file=article&sid=448" target="_blank" rel="noopener noreferrer" className="text-green-600  underline">casaelizalde.com</a>`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1">
      <MediaGallerySeparated
        mediaItems={shortcutsMedia}
        title="Shortcuts"
        description={description}
        additionalInfo={additionalInfo}
      />
    </div>
  );
}