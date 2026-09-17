'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowUpRight,
  Bell,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  FileCheck2,
  FileSearch,
  FolderOpen,
  Gauge,
  GraduationCap,
  LayoutDashboard,
  Link2,
  Menu,
  MoreHorizontal,
  Network,
  Plus,
  Search,
  Settings2,
  Sparkles,
  Target,
  Upload,
  UserRound,
  X,
  Zap,
} from 'lucide-react'

const scholarships = [
  { title: 'Horizon STEM Scholars', org: 'Horizon Foundation', amount: '$10,000', deadline: 'Oct 14, 2026', match: 96, tag: 'High match', color: 'coral' },
  { title: 'Future Leaders Fellowship', org: 'Civic Futures', amount: '$7,500', deadline: 'Oct 21, 2026', match: 89, tag: 'Strong fit', color: 'blue' },
  { title: 'Bright Minds Grant', org: 'The Bright Foundation', amount: '$5,000', deadline: 'Nov 02, 2026', match: 84, tag: 'Strong fit', color: 'green' },
]

const nav = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'Scholarships', icon: GraduationCap, count: '128' },
  { label: 'Applications', icon: FileCheck2, count: '4' },
  { label: 'Documents', icon: FolderOpen },
]

export function ScholarshipDashboard() {
  const [activeNav, setActiveNav] = useState('Overview')
  const [showArchitecture, setShowArchitecture] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#f6f7f4] text-[#13253f] selection:bg-[#ff715b] selection:text-white">
      <div className="flex min-h-screen">
        <aside className="hidden w-[248px] shrink-0 flex-col border-r border-[#dce2e6] bg-[#f6f7f4] px-5 py-6 lg:flex">
          <div className="flex items-center gap-3 px-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-[#183450] text-white"><Sparkles size={18} /></div>
            <div><p className="text-[15px] font-semibold tracking-[-0.02em]">Scholarflow</p><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8090a0]">Student workspace</p></div>
          </div>
          <div className="mt-12 flex flex-1 flex-col gap-1">
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#91a0ad]">Workspace</p>
            {nav.map(({ label, icon: Icon, count, active }) => <button key={label} onClick={() => setActiveNav(label)} className={`flex items-center justify-between rounded-xl px-3 py-3 text-left text-[13px] font-medium transition ${activeNav === label ? 'bg-[#e4ecea] text-[#123e43]' : 'text-[#6f7d8b] hover:bg-white hover:text-[#13253f]'}`}><span className="flex items-center gap-3"><Icon size={17} strokeWidth={1.8} />{label}</span>{count && <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-bold text-[#7d8c98]">{count}</span>}</button>)}
            <p className="mb-3 mt-9 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#91a0ad]">Your toolkit</p>
            <button onClick={() => setShowArchitecture(true)} className="flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-medium text-[#6f7d8b] transition hover:bg-white hover:text-[#13253f]"><Network size={17} strokeWidth={1.8} />System architecture</button>
            <button className="flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-medium text-[#6f7d8b] transition hover:bg-white hover:text-[#13253f]"><CircleHelp size={17} strokeWidth={1.8} />How it works</button>
          </div>
          <div className="rounded-2xl bg-[#e7efec] p-4"><div className="flex items-center gap-2 text-[#21615d]"><Zap size={15} fill="currentColor" /><span className="text-[11px] font-bold uppercase tracking-[0.12em]">Pro tip</span></div><p className="mt-2 text-[12px] leading-5 text-[#52716f]">Complete your profile to unlock 42 more matches.</p><Link href="/profile/setup" className="mt-3 inline-block text-[11px] font-bold text-[#21615d] underline underline-offset-4">Complete profile</Link></div>
          <div className="mt-5 flex items-center justify-between border-t border-[#dce2e6] pt-5"><div className="flex items-center gap-2"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0c7b7] text-[11px] font-bold text-[#743e35]">AK</div><div><p className="text-[12px] font-semibold">Alex Kim</p><p className="text-[10px] text-[#8c99a3]">University of Oregon</p></div></div><Settings2 size={16} className="text-[#94a0ab]" /></div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="flex h-[74px] items-center justify-between border-b border-[#dce2e6] px-5 sm:px-8 lg:px-12">
            <div className="flex items-center gap-3 lg:hidden"><button className="rounded-lg p-2 hover:bg-white"><Menu size={19} /></button><span className="font-semibold">Scholarflow</span></div>
            <div className="hidden text-[12px] font-medium text-[#84919d] sm:block">Wednesday, September 17, 2026 <span className="mx-2 text-[#c3cbd0]">/</span> Fall application season</div>
            <div className="ml-auto flex items-center gap-2"><button onClick={() => setSearchOpen(!searchOpen)} className="rounded-lg p-2.5 text-[#637382] hover:bg-white" aria-label="Search"><Search size={18} /></button><button className="relative rounded-lg p-2.5 text-[#637382] hover:bg-white" aria-label="Notifications"><Bell size={18} /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#ff715b]" /></button><div className="ml-2 hidden h-8 w-px bg-[#dce2e6] sm:block" /><button className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-white"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0c7b7] text-[11px] font-bold text-[#743e35]">AK</div><ChevronDown size={14} className="text-[#84919d]" /></button></div>
          </header>
          {searchOpen && <div className="border-b border-[#dce2e6] bg-white px-5 py-3 sm:px-8 lg:px-12"><div className="flex max-w-xl items-center gap-3 rounded-xl border border-[#dce2e6] bg-[#f8faf9] px-3 py-2"><Search size={16} className="text-[#8b99a5]" /><input autoFocus className="w-full bg-transparent text-sm outline-none" placeholder="Search scholarships, applications, or documents..." /><X size={15} className="text-[#9aa5ad]" /></div></div>}

          <div className="mx-auto max-w-[1220px] px-5 py-8 sm:px-8 lg:px-12 lg:py-11">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#e16652]"><span className="h-1.5 w-1.5 rounded-full bg-[#e16652]" />Good afternoon, Alex</div><h1 className="font-serif text-[38px] leading-[1.02] tracking-[-0.045em] text-[#16314d] sm:text-[48px]">Make your next move<br /><em className="font-normal text-[#e16652]">count.</em></h1><p className="mt-4 max-w-md text-[14px] leading-6 text-[#758490]">Your scholarship season at a glance. We found new opportunities that fit where you&apos;re going.</p></div><button onClick={() => setShowArchitecture(true)} className="group flex shrink-0 items-center gap-2 self-start rounded-xl bg-[#163b52] px-4 py-3 text-[12px] font-bold text-white shadow-[0_4px_15px_rgba(22,59,82,0.15)] transition hover:bg-[#24536b] md:self-auto"><Network size={15} />View system map<ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button></div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3"><Metric icon={Target} label="Profile match" value="82%" note="+8% this month" color="coral" /><Metric icon={FileCheck2} label="Applications" value="04" note="2 due this week" color="blue" /><Metric icon={BriefcaseBusiness} label="Potential funding" value="$28.5k" note="Across 12 matches" color="green" /></div>

            <div className="mt-10 grid gap-5 xl:grid-cols-[1.5fr_1fr]">
              <section className="rounded-2xl border border-[#dce2e6] bg-white p-5 sm:p-6"><div className="flex items-center justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8997a2]">Recommended for you</p><h2 className="mt-1 text-[19px] font-semibold tracking-[-0.03em]">Your best matches</h2></div><button className="text-[12px] font-bold text-[#e16652]">View all <span aria-hidden="true">→</span></button></div><div className="mt-5 divide-y divide-[#edf0f1]">{scholarships.map((item) => <Scholarship key={item.title} {...item} />)}</div></section>
              <section className="rounded-2xl bg-[#163b52] p-5 text-white sm:p-6"><div className="flex items-start justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8eb8b2]">Application pulse</p><h2 className="mt-1 text-[19px] font-semibold tracking-[-0.03em]">Keep momentum</h2></div><div className="rounded-lg bg-white/10 p-2"><Gauge size={17} /></div></div><div className="mt-7 flex items-end gap-3"><span className="font-serif text-[54px] leading-none">68</span><span className="mb-1 text-[12px] text-[#a5c5c2]">out of 100<br />readiness score</span></div><div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[68%] rounded-full bg-[#ff947e]" /></div><div className="mt-6 space-y-3 text-[12px] text-[#bfd2d3]"><div className="flex items-center justify-between"><span className="flex items-center gap-2"><Check size={14} className="text-[#8ed0bd]" />Profile completed</span><span className="text-[#8ed0bd]">Done</span></div><div className="flex items-center justify-between"><span className="flex items-center gap-2"><Check size={14} className="text-[#8ed0bd]" />Transcript uploaded</span><span className="text-[#8ed0bd]">Done</span></div><div className="flex items-center justify-between"><span className="flex items-center gap-2"><Clock3 size={14} className="text-[#ffb69e]" />Personal essay</span><span className="text-[#ffb69e]">Next up</span></div></div><button className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#f7f8f5] py-3 text-[12px] font-bold text-[#163b52] transition hover:bg-white">Continue setup <ArrowUpRight size={14} /></button></section>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1fr]"><section className="rounded-2xl border border-[#dce2e6] bg-[#fffefa] p-5 sm:p-6"><div className="flex items-center justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8997a2]">Recent activity</p><h2 className="mt-1 text-[18px] font-semibold">Your application trail</h2></div><MoreHorizontal size={18} className="text-[#9ba7b0]" /></div><div className="mt-5 space-y-4"><Activity icon={Bot} title="AI reviewed your profile" detail="Found 12 new matching scholarships" time="12 min ago" /><Activity icon={Upload} title="Transcript uploaded" detail="Verified and ready to use" time="Yesterday" /><Activity icon={Link2} title="New opportunity saved" detail="Future Leaders Fellowship" time="Sep 15" /></div></section><section className="rounded-2xl border border-[#dce2e6] bg-[#eef4f1] p-5 sm:p-6"><div className="flex items-start justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#5b817c]">From the community</p><h2 className="mt-1 text-[18px] font-semibold text-[#183f43]">Small steps, big outcomes</h2></div><BookOpen size={19} className="text-[#5b817c]" /></div><p className="mt-5 max-w-sm text-[14px] leading-6 text-[#587471]">Students who submit their first application before October 1 are 2.4× more likely to complete the season.</p><button className="mt-4 text-[12px] font-bold text-[#21615d] underline underline-offset-4">Read the guide <span aria-hidden="true">→</span></button></section></div>
          </div>
        </section>
      </div>
      {showArchitecture && <Architecture onClose={() => setShowArchitecture(false)} />}
    </main>
  )
}

function Metric({ icon: Icon, label, value, note, color }: { icon: typeof Target; label: string; value: string; note: string; color: string }) { return <div className="rounded-2xl border border-[#dce2e6] bg-white p-5"><div className="flex items-center justify-between"><span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#85939e]">{label}</span><span className={`rounded-lg p-2 ${color === 'coral' ? 'bg-[#fff0ed] text-[#e16652]' : color === 'blue' ? 'bg-[#eaf0f6] text-[#477193]' : 'bg-[#e9f3ef] text-[#4b887b]'}`}><Icon size={16} /></span></div><div className="mt-4 flex items-baseline gap-3"><span className="font-serif text-[36px] leading-none tracking-[-0.04em]">{value}</span><span className="text-[11px] font-semibold text-[#5c8b7e]">{note}</span></div></div> }
function Scholarship({ title, org, amount, deadline, match, tag, color }: typeof scholarships[number]) { return <div className="flex flex-col gap-4 py-5 first:pt-4 last:pb-1 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-start gap-3"><div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${color === 'coral' ? 'bg-[#fff0ed] text-[#e16652]' : color === 'blue' ? 'bg-[#eaf0f6] text-[#477193]' : 'bg-[#e9f3ef] text-[#4b887b]'}`}><GraduationCap size={17} /></div><div><h3 className="text-[14px] font-semibold">{title}</h3><p className="mt-1 text-[11px] text-[#8a98a2]">{org} <span className="mx-1">·</span> Due {deadline}</p></div></div><div className="flex items-center justify-between gap-5 pl-12 sm:justify-end sm:pl-0"><div className="text-left sm:text-right"><p className="text-[14px] font-bold">{amount}</p><p className={`mt-1 text-[10px] font-bold ${color === 'coral' ? 'text-[#e16652]' : 'text-[#56877d]'}`}>{match}% match <span className="font-medium text-[#94a0a9]">· {tag}</span></p></div><button className="rounded-lg border border-[#dce2e6] px-3 py-2 text-[11px] font-bold text-[#4c6372] transition hover:border-[#163b52] hover:text-[#163b52]">Review</button></div></div> }
function Activity({ icon: Icon, title, detail, time }: { icon: typeof Bot; title: string; detail: string; time: string }) { return <div className="flex items-center gap-3"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#edf2ef] text-[#4b8178]"><Icon size={15} /></div><div className="min-w-0 flex-1"><p className="truncate text-[12px] font-semibold">{title}</p><p className="truncate text-[11px] text-[#8b98a1]">{detail}</p></div><span className="shrink-0 text-[10px] text-[#9aa5ac]">{time}</span></div> }
function Architecture({ onClose }: { onClose: () => void }) { const nodes = [{ icon: UserRound, label: 'You', sub: 'Student workspace', tone: 'navy' }, { icon: Sparkles, label: 'v0', sub: 'Frontend layer', tone: 'coral' }, { icon: LayoutDashboard, label: 'Beautiful frontend', sub: 'Next.js app', tone: 'teal' }, { icon: Network, label: 'GitHub', sub: 'Source of truth', tone: 'blue' }, { icon: Settings2, label: 'OpenCode', sub: 'Orchestration', tone: 'navy' }]; return <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#102238]/55 p-4 backdrop-blur-sm"><div className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl bg-[#f7f8f5] p-6 shadow-2xl sm:p-8"><div className="flex items-start justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#e16652]">System architecture</p><h2 className="mt-1 font-serif text-3xl tracking-[-0.04em]">From idea to opportunity.</h2><p className="mt-2 max-w-lg text-sm leading-6 text-[#758490]">A modular path from the student experience to the systems that power discovery, verification, and submission.</p></div><button onClick={onClose} className="rounded-xl p-2 text-[#80909b] hover:bg-white" aria-label="Close architecture"><X size={19} /></button></div><div className="mt-8 flex flex-col items-center"><div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">{nodes.map((node, index) => <div key={node.label} className="flex items-center gap-2 sm:gap-3"><div className="w-[112px] rounded-2xl border border-[#dce2e6] bg-white p-3 text-center shadow-sm sm:w-[126px]"><div className={`mx-auto flex h-9 w-9 items-center justify-center rounded-xl ${node.tone === 'coral' ? 'bg-[#fff0ed] text-[#e16652]' : node.tone === 'teal' ? 'bg-[#e9f3ef] text-[#4b887b]' : node.tone === 'blue' ? 'bg-[#eaf0f6] text-[#477193]' : 'bg-[#eaf0f6] text-[#34536d]'}`}><node.icon size={17} /></div><p className="mt-2 text-[11px] font-bold">{node.label}</p><p className="mt-0.5 text-[9px] text-[#8b98a1]">{node.sub}</p></div>{index < nodes.length - 1 && <div className="hidden text-[#b3bdc3] sm:block">→</div>}</div>)}</div><div className="my-4 h-7 w-px bg-[#cbd4d5]" /><div className="grid w-full gap-3 sm:grid-cols-3"><ArchCard icon={DatabaseIcon} title="Database" detail="Profile, scholarships, applications" /><ArchCard icon={Link2} title="APIs" detail="Search, notifications, submission" /><ArchCard icon={Bot} title="AI / OCR" detail="Extract, match, personalize" /></div><div className="my-4 h-7 w-px bg-[#cbd4d5]" /><div className="rounded-2xl border border-dashed border-[#e16652]/50 bg-[#fff4f0] px-5 py-4 text-center"><div className="mx-auto flex w-fit items-center gap-2 text-[#d65d4b]"><FileSearch size={17} /><span className="text-[12px] font-bold">Browser agent</span></div><p className="mt-1 text-[11px] text-[#9b6b63]">Discovers and verifies opportunities across external scholarship sites</p></div></div></div></div> }
function DatabaseIcon(props: { size?: number }) { return <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaf0f6] text-[#477193]"><FolderOpen {...props} /></div> }
function ArchCard({ icon: Icon, title, detail }: { icon: typeof Link2 | typeof Bot | typeof DatabaseIcon; title: string; detail: string }) { return <div className="rounded-2xl border border-[#dce2e6] bg-white p-4"><Icon size={17} /><p className="mt-3 text-[12px] font-bold">{title}</p><p className="mt-1 text-[11px] leading-5 text-[#8997a2]">{detail}</p></div> }

export default ScholarshipDashboard
