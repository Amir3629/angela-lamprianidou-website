'use client';

import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";

export default function SITzPage() {
  const sitzMedia = [
    {
      src: "https://www.youtube.com/watch?v=7GuAaxllkgU",
      alt: "SITz Performance Video",
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
      src: "https://vimeo.com/manage/videos/156945827",
      alt: "SITz Video",
      type: "video" as const,
      title: "SITz Video"
    }
  ];

  const description = `"SITz" declines the paradox of a dynamic world that exists beyond any possibility of occupying the upper quarters of erect stance, still seeking its dance, the paradigm of its unsteadiness.
Sitz is the fickle, and thus never-ending, dance of the homo sedens, who typically based his vision of history on a basic contrast between erect actors and a sitting audience, between doing and watching, starring and "witnessing".
For that very reason, the social and cultural protocols of sitting (and their perverted choreographies) are of special concern to women, the comprimarie (and almost forcefully the biological audience) of a rather macho history.`;

  const additionalInfo = (
    <>
      Choreography & artistic direction: A.Lamprianidou<br />
      Dancers: Julia Koch, Mireia de Querol, A. Lamprianidou<br />
      Escenography: Silvia Delagneau<br />
      Music: P.Rose, C.Galle/InstitutFatima<br />
      Lights: Ignasi Llorens<br />
      collaborators: mercat de les flors, dansa mes+ a prop, institut del teatre<br /><br />
      management spain: *Anso Raybut* Pérez<br />
      asraybaut@gmail.com<br />
      tel:+34650614684<br /><br />
      
      Technical Details:<br /><br />
      dancefloor linoleum white<br />
      (black is also possible...)<br />
      Stage: min 10x10 m<br />
      2 cd player<br />
      3 ambient micros<br />
      1 wireless micro (wireless)<br />
      lightplan we will sent...<br /><br />
      more information: angela@lamprianidou.com<br />
      read what <a href="https://web.archive.org/web/20150328035334/http:/thehiddenpeople.com/about/sitz/" target="_blank" rel="noopener noreferrer">Sara Blaylock</a> or <a href="/prensaSITz (2).pdf" target="_blank" rel="noopener noreferrer">Emma Haro</a> says about it...<br /><br />
      Premiere at Mercat de les Flors 9th May 2010 21.00h
    </>
  );

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      <MediaGallerySeparated
        mediaItems={sitzMedia}
        title="SITz"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photos by LaRaitz"
        imageSize="xlarge"
      />
    </div>
  );
}