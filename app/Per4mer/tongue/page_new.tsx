import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function TonguePage() {
  const tongueMedia = [
    {
      src: "/tongue-1.jpg",
      alt: "Tongue performance 1",
      type: "image" as const,
      title: "Tongue Performance"
    },
    {
      src: "/tongue-2.jpg",
      alt: "Tongue performance 2",
      type: "image" as const,
      title: "Tongue Performance"
    },
    {
      src: "/tongue-3.jpg",
      alt: "Tongue performance 3",
      type: "image" as const,
      title: "Tongue Performance"
    },
    {
      src: "/tongue-4.jpg",
      alt: "Tongue performance 4",
      type: "image" as const,
      title: "Tongue Performance"
    }
  ];

  const description = `Tongue is a choreographic exploration of 
communication and expression through movement. 
The work investigates the relationship between 
body language and spoken language, creating 
dynamic interactions between performers.`;

  const additionalInfo = `Choreography: Angela Lamprianidou
Performance: Angela Lamprianidou
Year: 2013

This work represents an investigation of 
communication through movement and the 
expressive potential of the body in performance.`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      
      <MediaGallerySeparated
        mediaItems={tongueMedia}
        title="Tongue"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by LaRaitz"
        imageSize="xlarge"
      />
    </div>
  );
}
