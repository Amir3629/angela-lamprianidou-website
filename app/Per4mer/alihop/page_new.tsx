import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function AlihopPage() {
  const alihopMedia = [
    {
      src: "/alihop-1.jpg",
      alt: "Alihop performance 1",
      type: "image" as const,
      title: "Alihop Performance"
    },
    {
      src: "/alihop-2.jpg",
      alt: "Alihop performance 2",
      type: "image" as const,
      title: "Alihop Performance"
    },
    {
      src: "/alihop-3.jpg",
      alt: "Alihop performance 3",
      type: "image" as const,
      title: "Alihop Performance"
    },
    {
      src: "/alihop-4.jpg",
      alt: "Alihop performance 4",
      type: "image" as const,
      title: "Alihop Performance"
    }
  ];

  const description = `Alihop is a choreographic work that explores movement 
and rhythm through contemporary dance. The piece 
investigates the relationship between body and space, 
creating dynamic interactions between performers 
and their environment.`;

  const additionalInfo = `Choreography: Angela Lamprianidou
Performance: Angela Lamprianidou
Year: 2010

This work represents an exploration of contemporary 
dance techniques and the expressive potential of 
movement in performance art.`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      
      <MediaGallerySeparated
        mediaItems={alihopMedia}
        title="Alihop"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by LaRaitz"
        imageSize="xlarge"
      />
    </div>
  );
}
