import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Catalog from './components/Catalog'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Dashboard />
      <Catalog />
      <section id="assistant" className="py-14 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">AI Assistant</h2>
          <AssistantWidget />
        </div>
      </section>
      <footer className="py-8 text-center text-slate-400 text-sm">© {new Date().getFullYear()} Synapsis</footer>
    </div>
  )
}

import { useState } from 'react'
function AssistantWidget() {
  const [q, setQ] = useState('How many items are low in inventory?')
  const [a, setA] = useState('')
  const [loading, setLoading] = useState(false)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const ask = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/ai/ask`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ role: 'user', content: q }) })
      const data = await res.json()
      setA(data.answer || 'No response')
    } catch (e) {
      setA('Failed to reach assistant')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-slate-800/60 border border-white/10 rounded-xl p-4 text-white">
      <div className="flex gap-3">
        <input value={q} onChange={e => setQ(e.target.value)} className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 outline-none" placeholder="Ask Synapsis..." />
        <button onClick={ask} className="px-4 py-2 rounded bg-teal-500 hover:bg-teal-400 font-semibold">Ask</button>
      </div>
      <div className="mt-3 text-slate-200 whitespace-pre-line min-h-[48px]">{loading ? 'Thinking…' : a}</div>
    </div>
  )
}

export default App
