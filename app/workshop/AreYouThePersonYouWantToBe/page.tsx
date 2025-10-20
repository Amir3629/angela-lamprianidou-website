'use client';

import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function AreYouThePersonYouWantToBePage() {
  const areYouThePersonMedia = [
    {
      src: "https://vimeo.com/manage/videos/199875881",
      alt: "Are you the person you want to be Video",
      type: "video" as const,
      title: "Are you the person you want to be Video"
    },
    {
      src: "https://www.youtube.com/watch?v=eQWIcTM8QAw",
      alt: "Are you the person you want to be YouTube Video",
      type: "video" as const,
      title: "Are you the person you want to be YouTube Video"
    },
    {
      src: "/_DSC9563f.jpg",
      alt: "Are you the person you want to be",
      type: "image" as const,
      title: "Are you the person you want to be"
    },
    {
      src: "/_DSC9668R.jpg",
      alt: "10-day workshop",
      type: "image" as const,
      title: "10-day workshop"
    },
    {
      src: "/_DSC9677DD.jpg",
      alt: "Personal Mantra",
      type: "image" as const,
      title: "Personal Mantra"
    },
    {
      src: "/_DSC9677Y.jpg",
      alt: "Live Performance",
      type: "image" as const,
      title: "Live Performance"
    }
  ];

  const description = `This 10-day workshop culminates in a live performance, exploring personal transformation through movement and mantra. Each participant selects a personal mantra — a phrase or set of words that reflect the person they wish to become.
Each word in the mantra is embodied through movement. We deconstruct syntax, isolate language, and recompose it through choreographic sequences. The process transforms language into living rhythm, with each movement carrying the weight, texture, and quality of intention.
Through repetition, rhythm, and variation, we search for the elixir — the meeting point between life and art, between who we are and who we aspire to be.`;

  const additionalInfo = `The workshop will be held at Boouze, Athens, concluding in a shared public performance where these personal mantras are brought to life.`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      <MediaGallerySeparated
        mediaItems={areYouThePersonMedia}
        title="Are you the person you want to be"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by Workshop Participants"
        imageSize="xlarge"
      />
    </div>
  );
}