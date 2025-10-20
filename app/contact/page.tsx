import MediaGallerySeparated from "../../components/MediaGallerySeparated";
import Header from "../../components/Header";

export default function ContactPage() {
  const contactMedia = [];

  const description = `home  : www.lamprianidou.com

email : angela@lamprianidou.com

post : 10823 Berlin

vimeo : www.vimeo.com/lamprianidou

Videos will be sent on demand

Sponsors:
Dezentrale Kulturarbeit Tempelhof Schöneberg
Goethe Institut
Institut del teatre
AKSB

Supporters:
OUTNOW! Festival, Bremen (short cuts)
ARENA Festival, Erlangen (time)
Mercat de les Flors (SITz)

This homepage and all its visual contents are property of Angela Lamprianidou.
(except link banner graphics and multimedia scripts and techniques)
She is responsible for contents of this page.
Further using of images, films or text from this page is only allowed by agreement with the author.

Disclaimer: Despite of careful revision, the author is not resposible for the contents of external linked pages.`;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      <MediaGallerySeparated
        mediaItems={contactMedia}
        title="Contact"
        description={description}
        additionalInfo=""
        className="contact-page"
      />
    </div>
  );
}