'use client';

import MediaGallerySeparated from "../../components/MediaGallerySeparated";
import Header from "../../components/Header";

export default function WorkshopPage() {
  const workshopMedia = [
    {
      src: "/workshop_1.jpg",
      alt: "Workshops",
      type: "image" as const,
      title: "Workshops"
    },
    {
      src: "/workshop_2.jpg", 
      alt: "Physical Theatre",
      type: "image" as const,
      title: "Physical Theatre"
    },
    {
      src: "/workshop_3.jpg",
      alt: "Body-Mind Movement",
      type: "image" as const, 
      title: "Body-Mind Movement"
    },
    {
      src: "/workshop_4.jpg",
      alt: "International Workshops",
      type: "image" as const,
      title: "International Workshops"
    },
    {
      src: "https://www.youtube.com/watch?v=eQWIcTM8QAw",
      alt: "Workshop Video 1",
      type: "video" as const,
      title: "Workshop Video 1"
    },
    {
      src: "https://www.youtube.com/watch?v=DqG7-sWSphw",
      alt: "Workshop Video 2", 
      type: "video" as const,
      title: "Workshop Video 2"
    },
    {
      src: "https://vimeo.com/manage/videos/156945522",
      alt: "Workshop Video 3",
      type: "video" as const,
      title: "Workshop Video 3"
    }
  ];

  const description = `Workshops are held nationally and internationally.

Rooted in Physical Theatre, I see and experience my workshops as a reflection—a mélange—of who I am. At their core, I teach composition, choreography, and body-mind somatic movement.

I train dance therapists and breath therapists, and I also offer individual dance therapy sessions.

My approach integrates voice work, breath, and movement as interconnected elements. I explore the deep relationship between these layers, always returning to presence and perception.`;

  const additionalInfo = `In terms of choreographic tools, I draw from established principles such as rhythm, timing, real-time composition, movement qualities, and levels. Yet beyond technique, my work is grounded in how we perceive life—physically, emotionally, and intellectually.

I'm happy to offer one or more workshops at your space—tailored to your needs and your community.

Let's move, explore, and create together.

Some field reports:

"this is a workshop with Angela Lamprianidou, a great choreographer, artist and teacher, who I worked with several times. I recommend it to all performers, who love to work with energy, movement, voice and the inner self in a performative way."
- Selina Thüring

"Angela has a great talent to fascinate and motivate students diving into the experience of contemporary dance, they were captured by Angela's genius as a teacher and artist."
- Professor Dr Matthias Warstatt, Chair of theater and media studies Germany Nuernberg

"Her courses are like an opening of body , mind and brain, her unique style and her method aligns immediately oneself questioning and realizing that what ever I do - I do it. The course was more form what I ever imagined to get and understand that choreography has different layres of to be."
- Gläsker Monika, Musician

"Angela is a special teacher of energetics, she is shifting them with a allround knowledge, her unique style is to bring you in the body by using your brain and your voice. I learned to concentrate myself more. It's like a self friction which leads to a satisfaction."
- Nicole Hildebrandt, Swing Dancer and Health Educator`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      <MediaGallerySeparated
        mediaItems={workshopMedia}
        title="Workshops"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by Workshop Participants"
        imageSize="xlarge"
      />
    </div>
  );
}