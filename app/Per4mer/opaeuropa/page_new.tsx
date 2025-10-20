import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function OpaEuropaPage() {
  const opaeuropaMedia = [
    {
      src: "/opaeuropa-1.jpg",
      alt: "Opa Europa performance 1",
      type: "image" as const,
      title: "Opa Europa Performance"
    },
    {
      src: "/opaeuropa-2.jpg",
      alt: "Opa Europa performance 2",
      type: "image" as const,
      title: "Opa Europa Performance"
    },
    {
      src: "/opaeuropa-3.jpg",
      alt: "Opa Europa performance 3",
      type: "image" as const,
      title: "Opa Europa Performance"
    },
    {
      src: "/opaeuropa-4.jpg",
      alt: "Opa Europa performance 4",
      type: "image" as const,
      title: "Opa Europa Performance"
    }
  ];

  const description = `Opa Europa is a choreographic exploration of 
European identity and cultural heritage through 
contemporary dance. The work examines the 
complex relationships between tradition and 
modernity in European society.`;

  const additionalInfo = `Choreography: Angela Lamprianidou
Performance: Angela Lamprianidou
Year: 2012

This work represents an investigation of European 
cultural identity through movement and performance, 
exploring themes of heritage, tradition, and 
contemporary European experience.`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      
      <MediaGallerySeparated
        mediaItems={opaeuropaMedia}
        title="Opa Europa"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by LaRaitz"
        imageSize="xlarge"
      />
    </div>
  );
}
