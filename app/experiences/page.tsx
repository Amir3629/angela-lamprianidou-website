'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ExperiencesPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to choreographer page with experiences view
    router.push('/choreographer?showExperiences=true');
  }, [router]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg">Redirecting to Experiences...</p>
      </div>
    </div>
  );
}