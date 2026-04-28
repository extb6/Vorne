'use client'

import { useEffect, useState } from 'react'

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide preloader when page is fully loaded
    const handleLoad = () => setIsLoading(false)
    
    if (document.readyState === 'complete') {
      setIsLoading(false)
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <style>{`
        @keyframes pulse-heartbeat {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          25% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
          75% {
            transform: scale(1.15);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.4),
                        0 0 40px rgba(6, 182, 212, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.8),
                        0 0 80px rgba(6, 182, 212, 0.4);
          }
        }

        @keyframes rotate-360 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fade-in-out {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        .preloader-logo {
          animation: pulse-heartbeat 1.5s ease-in-out infinite;
        }

        .preloader-glow {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        .preloader-ring {
          animation: rotate-360 3s linear infinite;
        }

        .preloader-dot {
          animation: fade-in-out 1.5s ease-in-out infinite;
        }

        .preloader-dot:nth-child(2) {
          animation-delay: 0.3s;
        }

        .preloader-dot:nth-child(3) {
          animation-delay: 0.6s;
        }
      `}</style>

      <div className="flex flex-col items-center justify-center gap-6">
        {/* Rotating ring with gradient */}
        <div className="relative w-32 h-32">
          <div className="preloader-glow absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-accent" />
          <div className="preloader-ring absolute inset-2 rounded-full border-2 border-transparent border-b-primary opacity-60" />
          
          {/* Center logo */}
          <div className="preloader-logo absolute inset-0 flex items-center justify-center">
            <img
              src="/images/favicon.png"
              alt="Loading"
              className="w-16 h-16"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes moveProgress {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
}
