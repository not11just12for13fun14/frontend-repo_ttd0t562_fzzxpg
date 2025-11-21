import { useState } from 'react'
import { Menu, FlaskConical, LayoutDashboard, ShoppingBasket, BotMessageSquare } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3 text-white">
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2 font-semibold">
            <FlaskConical className="w-5 h-5 text-teal-400" />
            <span>Synapsis</span>
          </div>
        </div>
        <nav className={`absolute md:static left-0 right-0 top-14 md:top-auto bg-slate-900 md:bg-transparent border-b md:border-none border-white/10 md:flex items-center gap-6 p-4 md:p-0 ${open ? '' : 'hidden md:flex'}`}>
          <a href="#dashboard" className="text-slate-200 hover:text-white flex items-center gap-2"><LayoutDashboard className="w-4 h-4"/> Dashboard</a>
          <a href="#catalog" className="text-slate-200 hover:text-white flex items-center gap-2"><ShoppingBasket className="w-4 h-4"/> Catalog</a>
          <a href="#assistant" className="text-slate-200 hover:text-white flex items-center gap-2"><BotMessageSquare className="w-4 h-4"/> Assistant</a>
        </nav>
        <div className="hidden md:block">
          <a href="/test" className="text-sm text-slate-300 hover:text-white">System Check</a>
        </div>
      </div>
    </header>
  )
}
