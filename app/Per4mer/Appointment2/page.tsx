'use client';

import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function Appointment2Page() {
  const appointment2Media = [
    {
      src: "https://vimeo.com/293207886",
      alt: "Appointment #2 Video",
      type: "video" as const,
      title: "Appointment #2 Video"
    },
    {
      src: "/appointment2_1.jpg",
      alt: "Appointment on Stage #2",
      type: "image" as const,
      title: "Appointment on Stage #2"
    },
    {
      src: "/appointment2_2.jpg",
      alt: "Political Freedom",
      type: "image" as const,
      title: "Political Freedom"
    },
    {
      src: "/appointment2_3.jpg",
      alt: "Two Dancers",
      type: "image" as const,
      title: "Two Dancers"
    },
    {
      src: "/appointment2_4.jpg",
      alt: "Choreographic Rendezvous",
      type: "image" as const,
      title: "Choreographic Rendezvous"
    }
  ];

  const description = `This is an appointment of political freedom.
Two dancers asking themselves and the public:
Are life, art and war necessary?
What role does giving play in being an individual?
It is an invitation in a very abstract and absurd form
to reflect about our behaviour, our beliefs and our selves.
By questioning life and art that can seem banal, the artist reflects
upon the time wasted in understanding that life is a repetition
related to the repetition of history.`;

  const additionalInfo = `"Appointment on Stage" is a choreographic rendezvous with others and an encounter with oneself.
Two performers of different generations and national backgrounds experience and acknowledge the body
as a feeling-thinking unity: "I trust you to be the dance, the Wo- man, the moi."
This acceptance by the individual turns into a composition of interpretive dancing
without kissing and a kissing without documentation.

Do you understand?

Angela Lamprianidou creates an integral dance affair made of words and movement; an autonomous whole.
It reveals a conversing of cultures in which language plays the leading and the supporting role.
The changing syntax that ensues in the piece raises, among others, the bold question,
"Am I the person I want to be? Do I want to be the person I am?"

In this Duet he/she is uncertain about gender, the understanding of gender
and at the end the misunderstanding of separation.`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      <MediaGallerySeparated
        mediaItems={appointment2Media}
        title="Appointment on Stage #2"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by Mirjam Dumont"
        imageSize="xlarge"
      />
    </div>
  );
}