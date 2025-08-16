import reactLogo from "./assets/react.svg";
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function LiquidLandingPage() {
  const [greetMsg, setGreetMsg] = useState("")
  const [name, setName] = useState("")

  async function greet() {
    // Simulating the Tauri invoke for demo purposes
    setGreetMsg(`Hello ${name}! Welcome to the liquid experience.`)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 overflow-hidden relative">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="liquid-blob liquid-blob-1"></div>
        <div className="liquid-blob liquid-blob-2"></div>
        <div className="liquid-blob liquid-blob-3"></div>
      </div>

      {/* Glass morphism container */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen">
        {/* Header with liquid animation */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 tracking-tight">
            Welcome to Liquid
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Experience the future of React development with fluid animations and Apple-inspired design
          </p>
        </div>

        {/* Logo section with liquid hover effects */}
        <div className="flex items-center justify-center gap-8 mb-16 animate-fade-in-up animation-delay-200">
          <a href="https://vitejs.dev" target="_blank" className="logo-container group" rel="noreferrer">
            <div className="glass-card p-6 rounded-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <img
                src="/vite.svg"
                className="w-20 h-20 transition-all duration-700 group-hover:drop-shadow-[0_0_30px_rgba(255,165,0,0.6)]"
                alt="Vite logo"
              />
            </div>
          </a>

          <a href="https://tauri.app" target="_blank" className="logo-container group" rel="noreferrer">
            <div className="glass-card p-6 rounded-3xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
              <img
                src="/tauri.svg"
                className="w-20 h-20 transition-all duration-700 group-hover:drop-shadow-[0_0_30px_rgba(36,200,219,0.6)]"
                alt="Tauri logo"
              />
            </div>
          </a>

          <a href="https://reactjs.org" target="_blank" className="logo-container group" rel="noreferrer">
            <div className="glass-card p-6 rounded-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <img
                src={reactLogo}
                className="w-20 h-20 transition-all duration-700 group-hover:drop-shadow-[0_0_30px_rgba(97,218,251,0.6)] group-hover:animate-spin"
                alt="React logo"
              />
            </div>
          </a>
        </div>

        <p className="text-slate-500 dark:text-slate-400 mb-12 animate-fade-in-up animation-delay-400">
          Click on the logos to explore these amazing technologies
        </p>

        {/* Interactive form with liquid design */}
        <form
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md animate-fade-in-up animation-delay-600"
          onSubmit={(e) => {
            e.preventDefault()
            greet()
          }}
        >
          <div className="relative flex-1 justify-center items-center">
            <input
              id="greet-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Enter your name..."
              className="w-full px-6 py-2 rounded-2xl glass-input text-slate-800 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
            />
          </div>

          <Button
            type="submit"
            className="liquid-button px-8 py-5 rounded-2xl font-semibold text-white transition-all duration-500 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Greet</span>
          </Button>
        </form>

        {/* Greeting message with liquid animation */}
        {greetMsg && (
          <div className="mt-8 animate-fade-in-up">
            <div className="glass-card px-8 py-4 rounded-2xl">
              <p className="text-lg text-slate-700 dark:text-slate-300 font-medium">{greetMsg}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
