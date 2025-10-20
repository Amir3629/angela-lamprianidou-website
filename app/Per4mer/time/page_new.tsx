import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function TimePage() {
  const timeMedia = [
    {
      src: "/time-1.jpg",
      alt: "Time performance 1",
      type: "image" as const,
      title: "Time Performance"
    },
    {
      src: "/time-2.jpg",
      alt: "Time performance 2",
      type: "image" as const,
      title: "Time Performance"
    },
    {
      src: "/time-3.jpg",
      alt: "Time performance 3",
      type: "image" as const,
      title: "Time Performance"
    },
    {
      src: "/time-4.jpg",
      alt: "Time performance 4",
      type: "image" as const,
      title: "Time Performance"
    }
  ];

  const description = `Time is a choreographic exploration of temporal 
dimensions in performance. The work investigates 
the relationship between movement and time, 
creating rhythmic patterns that explore the 
concept of duration and temporal experience.`;

  const additionalInfo = `Choreography: Angela Lamprianidou
Performance: Angela Lamprianidou
Year: 2011

This work represents an investigation of time 
as both a structural element and thematic 
content in contemporary dance performance.`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      
      <MediaGallerySeparated
        mediaItems={timeMedia}
        title="Time"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by LaRaitz"
        imageSize="xlarge"
      />
    </div>
  );
}
