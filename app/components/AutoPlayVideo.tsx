'use client';

export default function AutoPlayVideo() {
  return (
    <div className="w-full max-w-lg mx-auto bg-black overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto"
        onEnded={(e) => {
          // Restart video immediately when it ends
          e.currentTarget.currentTime = 0;
          e.currentTarget.play();
        }}
      >
        <source src="/Videios/MainComp_4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}