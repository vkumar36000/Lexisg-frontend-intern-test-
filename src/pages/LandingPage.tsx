// pages/LandingPage.tsx
import { useNavigate } from 'react-router-dom';

// This is just the homepage thingy
export default function LandingPage() {
  const goToChat = useNavigate(); // renamed just for vibes

  return (
    <div className="bg-gradient-to-b from-white to-purple-50 min-h-screen flex flex-col">
      {/* Nav Bar section */}
      <header className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center space-x-2">
          {/* Random logo from Framer – looks neat */}
          <img
            src="https://framerusercontent.com/images/y1vxYzWeQQz4RPfqLvlM4Mk1UTE.svg"
            alt="Lexi AI Logo"
            className="h-10"
          />
          <h1 className="text-2xl font-bold text-purple-700">lexi ai</h1>
        </div>

        {/* Auth buttons (don't actually work yet lol) */}
        <div className="space-x-4">
          <button className="text-purple-600 font-medium">Log in</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
            Sign Up
          </button>
        </div>
      </header>

      {/* Main content section – splash screen kinda thing */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <div className="relative text-7xl sm:text-9xl font-bold">
          <span className="text-gray-800">lexi</span>
          <span className="text-blue-400">ai</span>

          {/* This beta tag looks cool but it's kinda floating lol */}
          <span className="absolute top-0 right-[-2rem] text-xs border border-purple-300 text-purple-600 rounded px-2 py-1">
            beta
          </span>
        </div>

        <div className="mt-6 text-lg text-gray-600 max-w-xl">
          Your AI-powered legal assistant to draft, review, and manage contracts effortlessly.
        </div>

        {/* CTA button - go to chat interface */}
        <button
          onClick={() => goToChat('/chat')} // feels weird calling navigate here but yeah
          className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg shadow-md transition"
        >
          Get Started
        </button>
      </main>

      {/* Feature blurbs – honestly added these just to fill space 😅 */}
      <section className="mt-10 mb-20 flex flex-wrap justify-center gap-6 text-sm">
        {[
          { label: 'Draft Agreements', icon: '📘' },
          { label: 'Negotiate Contracts', icon: '🤝' },
          { label: 'Manage Inventory', icon: '🗂️' },
          { label: 'Track and Remind', icon: '🗓️' },
        ].map((tool) => (
          <div
            key={tool.label}
            className="flex items-center bg-white border rounded-xl px-4 py-2 shadow-sm gap-2"
          >
            <span className="text-lg">{tool.icon}</span>
            <span className="text-purple-700 font-medium">{tool.label}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
