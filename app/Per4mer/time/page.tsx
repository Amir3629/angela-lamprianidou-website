import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/Header";

export default function TimePage() {
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
          <h1 className="text-2xl font-bold mb-8">time</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <pre className="whitespace-pre-wrap text-sm leading-relaxed text-white/90">
"Time" is a performance that explores the concept of temporal experience 
through movement and breath. The work investigates how we perceive and 
experience time in our bodies, creating a meditative and contemplative 
atmosphere.

The piece was performed at various venues including Barcelona and the 
Arena Festival in Erlangen, where it received positive reception for 
its ability to create a deep, breathing experience for the audience.

Choreography: Angela Lamprianidou
Performance: Angela Lamprianidou
Locations: Barcelona, Erlangen Arena Festival
Year: 2008

This work represents a focus on the fundamental elements of performance: 
breath, presence, and the passage of time.
              </pre>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-green-400 mb-2">Arena Spots Review:</h3>
                <blockquote className="text-sm text-white/90 italic">
                  "A per4mance where u were breathing deep 
                  and lovely from the beginning to the end"
                </blockquote>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-white/70">
                  A meditative exploration of temporal experience 
                  through movement and breath.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold mb-2">Key Elements:</h3>
                <ul className="text-xs text-white/80 space-y-1">
                  <li>• Breath work</li>
                  <li>• Temporal perception</li>
                  <li>• Meditative atmosphere</li>
                  <li>• Presence and awareness</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold mb-2">Performances:</h3>
                <ul className="text-xs text-white/80 space-y-1">
                  <li>• Barcelona</li>
                  <li>• Erlangen Arena Festival</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}