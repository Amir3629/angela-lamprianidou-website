import MediaGallerySeparated from "../../../components/MediaGallerySeparated";

export default function Appointment2Page() {
  const appointment2Media = [
    {
      src: "https://player.vimeo.com/video/293207886",
      alt: "Appointment on stage # 2 - Video",
      type: "video" as const,
      title: "Appointment on stage # 2"
    },
    {
      src: "https://lamprianidou.com/Per4mer/appointment2/musrara1754.jpg",
      alt: "Appointment on stage # 2",
      type: "image" as const,
      title: "Appointment on stage # 2"
    },
    {
      src: "https://lamprianidou.com/Per4mer/appointment2/musraraUriLevinson.jpg",
      alt: "Appointment on stage # 2",
      type: "image" as const,
      title: "Appointment on stage # 2"
    }
  ];

  const description = `Appointment on stage # 2

This is an appointment of political freedom.

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

Do you understand?

Angela Lamprianidou creates an integral dance affair made of words and movement; an autonomous whole. 
It reveals a conversing of cultures in which language plays the leading and the supporting role. 
The changing syntax that ensues in the piece raises, among others, the bold question, 
"Am I the person I want to be? Do I want to be the person I am?" 

In this Duet he/she is uncertain about gender, the understanding of gender 
and at the end the misunderstanding of separation.`;

  const additionalInfo = ` `;

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white website-font page-bg-overlay page-bg-bw font-variation-1 media-screen-xlarge" style={{
      backgroundImage: `url('https://lamprianidou.com/Per4mer/appointment2/musrara1754.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <MediaGallerySeparated
        mediaItems={appointment2Media}
        title="Appointment on stage # 2"
        description={description}
        additionalInfo={additionalInfo}
      />
    </div>
  );
}