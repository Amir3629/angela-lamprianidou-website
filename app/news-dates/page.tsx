'use client';

import Header from "../../components/Header";

// CSS for News & Dates page - ALL TEXT MUST BE GREEN
const newsDatesStyles = `
  .news-dates-page * {
    color: #16a34a !important; /* green-600 */
  }
  
  .news-dates-page h1,
  .news-dates-page h2,
  .news-dates-page h3,
  .news-dates-page p,
  .news-dates-page a,
  .news-dates-page span,
  .news-dates-page div {
    color: #16a34a !important; /* green-600 */
  }
  
  .news-dates-page a:hover {
    color: #15803d !important; /* green-700 */
  }
  
  .news-dates-page .website-title,
  .news-dates-page .website-text {
    color: #16a34a !important; /* green-600 */
  }
`;

export default function NewsDatesPage() {
  return (
    <div 
      className="min-h-screen text-green-600 website-font font-variation-1 media-screen-small angela-typography news-dates-page relative"
        style={{
          background: 'linear-gradient(135deg, #fecaca 0%, #e9d5ff 50%, #fce7f3 100%)', // Clean light red-violet
          minHeight: '100vh',
          width: '100%'
        }}
    >
      <style dangerouslySetInnerHTML={{ __html: newsDatesStyles }} />
      {/* Background image with red-violet tint */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/05Appointment©MirjamDumont2016 Kopie.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2,
          filter: 'hue-rotate(8deg) saturate(0.9) brightness(1.1)'
        }}
      ></div>
      
      <div className="relative z-10">
        <Header />
        
        <div className="pt-40 sm:pt-32 md:pt-32 px-4 md:px-18 pb-10">
          <h1 className="website-title mb-12 mt-16" style={{color: 'white !important'}}>
            News & Dates
          </h1>
        
        <div className="space-y-8 mt-16">
          {/* Regular Sessions */}
          <div>
            <h2 className="website-text text-xl font-semibold mb-4 text-green-600">
              Regular Sessions
            </h2>
            <div className="space-y-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-green-300/30">
                <h3 className="website-text font-medium text-green-600 mb-3">
                  Every Monday 12-17:00h 1:1 Sessions
                </h3>
                <p className="website-text text-green-500 mb-3">
                  Holzmarkt 25, at IKSK
                </p>
                <p className="website-text text-green-500 mb-4">
                  <a 
                    href="https://www.iksk-berlin.de/jawrelease" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 transition-colors font-semibold"
                  >
                    https://www.iksk-berlin.de/jawrelease
                  </a>
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-green-300/30">
                <h3 className="website-text font-medium text-green-600 mb-3">
                  Dance expression Mondays 10-11:30
                </h3>
                <p className="website-text text-green-500 mb-3">
                  IKSK holzmarkt 25
                </p>
                <p className="website-text text-green-500 mb-4">
                  <a 
                    href="https://www.iksk-berlin.de/dance-improv-angela" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 transition-colors font-semibold"
                  >
                    https://www.iksk-berlin.de/dance-improv-angela
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Upcoming Workshops */}
          <div>
            <h2 className="website-text text-xl font-semibold mb-4 text-green-600">
              Upcoming Workshops
            </h2>
            <div className="space-y-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-green-300/30">
                <h3 className="website-text font-medium text-green-600 mb-3">
                  Jaw and Body Release
                </h3>
                <p className="website-text text-green-500 mb-3">
                  9.10.2025 Holzmarkt 25 at IKSK<br />
                  16-18:00h<br />
                  and 12.10.25 14-17:00h
                </p>
                <p className="website-text text-green-500 mb-4">
                  <a 
                    href="https://www.iksk-berlin.de/jaw-release-group" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 transition-colors font-semibold"
                  >
                    https://www.iksk-berlin.de/jaw-release-group
                  </a>
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-green-300/30">
                <h3 className="website-text font-medium text-green-600 mb-3">
                  Flirt In Experience
                </h3>
                <p className="website-text text-green-500 mb-3">
                  18.10.25 20-23:00 pm<br />
                  IKSK Holzmarkt 25
                </p>
                <p className="website-text text-green-500 mb-4">
                  <a 
                    href="https://www.iksk-berlin.de/flirt-in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 transition-colors font-semibold"
                  >
                    https://www.iksk-berlin.de/flirt-in
                  </a>
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-green-300/30">
                <h3 className="website-text font-medium text-green-600 mb-2">
                  Tanz Hin Tanz her Participative Performance
                </h3>
                <p className="website-text text-green-500 mb-2">
                  26.10.2025 at Willy Brand Saal<br />
                  18-19:30 pm<br />
                  John F Kennedy Platz Rathaus Schöneberg
                </p>
              </div>
            </div>
          </div>

          {/* International Sessions */}
          <div>
            <h2 className="website-text text-xl font-semibold mb-4 text-green-600">
              International Sessions
            </h2>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-green-300/30">
              <h3 className="website-text font-medium text-green-600 mb-2">
                November and December
              </h3>
              <p className="website-text text-green-500">
                Online Sessions and Present Sessions and Workshops in Athens Greece.<br />
                Please be open to reach out for more Information.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="website-text text-xl font-semibold mb-4 text-green-600">
              Contact
            </h2>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-green-300/30">
              <p className="website-text text-green-500">
                For more information and bookings, please contact:<br />
                <a 
                  href="mailto:angelabrillante@gmail.com" 
                  className="text-green-600 hover:text-green-700 transition-colors font-semibold"
                >
                  angelabrillante@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}