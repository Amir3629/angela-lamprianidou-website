import MediaGallerySeparated from "../../components/MediaGallerySeparated";
import Header from "../../components/Header";
export default function FlirtInPage() {
  const flirtInMedia = [
    {
      src: "/5802454E-E612-49E6-A7FB-604B1C24DD62.jpg",
      alt: "Flirt In Workshop 1",
      type: "image" as const,
      title: "Flirt In"
    },
    {
      src: "/77DC06AF-B33F-432B-8BBC-BF1652D476B4.jpg",
      alt: "Flirt In Workshop 2",
      type: "image" as const,
      title: "Flirt In"
    }
  ];

  const description = `When was the last time you flirted?
Really?
With looks. With posture. With words that say nothing - and yet mean everything?

Flirt In is a playful, performative workshop, a laboratory for sensuality, communication and body language.
A space in which we explore together:
How do you flirt?
Do you flirt at all?
Do we flirt all the time - without realising it?
`;

  const additionalInfo = `We play - introduce ourselves.
We observe, we try things out.
We flirt non-verbally - standing, walking, with our back, with our hair.
We flirt with words - groping, teasing, quietly, loudly.
Vertically. Horizontally. Real. Fictional.

What does it mean to get closer - without taking over?
How much distance does a good play need?
And how does a 'yes' sound without language?

Flirt In is a space for questions, for play, for exchange.
For everyone who wants to sharpen their perception, activate their body knowledge and perhaps rediscover - or rediscover - flirting.

Angela - artist-choreographer, performer, lecturer - will guide you through this performative experiment with charm, depth and a twinkle in the eye.

Let's flirt. Together. And with style.`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      
      <MediaGallerySeparated
        mediaItems={flirtInMedia}
        title="Flirt In"
        description={description}
        additionalInfo={additionalInfo}
        photographer=""
        imageSize="xlarge"
      />
    </div>
  );
}