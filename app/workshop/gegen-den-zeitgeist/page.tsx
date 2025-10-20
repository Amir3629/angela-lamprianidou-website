import MediaGallerySeparated from "../../../components/MediaGallerySeparated";
import Header from "../../../components/Header";
export default function GegenDenZeitgeistPage() {
  const zeitgeistMedia = [
    {
      src: "/zeitgeist_docx.png",
      alt: "Workshop Gegen den Zeitgeist",
      type: "image" as const,
      title: "Workshop Gegen den Zeitgeist"
    }
  ];

  const description = `A workshop with Matti Melchinger and Angela Lamprianidou

In the workshop "Against the Zeitgeist" we go into the search for truthfulness in communication. How do I transform myself before, during and after a crisis, or a pandemic experience as we are currently experiencing it, How can we create creative potential in a time of supposed perfection through the incompletion. Which tools are necessary to be able to reproduce true feelings in words and movements in this world?

By combining their two techniques, which have been developed over many years of experience, Lamprianidou and Melchinger accompany you through this two-day workshop. We go in a search of the natural breath, the flowing body, our own voice - the direct word into the momentum.`;

  const additionalInfo = `10th & 11th Oct 2020 10:00-13:00
Studio LaborGras
Paul-Linke-Ufer 44a, Berlin
Infos: <a href="https://web.archive.org/web/20200821102205/https://www.tanzraumberlin.de/artikel/gegen-den-zeitgeist-in-die-mitte-augenblicke/" target="_blank" rel="noopener noreferrer" className="text-green-600  underline">tanzraumberlin.de</a>

PDF: <a href="/GegenDenZeitgeistWorkshop.pdf" className="text-green-600  underline">Download PDF</a>
Flyer PDF: <a href="/Flyer_Zeitgeist.pdf" className="text-green-600  underline">Download PDF</a>`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      
      {/* Title */}
<MediaGallerySeparated
        mediaItems={zeitgeistMedia}
        title="Gegen den Zeitgeist"
        description={description}
        additionalInfo={additionalInfo}
        photographer=""
        imageSize="xlarge"
      />
    </div>
  );
}