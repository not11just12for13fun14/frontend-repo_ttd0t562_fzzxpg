import { useEffect, useState } from 'react'

export default function Catalog() {
  const [items, setItems] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/catalog`).then(r => r.json()).then(d => setItems(d.items || [])).catch(() => setItems([]))
  }, [])

  return (
    <section id="catalog" className="py-10 md:py-14 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Procurement Catalog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((p) => (
            <div key={p.sku} className="bg-slate-800/60 border border-white/10 p-5 rounded-xl text-white">
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold">{p.title}</div>
                <span className="text-xs px-2 py-1 rounded bg-white/10">{p.category}</span>
              </div>
              <div className="text-slate-300 text-sm">SKU: {p.sku}</div>
              <div className="text-slate-300 text-sm">Vendor: {p.vendor || '—'}</div>
              <div className="text-slate-300 text-sm">HSN: {p.hsn || '—'} | GST: {p.gst_rate}%</div>
              <div className="mt-2 text-slate-200 text-sm">{p.specifications}</div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-lg font-bold text-teal-300">₹{Number(p.price).toLocaleString()}</div>
                <button className="px-3 py-1.5 rounded bg-teal-500 hover:bg-teal-400 font-semibold">Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
