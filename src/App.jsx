import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="flex gap-8 items-center justify-center mb-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo h-24 w-24 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react h-24 w-24 hover:drop-shadow-[0_0_2em_#61dafbaa]" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-8">Vite + React</h1>
      <div className="bg-gray-800/50 rounded-xl p-6 shadow-lg max-w-md">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="mb-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          count is {count}
        </button>
        <p className="text-gray-300 mb-4">
          Edit <code className="bg-gray-700 px-1 py-0.5 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-8 text-gray-400 text-sm">
        Click on the Vite and React logos to learn more
      </p>
      
      {/* Tailwind CSS Test Element */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">Tailwind CSS is working!</h2>
        <button className="
          px-6 py-3 
          bg-gradient-to-r from-purple-500 to-pink-500 
          hover:from-pink-500 hover:to-purple-500
          text-white font-bold rounded-full 
          transform hover:scale-110 
          transition-all duration-300 
          shadow-lg hover:shadow-xl 
          focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50
          animate-pulse hover:animate-none
          sm:text-sm md:text-base
        ">
          Hover me to see Tailwind in action!
        </button>
      </div>
    </div>
  )
}

export default App
