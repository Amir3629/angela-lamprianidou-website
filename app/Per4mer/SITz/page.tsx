import MediaGallerySeparated from "../../../components/MediaGallerySeparated";

export default function SITzPage() {
  const sitzMedia = [
    {
      src: "https://www.youtube.com/embed/t32Har72HH0?start=9",
      alt: "SITz performance video",
      type: "video" as const,
      title: "SITz Performance Video"
    },
    {
      src: "/sitz01_direct.jpg",
      alt: "SITz performance 1",
      type: "image" as const,
      title: "SITz Performance"
    },
    {
      src: "/sitz02_direct.jpg",
      alt: "SITz performance 2",
      type: "image" as const,
      title: "SITz Performance"
    },
    {
      src: "/SITz1-copy.jpeg",
      alt: "SITz performance 3",
      type: "image" as const,
      title: "SITz Performance"
    },
    {
      src: "/SITz2.jpeg",
      alt: "SITz performance 4",
      type: "image" as const,
      title: "SITz Performance"
    },
    {
      src: "/Sitz3.jpeg",
      alt: "SITz performance 5",
      type: "image" as const,
      title: "SITz Performance"
    },
    {
      src: "/SITz-copy-2.jpeg",
      alt: "SITz",
      type: "image" as const,
      title: "SITz Performance"
    },
    {
      src: "/barcelona-sitz-.jpg",
      alt: "SITz Barcelona",
      type: "image" as const,
      title: "SITz Performance"
    },
    {
      src: "/sitz-copy.jpeg",
      alt: "SITz",
      type: "image" as const,
      title: "SITz Performance"
    },
    {
      src: "/sitz_direct.png",
      alt: "SITz",
      type: "image" as const,
      title: "SITz Performance"
    },
    {
      src: "/sitz-copy.jpeg",
      alt: "SITz performance 6",
      type: "image" as const,
      title: "SITz Performance"
    },
    {
      src: "/SITz-copy-2.jpeg",
      alt: "SITz performance 7",
      type: "image" as const,
      title: "SITz Performance"
    }
  ];

  const description = `SITz

"SITz" declines the paradox of a dynamic world 
that exists beyond any possibility of occupying 
the upper quarters of erect stance, still seeking 
its dance, the paradigm of its unsteadiness. 
Sitz is the fickle, and thus never-ending, dance 
of the homo sedens, who typically based his vision 
of history on a basic contrast between erect actors 
and a sitting audience, between doing and watching, 
starring and "witnessing".  
For that very reason, the social and cultural protocols 
of sitting (and their perverted choreographies) 
are of special concern to women,  the comprimarie 
(and almost forcefully the biological audience) 
of a rather macho history.`;

  const additionalInfo = `Choreography & artistic direction: A.Lamprianidou 
Dancers: Julia Koch,Mireia de Querol,A.Lamprianidou 
Escenography: Silvia Delagneau 
Music: P.Rose,C.Galle/InstitutFatima 
Lights: Ignasi Llorens 
collaborators: mercat de les flors,dansa mes+ a prop,institut del teatre 

management spain: *Anso Raybut* Pérez 
asraybaut@gmail.com 
tel:+34650614684 

Technical Details: 
dancefloor linoleum white 
(black is also possible...) 
Stage: min 10x10 m 
2 cd player 
3 ambient micros 
1 wireless micro (wireless) 
lightplan we will sent... 

more information: angela@lamprianidou.com 
read what Sara Blaylock or Emma Haro says about it...

Sara Blaylock review: https://web.archive.org/web/20150328035334/http://thehiddenpeople.com/about/sitz/
Emma Haro review: /prensaSITz.pdf


Premiere at Mercat de les Flors
9th May 2010 21.00h`;

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white website-font page-bg-overlay page-bg-medium-overlay font-variation-4 media-screen-xl" style={{
      backgroundImage: `url('/sitz01_direct.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <MediaGallerySeparated
        mediaItems={sitzMedia}
        title="SITz"
        description={description}
        additionalInfo={additionalInfo}
      />
    </div>
  );
}