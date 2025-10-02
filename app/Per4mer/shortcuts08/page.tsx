import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/Header";

export default function Shortcuts08Page() {
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
          <h1 className="text-2xl font-bold mb-8">short cuts</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <pre className="whitespace-pre-wrap text-sm leading-relaxed text-white/90">
"Short cuts" is a performance that explores the concept of taking 
alternative routes and finding new pathways through movement and 
choreography. The work was performed at the Bremen Schwankhalle 
as part of the OUTNOW! Festival.

The piece investigates the idea of shortcuts in both physical and 
conceptual terms, questioning whether there are always faster or 
more direct ways to reach our goals, and what we might miss along 
the way.

Choreography: Angela Lamprianidou
Performance: Angela Lamprianidou
Location: Bremen Schwankhalle
Festival: OUTNOW! Festival
Year: 2008

This work represents an exploration of efficiency, alternative 
routes, and the value of the journey versus the destination.
              </pre>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-green-400 mb-2">Carlos Murias:</h3>
                <blockquote className="text-sm text-white/90 italic">
                  "A perplex performance before its perplexities"
                </blockquote>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-white/70">
                  An exploration of alternative routes and pathways 
                  through movement and choreography.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold mb-2">Key Themes:</h3>
                <ul className="text-xs text-white/80 space-y-1">
                  <li>• Alternative routes</li>
                  <li>• Efficiency vs. experience</li>
                  <li>• Journey vs. destination</li>
                  <li>• Perplexity and complexity</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold mb-2">Performance Details:</h3>
                <ul className="text-xs text-white/80 space-y-1">
                  <li>• Bremen Schwankhalle</li>
                  <li>• OUTNOW! Festival</li>
                  <li>• 2008</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}