import MediaGallery from "../../../components/MediaGallery";

export default function YouArePointPage() {
  const youArePointMedia = [
    {
      src: "https://player.vimeo.com/video/138986126?color=00ee22&title=0&byline=0&portrait=0",
      alt: "Workshop You are the point by Angela Lamprianidou",
      type: "video" as const,
      title: "Workshop You are the point"
    },
    {
      src: "/workshop-you-are-the-point.jpg",
      alt: "Workshop You are the point aufführung",
      type: "image" as const,
      title: "Workshop You are the point"
    },
    {
      src: "/you-ar-ethe-point-.jpeg",
      alt: "You are the point",
      type: "image" as const,
      title: "Workshop You are the point"
    },
    {
      src: "/your-are-the-point-wrokshop-and-performance.jpg-.jpg",
      alt: "You are the point workshop and performance",
      type: "image" as const,
      title: "Workshop You are the point"
    },
    {
      src: "/your-are-the-point-wrokshop-and-performance.jpg.jpg",
      alt: "You are the point workshop and performance",
      type: "image" as const,
      title: "Workshop You are the point"
    },
    {
      src: "/your-are-the-point-wrokshop-and-performancse.jpg.jpg",
      alt: "You are the point workshop and performance",
      type: "image" as const,
      title: "Workshop You are the point"
    },
    {
      src: "/your-are-the-point,-performacne-.jpg",
      alt: "You are the point performance",
      type: "image" as const,
      title: "Workshop You are the point"
    }
  ];

  const description = `You are the point

breathing thinking telling dancing 
alignment... creativity beauty to be

Workshop by Angela Lamprianidou  

Angela Lamprianidou invites to a choreographical appointment with yourself.
Your voice turns out to be the rhythm, your body the vehicle to move 
and feel your intellect the capacity of concentration and realisation.
Meeting, feeling and exploring your potential. 

Central is an intermezzo of entity, body-space and language.
A rewiev into you´re umbilical cord!`;

  const additionalInfo = `Some field reports:

"this is a workshop with Angela Lamprianidou, a great choreographer, 
 artist and teacher, who I worked with several times. 
 I recommend it to all performers, who love to work with energy, 
 movement, voice and the inner self in a performative way."
 
  Selina Thüring
 
 
"Angela has a great talent to fascinate and motivate students diving into the experience 
 of contemporary dance, they were captured by Angela´s genius as a teacher and artist."
  
  Professor Dr Matthias Warstatt, Chair of theater and media studies Germany Nuernberg

 
"Her courses are like an opening of body , mind and brain, her unique style and her method 
 aligns immediately oneself questioning and realizing that what ever I do - I do it. 
 The course was more form what I ever imagined to get and understand that choreography has 
 different layres of to be."

  Gläsker Monika, Musician


"Angela is a special teacher of energetics, she is shifting them with a allround knowledge, 
 her unique style is to bring you in the body by using your brain and your voice. 
 I learned to concentrate myself more. It´s like a self friction which leads to a satisfaction."

  Nicole Hildebrandt, Swing Dancer and Health Educator`;

  return (
    <MediaGallery
      mediaItems={youArePointMedia}
      title="Workshop You are the point"
      description={description}
      additionalInfo={additionalInfo}
    />
  );
}