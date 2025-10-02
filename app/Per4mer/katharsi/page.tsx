import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/Header";

export default function KatharsiPage() {
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
          <h1 className="text-2xl font-bold mb-8">katharsi</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <pre className="whitespace-pre-wrap text-sm leading-relaxed text-white/90">
"Katharsi" (Catharsis) is a performance that explores the concept of 
emotional purification and release through movement. The work features 
two dancers in strong positions, one weak and one strong, changing 
emotions in a very abstract way through a game with light and shadow 
over hypocrisy.

The piece was performed at various venues including Barcelona 
(Nau Ibanov, Teatre Estudi, Gava American Lake, CvBarceloneta, 
La caldera) and the Bremen Outnow Festival.

Choreography: Angela Lamprianidou
Performance: Angela Lamprianidou
Locations: Barcelona, Bremen Outnow Festival
Year: 2008

This work represents an exploration of emotional states and the 
therapeutic potential of movement and performance.
              </pre>

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-green-400 mb-2">Antonio P. Collom:</h3>
                  <blockquote className="text-sm text-white/90 italic">
                    "As the word, so the show. Two dancers in strong positions. One weak, one strong. Changing
                    of emotions in a very abstract way. A game with light and shadow over hypocrisy"
                  </blockquote>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-green-400 mb-2">Agusti Ros:</h3>
                  <blockquote className="text-sm text-white/90 italic">
                    "I left this performance and I was happy to have lived, shared moments of communication"
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-white/70">
                  An exploration of emotional purification and release 
                  through abstract movement and light.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold mb-2">Key Elements:</h3>
                <ul className="text-xs text-white/80 space-y-1">
                  <li>• Two dancers</li>
                  <li>• Strong/weak dynamics</li>
                  <li>• Abstract emotional expression</li>
                  <li>• Light and shadow play</li>
                  <li>• Hypocrisy theme</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold mb-2">Performances:</h3>
                <ul className="text-xs text-white/80 space-y-1">
                  <li>• Nau Ibanov, Barcelona</li>
                  <li>• Teatre Estudi, Barcelona</li>
                  <li>• Gava American Lake</li>
                  <li>• CvBarceloneta</li>
                  <li>• La caldera</li>
                  <li>• Bremen Outnow Festival</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}