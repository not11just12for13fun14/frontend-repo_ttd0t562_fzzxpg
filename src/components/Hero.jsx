import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="backdrop-blur-sm bg-slate-900/40 rounded-2xl p-6 md:p-10 border border-white/10">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Synapsis</h1>
            <p className="mt-3 md:mt-4 text-slate-200 max-w-3xl">An enterprise-grade LIMS and Supply Chain platform for medical diagnostics. Role-aware, analyzer-friendly, and procurement-ready.</p>
            <div className="mt-6 flex gap-3">
              <a href="#dashboard" className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-white font-semibold transition">Open Dashboard</a>
              <a href="#catalog" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition">Explore Catalog</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
    </section>
  )
}
