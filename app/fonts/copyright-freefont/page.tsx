import Header from "../../../components/Header";

export default function FontCopyrightPage() {
  const description = `GNU FreeFont Copyright

Upstream-Name: GNU FreeFont
Contact: Steve White <stevan.white@gmail.com>
Source: https://savannah.gnu.org/projects/freefont/

Files: *
Copyright: 2002-2012, GNU Freefont contributors
License: GPL-3+

Files: */*.ttf */*.otf */*.woff
Copyright: 2002-2012, GNU Freefont contributors
License: GPL-3+ with Special Font Exception

GNU FreeFont is free software under GPL-3+. The fonts are distributed WITHOUT ANY WARRANTY.

As a special exception, if you create a document which uses this font, this font does not by itself cause the resulting document to be covered by the GNU GPL.`;

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
          <h1 className="text-3xl text-white mb-8 font-normal">Font Copyright Information</h1>

          <div className="space-y-6 text-base text-white">
            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-white/90">
              {description}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}