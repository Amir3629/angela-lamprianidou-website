import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";
import Image from "next/image";
export default function TanzhinTanzherPage() {
  const sponsorLogos = [
    {
      src: "/Screenshot 2025-10-19 at 02.45.56.png",
      alt: "BMBF Logo",
      type: "image" as const,
      title: "BMBF",
      link: "https://web.archive.org/web/20151009013340/https://www.bmbf.de/de/kultur-macht-stark-buendnisse-fuer-bildung-958.html"
    },
    {
      src: "/Screenshot 2025-10-19 at 02.45.46.png",
      alt: "AKSB Logo", 
      type: "image" as const,
      title: "AKSB",
      link: "https://www.bpb.de/die-bpb/foerderung/traegerdatenbank/184823/arbeitsgemeinschaft-katholisch-sozialer-bildungswerke-in-der-bundesrepublik-deutschland-e-v-aksb-e-v/"
    }
  ];

  const tanzhinMedia = [
    {
      src: "https://vimeo.com/279447734",
      alt: "Tanz hin tanz her performance video",
      type: "video" as const,
      title: "Tanz hin Tanz her Performance Video"
    },
    {
      src: "/tanz_hin_tanz_her_1.jpg",
      alt: "Tanz hin tanz her performance 1",
      type: "image" as const,
      title: "Tanz hin Tanz her"
    },
    {
      src: "/tanz_hin_tanz_her_2.jpg",
      alt: "Tanz hin tanz her performance 2",
      type: "image" as const,
      title: "Tanz hin Tanz her"
    },
    {
      src: "/tanz_hin_tanz_her_3.jpg",
      alt: "Tanz hin tanz her performance 3",
      type: "image" as const,
      title: "Tanz hin Tanz her"
    }
  ];

  const description = `Tanz Hin und Her is a participatory dance performance that has been responding to the needs of a changing contemporary world since 2017. The audience itself becomes the performer—there is no right or wrong. 
There is only one shared language: through gestures, eyes, bodies, and movement.
In an unseated space, bodies expand freely. 
Movements arise spontaneously, offered by members of the audience, and are taken up, mirrored, and transformed by the group. 
A dynamic dialogue unfolds—silent yet deeply expressive—where individual impulses become collective choreography. Through this organic exchange, a sense of unity and presence emerges.`;

  const additionalInfo = (
    <>
      Tanz Hin und Her is a heart-opener—delicate and powerful at once.
      <br />It touches, transforms, and evokes a deep sense of aliveness and connection. It invites us to remember a universal language that lies beyond words: the language of dance.
      <br />The performance has been shown at renowned venues such as Marameo Berlin, 
      <br />Ballhaus Ost Berlin, Willy-Brandt-Saal, Danse Yverdon (Switzerland), and was invited to the Saanafestival in Oslo.
      <br />Whether in large spaces with three to four professional dancers, or in more intimate settings with two performers, Tanz Hin und Her remains a raw, unpolished diamond in the loud, fragmented noise of contemporary life.
      <br /><br />
      Dance back and forth, this way and that. 
      <br />A call for motion. A call for movement.
      <br />An ensemble of professional dancers and a young 
      <br />drop of refugees invites to dance and illuminates 
      <br />the structures of integration: what does it mean 
      <br />to integrate into a society or a situation?
      <br />An empty, undisturbed hall becomes a meeting place.
      <br />Nations, stories and people meet. The audience itself 
      <br />gets an integration into the performance, 
      <br />assumes predetermined movements of the dancers 
      <br />and takes in own, which in turn is taken over.
      <br />Integration takes place on the same level. The dance 
      <br />functions as a universal language that does not have 
      <br />to be explained. The body speaks for itself.
      <br /><br />
      Idea, Concept, Choreography ANGELA LAMPRIANIDOU 
      <br />Creation Dancers ANDREA DORIAN RAMA, MARIA FERRARA, 
      <br />IRINEU MARCOVECCHIO, SELINA THÜRING, ANGELA LAMPRIANIDOU 
      <br />together with a group of young refugees 
      <br />Visuals CHEB KAMMERER, LARS KÜNSTLER
      <br /><br /><br />
      A Production of <a href="http://www.wunschkollektiv.net/index.html" target="_blank" rel="noopener noreferrer">DREI WÜNSCHE FREI - STUDIO For culture and communication</a>
      <br /><br />
      <a href="/187_tanzhin_tanzher_Plakat.pdf" target="_blank" rel="noopener noreferrer">ANGELA LAMPRIANIDOU IN KOOPERATION with the BALLHAUS OST.</a>
      <br /><a href="https://www.ballhausost.de/tanz-hin-tanz-her-2" target="_blank" rel="noopener noreferrer">www.ballhausost.de/tanz-hin-tanz-her-2</a>
      <br /><br />
      <a href="/187_tanzhin_tanzher_Plakat.pdf" target="_blank" rel="noopener noreferrer">Tanz hin tanz her had his Premiere 2017 at Ballhaus Ost in Berlin</a>
      <br />and was invited to following festivals: 
      <br />Festival Zell Am See 2023, <a href="https://www.schwelle-festival.com/" target="_blank" rel="noopener noreferrer">Schwelle Wien 2022</a>, 
      <br /><a href="https://web.archive.org/web/20190812073002/https:/fetedeladanse.ch/yverdon-les-bains/programme/2019/5/5/" target="_blank" rel="noopener noreferrer">Fete de la danse Yverdon Schweiz 2019</a>, 
      <br />Saanfest Fest Oslo 2020, <a href="https://web.archive.org/web/20190812081621/http:/tanzraumberlin.de/TANZ-hin-TANZ-her--2506-1.html" target="_blank" rel="noopener noreferrer">Marameo Berlin 2018</a>
      <br /><br />
      Funded by <a href="https://web.archive.org/web/20151009013340/https:/www.bmbf.de/de/kultur-macht-stark-buendnisse-fuer-bildung-958.html" target="_blank" rel="noopener noreferrer">KULTUR MACHT STARK PLUS. BÜNDNISSE FÜR BILDUNG DES BUNDESMINISTERIUMS FÜR BILDUNG UND FORSCHUNG (BMBF)</a>
      <br />and the <a href="https://www.bpb.de/die-bpb/foerderung/traegerdatenbank/184823/arbeitsgemeinschaft-katholisch-sozialer-bildungswerke-in-der-bundesrepublik-deutschland-e-v-aksb-e-v/" target="_blank" rel="noopener noreferrer">ARBEITSGEMEINSCHAFT KATHOLISCH-SOZIALER NETZWERKE (AKSB)</a>.
    </>
  );

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography relative">
      <Header />
      
      <MediaGallerySeparated
        mediaItems={tanzhinMedia}
        title="Tanz hin Tanz her"
        description={description}
        additionalInfo={additionalInfo}
        photographer="© Photo by Julien Mudry"
        imageSize="xlarge"
      />
      
      {/* Fixed Sponsor Logos in Bottom Right */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {sponsorLogos.map((logo, index) => (
          <a 
            key={index}
            href={logo.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block hover:opacity-100 transition-opacity duration-200"
          >
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="w-32 h-auto opacity-80 hover:opacity-100"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
