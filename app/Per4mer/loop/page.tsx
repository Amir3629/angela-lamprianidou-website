import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/Header";

export default function LoopPage() {
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
          <h1 className="text-2xl font-bold mb-8">loop</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <pre className="whitespace-pre-wrap text-sm leading-relaxed text-white/90">
"Loop" is a half ironic and half ritual choreographic cameo about 
symbolic meaning and the impoverishment of symbols in circle-based dance. 
The work explores the repetitive nature of emotional, kinetic, and 
conceptual events through a solo performance.

The piece alternates between outbalanced 'release' figures and a 
self-conscious use of what could be called 'hysterical slapstick', 
all performed on a mesmeric, deliberately non-musical score that 
suggests the repetitiveness of all events deferring to the rhetoric 
of birth, dissolution, and rebirth.

Choreography: Angela Lamprianidou
Performance: Angela Lamprianidou
Year: 2008

This work represents an exploration of circular movement and the 
philosophical implications of repetition in both life and art.
              </pre>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-green-400 mb-2">Critical Analysis:</h3>
                <blockquote className="text-sm text-white/90 italic">
                  "Loop, by A.Lamprianidou, is a half ironic and half ritual choreographic
                  cameo about symbolic meaning (but also the symbol's impoverishment)
                  in circle-based dance. The author achieves this result by composing
                  a 'solo on spot', where outbalanced 'release' figures alternate with
                  a self-conscious use of what we'll call an 'hysterical slapstick'. 
                  And all that on a mesmeric, deliberately non-musical score, which
                  according to the title, suggests the repetitiveness of all emotional, 
                  kinetic, conceptual 'event' deferring to the rhetoric of birth, 
                  dissolution, rebirth."
                </blockquote>
                 <p className="text-xs text-white mt-2">- Roberto F. Serafide</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                 <p className="text-sm text-white">
                  A ritual exploration of circular movement and 
                  the philosophical implications of repetition.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold mb-2">Key Elements:</h3>
                 <ul className="text-xs text-white space-y-1">
                  <li>• Circular movement</li>
                  <li>• Symbolic meaning</li>
                  <li>• Repetition and ritual</li>
                  <li>• Solo performance</li>
                  <li>• Non-musical score</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold mb-2">Themes:</h3>
                 <ul className="text-xs text-white space-y-1">
                  <li>• Birth and dissolution</li>
                  <li>• Emotional cycles</li>
                  <li>• Conceptual repetition</li>
                  <li>• Symbolic impoverishment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}