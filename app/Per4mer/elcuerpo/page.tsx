import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/Header";

export default function ElCuerpoPage() {
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
          <h1 className="text-2xl font-bold mb-8">el cuerpo del otro</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <pre className="whitespace-pre-wrap text-sm leading-relaxed text-white/90">
"El cuerpo del otro" (The body of the other) is a choreographic work 
that explores the relationship between medical knowledge and emotional 
landscapes. The piece combines medical explanations with movement to 
create a unique performance experience.

The work examines how we understand and relate to the bodies of others, 
both from a clinical perspective and through the lens of human emotion 
and connection. It questions the boundaries between scientific observation 
and personal experience.

Choreography: Angela Lamprianidou
Performance: Angela Lamprianidou
Location: Barcelona
Year: 2008

This piece represents an early exploration of the intersection between 
medical knowledge and artistic expression, a theme that would continue 
to develop throughout Lamprianidou's work.
              </pre>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-green-400 mb-2">Press Review:</h3>
                <blockquote className="text-sm text-white/90 italic">
                  "An excellent composition which was intelligently based on the mixture 
                  of medical explanation with emotional landscapes. While a voice from
                  the off commented on reactions of the bodies on stage, the audience were
                  alternating between sympathetic involvement and rational distance, which
                  enabled them to experience their own bodies at the same time."
                </blockquote>
                 <p className="text-xs text-white mt-2">- Iris Schabert</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                 <p className="text-sm text-white">
                  An early exploration of the intersection between 
                  medical knowledge and artistic expression.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold mb-2">Key Themes:</h3>
                 <ul className="text-xs text-white space-y-1">
                  <li>• Medical knowledge</li>
                  <li>• Emotional landscapes</li>
                  <li>• Body awareness</li>
                  <li>• Clinical vs. personal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}