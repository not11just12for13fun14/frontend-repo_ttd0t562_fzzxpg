import { useEffect, useState } from 'react'
import { BarChart, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { ClipboardCheck, ShoppingCart, Thermometer, BadgeAlert } from 'lucide-react'

export default function Dashboard() {
  const [data, setData] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/dashboard/summary`).then(r => r.json()).then(setData).catch(() => setData(null))
  }, [])

  return (
    <section id="dashboard" className="py-10 md:py-14 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Role-based Dashboard</h2>
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <KPI icon={<ClipboardCheck className="w-5 h-5" />} label="Reports to Validate" value={data?.cards?.reports_to_validate ?? 0} />
          <KPI icon={<ShoppingCart className="w-5 h-5" />} label="Pending Requisitions" value={data?.cards?.pending_requisitions ?? 0} />
          <KPI icon={<Thermometer className="w-5 h-5" />} label="Low Stock" value={data?.cards?.low_stock ?? 0} />
          <KPI icon={<BadgeAlert className="w-5 h-5" />} label="NABL Compliance" value={data?.cards?.nabl_compliance_pending ?? 0} />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="bg-slate-800/60 border border-white/10 p-4 rounded-xl">
            <h3 className="text-white font-semibold mb-2">Monthly P&L</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data?.pnl || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2b3340" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#34d399" strokeWidth={2} />
                  <Line type="monotone" dataKey="cost" stroke="#60a5fa" strokeWidth={2} />
                  <Line type="monotone" dataKey="profit" stroke="#fbbf24" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-slate-800/60 border border-white/10 p-4 rounded-xl">
            <h3 className="text-white font-semibold mb-2">Spend Analysis</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data?.spend || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2b3340" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="reagents" stackId="a" fill="#60a5fa" />
                  <Bar dataKey="consumables" stackId="a" fill="#34d399" />
                  <Bar dataKey="logistics" stackId="a" fill="#fbbf24" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function KPI({ icon, label, value }) {
  return (
    <div className="bg-slate-800/60 border border-white/10 p-4 rounded-xl flex items-center gap-3 text-white">
      <div className="p-2 rounded-lg bg-white/10">{icon}</div>
      <div>
        <div className="text-sm text-slate-300">{label}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    </div>
  )
}
