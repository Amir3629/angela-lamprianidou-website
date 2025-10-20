import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function SitPage() {
  const sitMedia = [
    {
      src: "/sit-1.jpg",
      alt: "Sit performance 1",
      type: "image" as const,
      title: "Sit Performance"
    },
    {
      src: "/sit-2.jpg",
      alt: "Sit performance 2",
      type: "image" as const,
      title: "Sit Performance"
    },
    {
      src: "/sit-3.jpg",
      alt: "Sit performance 3",
      type: "image" as const,
      title: "Sit Performance"
    },
    {
      src: "/sit-4.jpg",
      alt: "Sit performance 4",
      type: "image" as const,
      title: "Sit Performance"
    }
  ];

  const description = `Sit is a choreographic exploration of 
positioning and posture in performance. 
The work investigates the relationship between 
body and space, creating dynamic interactions 
between performers and their environment.`;

  const additionalInfo = `Choreography: Angela Lamprianidou
Performance: Angela Lamprianidou
Year: 2014

This work represents an investigation of 
positioning and posture as expressive 
elements in contemporary dance performance.`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      
      <MediaGallerySeparated
        mediaItems={sitMedia}
        title="Sit"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by LaRaitz"
        imageSize="xlarge"
      />
    </div>
  );
}
