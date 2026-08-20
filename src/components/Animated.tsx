"use client"

import { useEffect, useState } from "react"

const agents = [
  { title: "Research Agent", desc: "Gathers market data" },
  { title: "Strategy Agent", desc: "Builds campaign plan" },
  { title: "Content Agent", desc: "Writes ad copy" },
  { title: "Analytics Agent", desc: "Tracks performance" },
]

export default function MultiAgent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-white dark:bg-black py-20 px-4 overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center relative">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
          Multi-agent orchestration
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-12">
          AI agents working together to scale your business
        </p>

        {/* SVG Connecting Lines */}
        <svg
          className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 pointer-events-none hidden md:block"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="M100 50 C 300 0, 500 100, 700 50 S 1100 0, 1100 50"
            stroke="url(#glow)"
            strokeWidth="2"
            fill="none"
            className={`path-draw ${visible ? "animate" : ""}`}
          />

          <defs>
            <linearGradient id="glow">
              <stop offset="0%" className="stop-1" />
              <stop offset="100%" className="stop-2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Agent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          {agents.map((agent, i) => (
            <div
              key={agent.title}
              className={`agent-entrance ${
                visible ? "animate-fadeInUp" : ""
              }`}
              style={{
                animationDelay: `${i * 200}ms`,
              }}
            >
              <div className="agent-float">

                {/* Card */}
                <div className="group relative bg-gray-100/80 dark:bg-zinc-900/60 backdrop-blur-xl border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 overflow-hidden">

                  {/* Rotating Glow Border */}
                  <div className="absolute -inset-[1px] rounded-2xl bg-[conic-gradient(from_0deg,transparent,transparent,var(--glow-1),transparent,transparent)] opacity-0 group-hover:opacity-100 animate-spin-slow" />

                  {/* Card Background */}
                  <div className="absolute inset-0 rounded-2xl bg-white dark:bg-zinc-900" />

                  {/* Inner Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/10 dark:group-hover:from-purple-500/20 group-hover:via-pink-500/10 dark:group-hover:via-pink-500/20 group-hover:to-purple-500/10 dark:group-hover:to-purple-500/20 blur-xl transition-all duration-500" />

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-black dark:text-white font-semibold text-lg mb-2">
                      {agent.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {agent.desc}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        :root {
          --glow-1: #6366f1;
          --glow-2: #ec4899;
        }

        .dark {
          --glow-1: #a855f7;
          --glow-2: #ec4899;
        }

        .stop-1 {
          stop-color: var(--glow-1);
        }

        .stop-2 {
          stop-color: var(--glow-2);
        }

        /* Card entrance */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .agent-entrance {
          opacity: 0;
          transform: translateY(32px);
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out forwards;
        }

        /* Floating animation is isolated from entrance animation */
        @keyframes float {
          0%,
          100% {
            transform: translateY(-8px);
          }

          50% {
            transform: translateY(8px);
          }
        }

        .agent-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Rotating glow */
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }

        /* SVG path drawing */
        .path-draw {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
        }

        .path-draw.animate {
          animation: draw 2s ease-out forwards;
          animation-delay: 800ms;
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .agent-float,
          .animate-spin-slow,
          .path-draw.animate {
            animation: none;
          }

          .agent-entrance {
            opacity: 1;
            transform: none;
          }

          .path-draw {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  )
}