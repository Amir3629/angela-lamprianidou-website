import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Image from "next/image";

export default function AppointmentOnStagePage() {
  const appointmentMedia = [
    {
      src: "https://player.vimeo.com/video/176374765",
      alt: "Appointment on stage video",
      type: "video" as const,
      title: "Appointment on Stage"
    },
    {
      src: "/appointment-and-stage.jpeg",
      alt: "Appointment on stage 1",
      type: "image" as const,
      title: "Appointment on Stage"
    },
    {
      src: "/appointment-and-stage.jpeg.jpeg",
      alt: "Appointment on stage 2",
      type: "image" as const,
      title: "Appointment on Stage"
    },
    {
      src: "/appointment-and-stage.jpegq.jpeg",
      alt: "Appointment on stage 3",
      type: "image" as const,
      title: "Appointment on Stage"
    },
    {
        src: "/appointment_on_stage_2.jpeg",
      alt: "Appointment on stage 4",
      type: "image" as const,
      title: "Appointment on Stage"
    },
    {
      src: "/appointment_on_stage_22.jpeg",
      alt: "Appointment on stage 5",
      type: "image" as const,
      title: "Appointment on Stage"
    },
    {
      src: "/Appointment-2.jpeg",
      alt: "Appointment",
      type: "image" as const,
      title: "Appointment on Stage"
    },
    {
      src: "/apoointment-on-stage-2.jpeg",
      alt: "Appointment on stage",
      type: "image" as const,
      title: "Appointment on Stage"
    },
    {
      src: "/apoointment-on-stage-22.jpeg",
      alt: "Appointment on stage",
      type: "image" as const,
      title: "Appointment on Stage"
    },
    {
      src: "/appointment-on-stage-musrarta-festival.jpg",
      alt: "Appointment on stage Musrara festival",
      type: "image" as const,
      title: "Appointment on Stage"
    },
    {
      src: "/appointment-on-stage-5.jpeg",
      alt: "Appointment on stage",
      type: "image" as const,
      title: "Appointment on Stage"
    },
    {
      src: "/appointment-on-stage-5.jpeg",
      alt: "Appointment on stage 6",
      type: "image" as const,
      title: "Appointment on Stage"
    },
    {
      src: "/appointment_2.jpeg",
      alt: "Appointment on stage 7",
      type: "image" as const,
      title: "Appointment on Stage"
    }
  ];

  const description = `Appointment on stage
(I want to be the person I am - I am the person I want to be)

 www.ballhausost.de/appointment-on-stage-2


"Appointment on Stage" is a choreographic rendezvous with others 
and an encounter with oneself. Five performers of different generations 
and national backgrounds experience and acknowledge the body as a feeling-
thinking unity: „I trust you to be the dance, the man, the moi". 
This acceptance by the individual turns into a composition in which there is 
an interpretive dancing without kissing and a kissing without documentation. 

Do you understand? 

Angela Lamprianidou creates an integral dance affair made of words and movement; an autonomous whole. 
It reveals a conversing of cultures in which language plays the leading and the supporting role. 
The changing syntax that ensues in the piece raises, among others, 
the bold question „Am I the person who I want to be?" 
Do I want to be the person who I am?"`;

  const additionalInfo = `Appointment on stage had its Premiere 
2016 at Ballhaus Ost in Berlin  

Appointment on stage had its Premiere 2016 at Ballhaus Ost in Berlin


Supported by Goethe Institut Tel Aviv
for Musrara Festival 2018, Jerusalem: https://www.itraveljerusalem.com/de/event/musrara-mix-festival




credits// 

Choreography ++concept ++text

Angela Lamprianidou

Dancers

Irineu Marcovecchio ,Maria Focaraccio ,Rachell Bo Clarck ,Christina Gazi, 
Angela Lamprianidou, (Selina Thüring)

Co Dramaturg  Achim Wieland

Vocals & Composition Marie Séférian

Music Sounds Andreas Glabutschnig, Paul Rose

Costumes Karina Schwarzmüller

Light Design Achim Wieland

Lenghts: 55minutes

Technical needs : 3 micros// optimum white linoleum// 6 chairs`;

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white website-font media-screen-xlarge page-bg-overlay page-bg-dark-overlay font-variation-3" style={{
      backgroundImage: `url('/appointment_2.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <MediaGallerySeparated
        mediaItems={appointmentMedia}
        title="Appointment on stage"
        description={description}
        additionalInfo={additionalInfo}
        photographer="Mirjam Dumont"
      />
      
      {/* Logo Images Section */}
      <div className="relative z-10 px-18 pb-10">
        <div className="max-w-4xl">
          <div className="flex justify-center items-center mt-8">
            <Image
              src="/image copy 6.png"
              alt="Logo"
              width={240}
              height={100}
              className="object-contain h-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}