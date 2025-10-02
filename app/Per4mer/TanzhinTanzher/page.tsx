import MediaGallery from "../../../components/MediaGallery";
import Image from "next/image";

export default function TanzhinTanzherPage() {
  const tanzhinMedia = [
    {
      src: "https://vimeo.com/279447734",
      alt: "Tanz hin Tanz her video",
      type: "video" as const,
      title: "Tanz hin Tanz her"
    },
    {
      src: "/Tanz-hin-tanz-her.png",
      alt: "Tanz hin tanz her - Performance Image",
      type: "image" as const,
      title: "Tanz hin Tanz her"
    },
    {
      src: "/tanz-hin-tanz-her.jpeg",
      alt: "Tanz hin tanz her - Performance Image 2",
      type: "image" as const,
      title: "Tanz hin Tanz her"
    },
    {
      src: "/tanz-hh.jpeg",
      alt: "Tanz hin tanz her - Performance Image 3",
      type: "image" as const,
      title: "Tanz hin Tanz her"
    },
    {
      src: "/Tanz-Huh.jpeg",
      alt: "Tanz hin tanz her",
      type: "image" as const,
      title: "Tanz hin Tanz her"
    },
    {
      src: "/tanz-hun-tanz-her2.jpeg",
      alt: "Tanz hin tanz her",
      type: "image" as const,
      title: "Tanz hin Tanz her"
    },
    {
      src: "/tanz-hun-tanz-her2.jpeg",
      alt: "Tanz hin tanz her - Performance Image 4",
      type: "image" as const,
      title: "Tanz hin Tanz her"
    }
  ];

  const description = `Tanz hin Tanz her
Dance back and forth, this way and that.
A call for motion. A call for movement.

 www.ballhausost.de/tanz-hin-tanz-her-2

An ensemble of professional dancers and a young 
drop of refugees invites to dance and illuminates 
the structures of integration: what does it mean 
to integrate into a society or a situation?

An empty, undisturbed hall becomes a meeting place.
Nations, stories and people meet. The audience itself 
gets an integration into the performance, 
assumes predetermined movements of the dancers 
and takes in own, which in turn is taken over.

Integration takes place on the same level. The dance 
functions as a universal language that does not have 
to be explained. The body speaks for itself.`;

  const additionalInfo = `Idea, Concept, Choreography ANGELA LAMPRIANIDOU 
Creation Dancers ANDREA DORIAN RAMA, MARIA FERRARA, 
IRINEU MARCOVECCHIO, SELINA THÜRING, ANGELA LAMPRIANIDOU 
together with a group of young refugees 
Visuals  CHEB KAMMERER, LARS KÜNSTLER


A Production of DREI WÜNSCHE FREI 
- STUDIO For culture and communication: http://www.wunschkollektiv.net/index.html 

ANGELA LAMPRIANIDOU IN KOOPERATION 
with the BALLHAUS OST. 

Tanz hin Tanz her - Premiere 5-8.10.2017 Ballhaus Ost, Berlin

Tanz hin tanz her had his Premiere 2017 at Ballhaus Ost in Berlin 
and was invited to following festivals: 
Festival Zell Am See 2023: https://www.schwelle-festival.com
Schwelle Wien 2022: https://web.archive.org/web/20221004133729/https://schwelle.at/events/tanz-hin-tanz-her/
Fete de la danse Yverdon Schweiz 2019: https://web.archive.org/web/20190812073002/https://fetedeladanse.ch/yverdon-les-bains/programme/2019/5/5/
Saanfest Fest Oslo 2020, 
Marameo Berlin 2018: https://web.archive.org/web/20190812081621/http://tanzraumberlin.de/TANZ-hin-TANZ-her--2506-1.html


Funded by KULTUR MACHT STARK PLUS. BÜNDNISSE FÜR 
BILDUNG DES BUNDESMINISTERIUMS FÜR BILDUNG UND FORSCHUNG (BMBF): https://web.archive.org/web/20151009013340/https://www.bmbf.de/de/kultur-macht-stark-buendnisse-fuer-bildung-958.html
and the ARBEITSGEMEINSCHAFT KATHOLISCH-SOZIALER NETZWERKE (AKSB): http://www.bpb.de/partner/foerderung/184823/arbeitsgemeinschaft-katholisch-sozialer-bildungswerke-in-der-bundesrepublik-deutschland-e-v-aksb-e-v`;

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white website-font media-screen-bigger page-bg-overlay page-bg-light-overlay font-variation-2" style={{
      backgroundImage: `url('/tanz-hin-tanz-her.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <MediaGallery
        mediaItems={tanzhinMedia}
        title="Tanz hin Tanz her"
        description={description}
        additionalInfo={additionalInfo}
        disableBackground={true}
      />
      
      {/* Logo Images Section */}
      <div className="relative z-10 px-18 pb-10">
        <div className="max-w-4xl">
          <div className="flex justify-center items-center mt-8">
            <a 
              href="https://web.archive.org/web/20151009013340/https://www.bmbf.de/de/kultur-macht-stark-buendnisse-fuer-bildung-958.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block transition-transform duration-300 hover:scale-110 mr-6"
            >
              <Image
                src="/image copy 3.png"
                alt="BMBF Logo"
                width={240}
                height={100}
                className="object-contain h-[100px]"
              />
            </a>
            <a 
              href="http://www.bpb.de/partner/foerderung/184823/arbeitsgemeinschaft-katholisch-sozialer-bildungswerke-in-der-bundesrepublik-deutschland-e-v-aksb-e-v" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block transition-transform duration-300 hover:scale-110"
            >
              <Image
                src="/image copy 4.png"
                alt="AKSB Logo"
                width={240}
                height={100}
                className="object-contain h-[100px]"
              />
            </a>
          </div>
        </div>
        
        {/* Event PDF Link */}
        <div className="mt-8 text-center">
          <a
            href="/END OF SUMMER CELEBRATION & OPEN STAGE – marameo Berlin e.V..pdf"
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            📄 Download Event Information (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}