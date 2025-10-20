import Link from "next/link";

const WorkshopPlaceholder = ({ title }: { title: string }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black font-mono text-white">
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url('/yoga_background.jpg')`,
          backgroundSize: '100% auto',
          backgroundPosition: 'top center',
        }}
      />
      <div className="relative z-10 p-8 md:p-12">
        <div className="fixed top-0 left-0 w-full bg-black/50 z-20">
          <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
            <div className="flex space-x-4 text-sm font-bold">
              <Link href="/" className=" transition-colors">
                Home
              </Link>
              <Link href="/workshop" className=" transition-colors">
                Workshops
              </Link>
            </div>
            <Link
              href="/workshop"
              className="text-white  transition-colors text-sm bg-black/40 px-3 py-1 font-bold"
            >
              Back to Workshops
            </Link>
          </div>
        </div>

        <div className="pt-20 max-w-4xl mx-auto">
          <div className="space-y-4 text-sm leading-relaxed">
            <h1 className="text-xl font-bold mb-4">{title}</h1>
            <div className="my-8">
              <div className="bg-black/60 p-6 border border-white/20 text-center text-white/70">
                [Content for this workshop is pending.]
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-md">
        <div className="bg-white px-4 py-2 text-center">
          <p className="text-green-600 text-xs">
            This site is now just an archive. My webmaster Didi has passed away. Thanks for the long-time collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkshopPlaceholder;