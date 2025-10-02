import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/Header";

export default function MoviePage() {
  return (
    <div 
      className="min-h-screen relative overflow-hidden bg-black text-white website-font"
    >
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

      <div className="relative z-10 p-8 md:p-12 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-8">movie</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <pre className="whitespace-pre-wrap text-sm leading-relaxed text-white/90">
"Movie" is a performance work that explores the relationship between 
live performance and cinematic experience. The piece investigates 
how movement can be framed, edited, and presented in ways that 
reference filmic techniques and storytelling.

The work questions the boundaries between live performance and 
recorded media, exploring how choreography can create cinematic 
effects through movement, lighting, and spatial arrangement.

Choreography: Angela Lamprianidou
Performance: Angela Lamprianidou
Year: 2008

This work represents an early exploration of the intersection 
between dance and film, examining how live performance can 
create cinematic experiences.
              </pre>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-green-400 mb-2">Key Themes:</h3>
                <ul className="text-xs text-white/80 space-y-1">
                  <li>• Live vs. recorded performance</li>
                  <li>• Cinematic choreography</li>
                  <li>• Movement as film</li>
                  <li>• Framing and editing</li>
                  <li>• Storytelling through movement</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-white/70">
                  An exploration of the relationship between 
                  live performance and cinematic experience.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold mb-2">Performance Elements:</h3>
                <ul className="text-xs text-white/80 space-y-1">
                  <li>• Cinematic movement</li>
                  <li>• Framing techniques</li>
                  <li>• Lighting design</li>
                  <li>• Spatial arrangement</li>
                  <li>• Narrative structure</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold mb-2">Concept:</h3>
                <p className="text-xs text-white/80">
                  Exploring how live performance can create 
                  cinematic experiences through movement and staging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}