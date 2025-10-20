'use client';

import MediaGallerySeparated from "../../components/MediaGallerySeparated";
import Header from "../../components/Header";

export default function PurePage() {
  const pureMedia = [
    {
      src: "/pure2.jpg",
      alt: "Pure",
      type: "image" as const,
      title: "Pure"
    },
    {
      src: "/purelove.jpg",
      alt: "Essence",
      type: "image" as const,
      title: "Essence"
    },
    {
      src: "/purebegengnung.jpg",
      alt: "Authenticity",
      type: "image" as const,
      title: "Authenticity"
    },
    {
      src: "/pure©mirjamdumont.jpg",
      alt: "Pure Movement",
      type: "image" as const,
      title: "Pure Movement"
    }
  ];

  const description = `pure is a choreographic experience centered on human contact, vulnerability, and the raw essence of connection. Stripped of spectacle, it focuses on the profound simplicity of looking into another's eyes — a pure, unmediated encounter between individuals.

Created in 2017 for the Let Me In Festival, pure was performed at the Goethe-Institut in both Berlin and Madrid. The work invites audiences to engage deeply with presence, empathy, and the fragile yet powerful humanity that arises in moments of genuine eye contact.`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      <MediaGallerySeparated
        mediaItems={pureMedia}
        title="Pure"
        description={description}
        photographer="© Photos by Angela Lamprianidou"
        imageSize="xlarge"
      />
    </div>
  );
}