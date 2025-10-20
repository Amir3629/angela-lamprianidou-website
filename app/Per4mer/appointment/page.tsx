import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";
export default function AppointmentPage() {
  const appointmentMedia = [
    {
      src: "/©musrara Uri.jpg",
      alt: "Appointment on stage 1",
      type: "image" as const,
      title: "Appointment on stage"
    },
    {
      src: "/©urilevanson.jpg",
      alt: "Appointment on stage 2",
      type: "image" as const,
      title: "Appointment on stage"
    },
    {
      src: "/IMG_5087.png",
      alt: "Appointment on stage 3",
      type: "image" as const,
      title: "Appointment on stage"
    },
    {
      src: "/Bildschirmfoto 2025-10-06 um 19.33.17.png",
      alt: "Appointment on stage 4",
      type: "image" as const,
      title: "Appointment on stage"
    },
    {
      src: "https://vimeo.com/293207886",
      alt: "Appointment # 2 Video",
      type: "video" as const,
      title: "Appointment # 2 Video"
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
related to the repetition of history.

"Appointment on Stage" is a choreographic rendezvous with others and an encounter with oneself. 
Two performers of different generations and national backgrounds experience and acknowledge the body 
as a feeling-thinking unity: "I trust you to be the dance, the Wo- man, the moi." 
This acceptance by the individual turns into a composition of interpretive dancing 
without kissing and a kissing without documentation.

Do you understand?`;

  const additionalInfo = `Angela Lamprianidou creates an integral dance affair made of words and movement; an autonomous whole. 
It reveals a conversing of cultures in which language plays the leading and the supporting role. 
The changing syntax that ensues in the piece raises, among others, the bold question, 
"Am I the person I want to be? Do I want to be the person I am?" 

In this Duet he/she is uncertain about gender, the understanding of gender 
and at the end the misunderstanding of separation.`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      
      {/* Title */}
<MediaGallerySeparated
        mediaItems={appointmentMedia}
        title="Appointment # 2"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by Mirjam Dumont"
        imageSize="xlarge"
      />
    </div>
  );
}
