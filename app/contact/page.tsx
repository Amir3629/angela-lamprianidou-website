import Image from "next/image";
import Header from "../../components/Header";
import { convertUrlsToLinks } from "../../lib/urlUtils";
import Link from "next/link";

export default function ContactPage() {
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

This homepage and all its visual contents
are property of Angela Lamprianidou.
(except link banner graphics and multimedia
scripts and techniques, see below)
She is responsible for contents of this page.
Further using of images, films or text from this
page is only allowed by agreement with the author.

Disclaimer: Despite of careful revision,
the author is not resposible for the contents
of external linked pages. Resposible for the
contents of external linked pages
are exclusilvely the authors of those pages.

Datenschutzerklärung nach DSGVO/GDPR:
http://lamprianidou.com/Per4mer/datenschutzerklaerung.html

© 2007-2022 A.Lamprianidou

Best view 1024x768
with Mozilla Firefox &
jscript and flash enabled

Multimedia visualisation powered by
Vimeo, Youtube, UniteGallery, bxslider, NonverBlaster

Some pages on this website use the font Free Mono
which copyright is under the GPL-Licence

last revision 16.08.2024 by fgmonoton`;

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white website-font">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url('/entire_website_background.jpg')`,
          backgroundSize: '100% auto',
          backgroundPosition: 'top center',
        }}
      />

      {/* Dynamic Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen pt-32 pl-6 md:pl-24 pr-6 md:pr-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl text-white mb-8 font-normal">Contact</h1>

          <div className="space-y-6 text-white">
            <div className="website-text leading-relaxed text-white/90 space-y-4">
              <div>
                <span>home  : </span>
                <a href="https://www.lamprianidou.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">lamprianidou.com</a>
              </div>

              <div>
                <span>email : </span>
                <a href="mailto:angela@lamprianidou.com" className="text-green-400 hover:text-green-300 underline font-semibold">angela@lamprianidou.com</a>
              </div>

              <div>
                <span>post : 10823 Berlin</span>
              </div>

              <div>
                <span>vimeo : </span>
                <a href="https://vimeo.com/lamprianidou" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">vimeo.com/lamprianidou</a>
              </div>

              <div>Videos will be sent on demand</div>

              <div>
                <div className="font-semibold">Sponsors:</div>
                <div>Dezentrale Kulturarbeit Tempelhof Schöneberg</div>
                <div>Goethe Institut</div>
                <div>
                  <a href="http://www.institutdelteatre.cat" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">Institut del teatre</a>
                </div>
                <div>
                  <a href="http://www.aksb.de/?ID=546&mod=aktuellesdetail" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">AKSB</a>
                </div>
              </div>

              <div>
                <div className="font-semibold">Supporters:</div>
                <div>OUTNOW! Festival, Bremen (short cuts)</div>
                <div>
                  <a href="http://www.arena-festival.de" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">ARENA Festival, Erlangen (time)</a>
                </div>
                <div>
                  <a href="http://www.mercatflors.cat/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">Mercat de les Flors (SITz)</a>
                </div>
              </div>

              <div className="website-small">
                <div>This homepage and all its visual contents</div>
                <div>are property of Angela Lamprianidou.</div>
                <div>(except link banner graphics and multimedia</div>
                <div>scripts and techniques, see below)</div>
                <div>She is responsible for contents of this page.</div>
                <div>Further using of images, films or text from this</div>
                <div>page is only allowed by agreement with the author.</div>
                <div></div>
                <div>Disclaimer: Despite of careful revision,</div>
                <div>the author is not resposible for the contents</div>
                <div>of external linked pages. Resposible for the</div>
                <div>contents of external linked pages</div>
                <div>are exclusilvely the authors of those pages.</div>
                <div></div>
                <div>
                  <a href="/datenschutzerklaerung" className="text-green-400 hover:text-green-300 underline font-semibold">Datenschutzerklärung nach DSGVO/GDPR</a>
                </div>
                <div></div>
                <div>© 2007-2022 A.Lamprianidou</div>
                <div></div>
                <div>Best view 1024x768</div>
                <div>with Mozilla Firefox &</div>
                <div>jscript and flash enabled</div>
                <div></div>
                <div>Multimedia visualisation powered by</div>
                <div>
                  <a href="https://vimeo.com/lamprianidou" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">Vimeo</a>
                  , 
                  <a href="https://www.youtube.com/channel/UCKrBDHws81vl_7QGdJFwCiQ" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">Youtube</a>
                  , 
                  <a href="http://unitegallery.net/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">UniteGallery</a>
                  , 
                  <a href="http://bxslider.com/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">bxslider</a>
                  , 
                  <a href="https://web.archive.org/web/20130413005927/http://www.basics09.de/nonverblaster-hover" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-semibold">NonverBlaster</a>
                </div>
                <div></div>
                <div>
                  <a href="/fonts/copyright-freefont" className="text-green-400 hover:text-green-300 underline font-semibold">Some pages on this website use the font Free Mono which copyright is under the GPL-Licence</a>
                </div>
                <div></div>
                <div>last revision 16.08.2024 by fgmonoton</div>
              </div>
            </div>

            {/* Logo at the bottom */}
            <div className="mt-12 flex justify-center">
              <a 
                href="http://www.diba.cat/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/contact-logo.png"
                  alt="Logo"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}