import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function SitPage() {
  const sitMedia = [
    {
      src: "https://vimeo.com/29003975",
      alt: "Sit Video",
      type: "video" as const,
      title: "Sit Video"
    },
    {
      src: "/sitz-1.jpeg",
      alt: "SITz performance 1",
      type: "image" as const,
      title: "SITz Performance"
    },
    {
      src: "/sitz-2.jpeg",
      alt: "SITz performance 2",
      type: "image" as const,
      title: "SITz Performance"
    },
    {
      src: "/sitz-3.jpeg",
      alt: "SITz performance 3",
      type: "image" as const,
      title: "SITz Performance"
    },
    {
      src: "/sitz-4.jpeg",
      alt: "SITz performance 4",
      type: "image" as const,
      title: "SITz Performance"
    }
  ];

  const description = `SITz is a choreographic exploration of 
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
        title="SITz"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by LaRaitz"
        imageSize="xlarge"
      />
    </div>
  );
}