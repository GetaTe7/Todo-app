import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-8">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-center text-blue-400">Advanced Todo App</h1>
      </header>
      
      <main className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
