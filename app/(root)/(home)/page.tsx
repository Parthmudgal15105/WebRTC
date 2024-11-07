'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

const Home = () => {
  const router = useRouter();

  const createMeeting = () => {
    // Generate a random meeting ID
    const meetingId = Math.random().toString(36).substring(2, 12);
    router.push(`/meeting/${meetingId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 text-white">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Welcome to <span className="text-blue-1">WebRTC Meet</span>
        </h1>
        <p className="text-lg text-gray-400 md:text-xl">
          Create or join meetings with crystal-clear video quality
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 sm:flex-row">
        <Button
          onClick={createMeeting}
          size="lg"
          className="min-w-[200px] bg-blue-1 text-lg hover:bg-blue-1/90"
        >
          Create Meeting
        </Button>
        
        <div className="relative flex items-center">
          <div className="h-[1px] w-full bg-gray-700 sm:w-10"></div>
          <span className="mx-4 text-gray-400">or</span>
          <div className="h-[1px] w-full bg-gray-700 sm:w-10"></div>
        </div>

        <Button
          size="lg" 
          variant="outline"
          className="min-w-[200px] border-gray-700 text-lg text-white hover:bg-dark-3"
          onClick={() => router.push('/join')}
        >
          Join Meeting
        </Button>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <p className="text-gray-400">Quick Start Guide</p>
        <div className="flex flex-wrap justify-center gap-4">
          {['No downloads required', 'End-to-end encryption', 'Free to use'].map((feature) => (
            <div 
              key={feature}
              className="rounded-full bg-dark-3 px-4 py-2 text-sm text-gray-300"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;