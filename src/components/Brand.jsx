import { Wrench } from 'lucide-react'
export default function Brand({ light = false }) { return <div className={`flex items-center gap-2 font-bold tracking-tight ${light ? 'text-white' : 'text-ink'}`}><span className="rounded-lg bg-brand-600 p-1.5 text-white"><Wrench size={17} strokeWidth={2.5} /></span><span>Fix<span className="text-brand-600">@</span>Home</span></div> }
