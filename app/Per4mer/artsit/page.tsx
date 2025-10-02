import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/Header";

export default function ArtSitPage() {
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
          <h1 className="text-2xl font-bold mb-8">art sit</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <pre className="whitespace-pre-wrap text-sm leading-relaxed text-white/90">
"Art Sit" is a conceptual performance that transforms the toilet into 
an artistic environment. The work was presented at the Erlangen Arena 
Festival and explores the idea that we have our best feelings on the 
toilet, which is why the artist chose to design this artistic 
surrounding and give it more "art-s(h)it."

The piece challenges conventional notions of where art can exist and 
what spaces are worthy of artistic intervention. By focusing on the 
toilet as a site of creativity and comfort, the work questions 
hierarchies of space and the relationship between bodily functions 
and artistic expression.

Choreography: Angela Lamprianidou
Performance: Angela Lamprianidou
Location: Erlangen Arena Festival
Year: 2008

This work represents an early exploration of site-specific performance 
and the democratization of artistic space.
              </pre>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-green-400 mb-2">Erlanger Nachrichten:</h3>
                <blockquote className="text-sm text-white/90 italic">
                  "Even the toilets have been designed by A.Lamprianidou, a
                  fantasy world with a fantastic result. Angela says that we have 
                  the best feelings on the toilet, which is why she chose to design 
                  this artistic surrounding and give it more art-s(h)it."
                </blockquote>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-white/70">
                  A conceptual performance that transforms the toilet 
                  into an artistic environment.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold mb-2">Key Concepts:</h3>
                <ul className="text-xs text-white/80 space-y-1">
                  <li>• Site-specific performance</li>
                  <li>• Toilet as art space</li>
                  <li>• Bodily functions and art</li>
                  <li>• Space democratization</li>
                  <li>• Comfort and creativity</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold mb-2">Performance Details:</h3>
                <ul className="text-xs text-white/80 space-y-1">
                  <li>• Erlangen Arena Festival</li>
                  <li>• 2008</li>
                  <li>• Toilet design intervention</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}