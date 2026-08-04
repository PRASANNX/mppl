'use client';

import { useState, useEffect } from 'react';
import {
  LayoutDashboard, Calendar, FileText, Link2, Lock, LogOut,
  Save, CheckCircle, Eye, EyeOff, Edit3, Globe, MessageCircle,
  Trophy, Users, MapPin, ChevronRight, AlertCircle, X, Menu, Scale
} from 'lucide-react';
import Link from 'next/link';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Leg {
  label: string;
  city: string;
  date: string;
  venue: string;
  address: string;
  rating: string;
  confirmed: boolean;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface SiteContent {
  legs: Leg[];
  faqs: FaqItem[];
  whatsapp: string;
  registrationLink: string;
  instagramLink: string;
  announcementText: string;
  founderName: string;
  founderTitle: string;
  prizePool: string;
}

// ─── Default Content (mirrors live site) ─────────────────────────────────────
const DEFAULT_CONTENT: SiteContent = {
  legs: [
    {
      label: 'LEG 1 — INDORE',
      city: 'INDORE',
      date: 'Aug 21, 22, 23',
      venue: 'Surya Pickleball Academy',
      address: '1427, Kanadia Main Rd, Alok Nagar, Indore, MP 452016',
      rating: '5.0',
      confirmed: true,
    },
    {
      label: 'LEG 2 — BHOPAL',
      city: 'BHOPAL',
      date: 'September 2026',
      venue: 'House of Dink — The Pickleball Zone',
      address: 'Plot 81/2, Rohit Nagar, Bawadiya Kalan, Bhopal, MP 462039',
      rating: '4.9',
      confirmed: true,
    },
    {
      label: 'LEG 3 — JABALPUR',
      city: 'JABALPUR',
      date: 'To Be Announced',
      venue: '',
      address: '',
      rating: '',
      confirmed: false,
    },
    {
      label: 'LEG 4 — INDORE',
      city: 'INDORE',
      date: 'To Be Announced',
      venue: '',
      address: '',
      rating: '',
      confirmed: false,
    },
  ],
  faqs: [
    { question: 'Who can participate in MPPL?', answer: 'MPPL is open for everyone aged 10 to 60 years — from complete beginners to professional players. All skill levels are welcome.' },
    { question: 'Where are the qualifying rounds held?', answer: '4 qualifying rounds will be held across 4 different cities in Madhya Pradesh. Exact venues will be announced soon.' },
    { question: 'How does the player auction work?', answer: 'After the qualifying rounds, top-performing players will be drafted into franchise teams through a live auction process.' },
    { question: 'What is the total prize pool?', answer: 'The total prize pool for MPPL 2026 is ₹18 Lac+, distributed across multiple categories and placements.' },
    { question: 'When does MPPL start?', answer: 'The qualifying rounds are planned to start in August 2026. Exact dates and registration details will be announced on our social channels.' },
    { question: 'How many categories are there?', answer: 'MPPL features 15+ categories covering different age groups, skill levels, and formats to ensure everyone has a competitive bracket.' },
  ],
  whatsapp: '+91 97545 44265',
  registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdk_8gc2OUA3sY-QJO_PjPnK98PIC9xzeYEFQRwNyxDDpiHbg/viewform',
  instagramLink: 'https://www.instagram.com/mpplleague?igsh=MWd5MDMweHdmbnZ1dg==',
  announcementText: 'First qualifying date Indore (Aug 21-23) announced. Register now.',
  founderName: 'Suryansh Yadav',
  founderTitle: 'Founder & CEO, MPPL',
  prizePool: '₹18 Lakhs+',
};

const ADMIN_PIN = 'MPPL2026';

// ─── Sidebar nav items ────────────────────────────────────────────────────────
const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'schedule', label: 'Schedule / Legs', icon: Calendar },
  { id: 'content', label: 'Site Content', icon: FileText },
  { id: 'links', label: 'Links & Contacts', icon: Link2 },
];

// ─── Small helper components ──────────────────────────────────────────────────
function SaveBadge({ saved }: { saved: boolean }) {
  if (!saved) return null;
  return (
    <span className="inline-flex items-center gap-1 text-xs font-bold text-neon-green animate-pulse">
      <CheckCircle size={13} /> Saved
    </span>
  );
}

function Field({
  label,
  value,
  onChange,
  multiline = false,
  placeholder = '',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  placeholder?: string;
}) {
  const base =
    'w-full bg-[#111] border border-white/10 rounded text-net-white font-dm-sans text-sm px-3 py-2 focus:outline-none focus:border-neon-orange/60 transition-colors resize-none';
  return (
    <div className="flex flex-col gap-1">
      <label className="font-dm-sans text-xs font-bold uppercase tracking-widest text-white/40">{label}</label>
      {multiline ? (
        <textarea className={base} rows={3} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
      ) : (
        <input className={base} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function CPanelPage() {
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [pinError, setPinError] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [content, setContent] = useState<SiteContent>(DEFAULT_CONTENT);
  const [savedMap, setSavedMap] = useState<Record<string, boolean>>({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<number | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('mppl_cpanel_content');
    if (stored) {
      try { setContent(JSON.parse(stored)); } catch {}
    }
  }, []);

  const save = (key: string, newContent?: SiteContent) => {
    const toSave = newContent ?? content;
    localStorage.setItem('mppl_cpanel_content', JSON.stringify(toSave));
    setSavedMap(m => ({ ...m, [key]: true }));
    setTimeout(() => setSavedMap(m => ({ ...m, [key]: false })), 2500);
  };

  const handleLogin = () => {
    if (pin === ADMIN_PIN) {
      setAuthed(true);
      setPinError(false);
    } else {
      setPinError(true);
      setPin('');
    }
  };

  const updateLeg = (i: number, field: keyof Leg, value: string | boolean) => {
    const newLegs = content.legs.map((l, idx) => idx === i ? { ...l, [field]: value } : l);
    setContent(c => ({ ...c, legs: newLegs }));
  };

  const updateFaq = (i: number, field: keyof FaqItem, value: string) => {
    const newFaqs = content.faqs.map((f, idx) => idx === i ? { ...f, [field]: value } : f);
    setContent(c => ({ ...c, faqs: newFaqs }));
  };

  // ─── Login Screen ───────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="text-center mb-10">
            <div className="font-bebas text-5xl text-neon-orange tracking-widest mb-1">MPPL</div>
            <div className="font-dm-sans text-xs text-white/40 uppercase tracking-[4px]">Control Panel</div>
          </div>

          <div className="bg-[#111] border border-white/10 p-8 rounded-xl shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-neon-orange/10 border border-neon-orange/30 flex items-center justify-center">
                <Lock size={18} className="text-neon-orange" />
              </div>
              <div>
                <div className="font-bebas text-xl text-net-white tracking-wide">ADMIN ACCESS</div>
                <div className="font-dm-sans text-xs text-white/40">Enter your access PIN to continue</div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type={showPin ? 'text' : 'password'}
                  placeholder="Enter PIN"
                  value={pin}
                  onChange={e => { setPin(e.target.value); setPinError(false); }}
                  onKeyDown={e => e.key === 'Enter' && handleLogin()}
                  className={`w-full bg-[#0a0a0a] border ${pinError ? 'border-red-500' : 'border-white/10'} rounded-lg text-net-white font-dm-sans text-base px-4 py-3 pr-12 focus:outline-none focus:border-neon-orange/50 transition-colors`}
                />
                <button
                  onClick={() => setShowPin(s => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPin ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {pinError && (
                <div className="flex items-center gap-2 text-red-400 text-xs font-dm-sans">
                  <AlertCircle size={14} /> Incorrect PIN. Please try again.
                </div>
              )}

              <button
                onClick={handleLogin}
                className="w-full bg-neon-orange text-pure-black font-bebas text-xl py-3 rounded-lg hover:bg-neon-orange/90 transition-colors tracking-wide"
              >
                UNLOCK PANEL
              </button>
            </div>
          </div>

          <div className="text-center mt-6">
            <Link href="/" className="font-dm-sans text-xs text-white/30 hover:text-white/60 transition-colors">
              ← Back to site
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ─── Dashboard Tab ──────────────────────────────────────────────────────────
  const confirmedLegs = content.legs.filter(l => l.confirmed).length;
  const stats = [
    { label: 'Qualifying Legs', val: '4', sub: `${confirmedLegs} confirmed`, icon: MapPin, color: 'text-neon-orange' },
    { label: 'Prize Pool', val: content.prizePool, sub: 'Total distribution', icon: Trophy, color: 'text-yellow-400' },
    { label: 'Draft Pool', val: '192', sub: 'Qualified players', icon: Users, color: 'text-neon-green' },
    { label: 'Franchise Squads', val: '8', sub: 'League teams', icon: Globe, color: 'text-blue-400' },
  ];

  // ─── Authenticated Panel ────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#090909] flex font-dm-sans">

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── Sidebar ─────────────────────────────────────────────────────────── */}
      <aside className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-[#0d0d0d] border-r border-white/5 flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        {/* Logo */}
        <div className="p-6 border-b border-white/5">
          <div className="font-bebas text-2xl text-neon-orange tracking-widest">MPPL</div>
          <div className="font-dm-sans text-[10px] text-white/30 uppercase tracking-[3px]">Control Panel</div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 flex flex-col gap-1">
          {navItems.map(item => {
            const Icon = item.icon;
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? 'bg-neon-orange/10 text-neon-orange border border-neon-orange/20'
                    : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                }`}
              >
                <Icon size={17} />
                {item.label}
                {active && <ChevronRight size={14} className="ml-auto" />}
              </button>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="p-4 border-t border-white/5 flex flex-col gap-2">
          <Link
            href="/rules"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs text-white/30 hover:text-white/60 transition-colors"
          >
            <Scale size={14} /> View Rules Page
          </Link>
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs text-white/30 hover:text-white/60 transition-colors"
          >
            <Eye size={14} /> View Live Site
          </Link>
          <button
            onClick={() => setAuthed(false)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs text-red-400/60 hover:text-red-400 transition-colors"
          >
            <LogOut size={14} /> Logout
          </button>
        </div>
      </aside>

      {/* ── Main Content ─────────────────────────────────────────────────────── */}
      <main className="flex-1 min-w-0 flex flex-col">

        {/* Top bar */}
        <header className="h-14 border-b border-white/5 flex items-center justify-between px-4 md:px-8 bg-[#0d0d0d] sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(s => !s)} className="md:hidden text-white/40 hover:text-white/70">
              <Menu size={20} />
            </button>
            <div className="font-bebas text-net-white tracking-wide text-lg">
              {navItems.find(n => n.id === activeTab)?.label}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="text-xs text-white/30 hidden sm:block">Admin Mode Active</span>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 md:p-8">

          {/* ── DASHBOARD ─────────────────────────────────────────────────── */}
          {activeTab === 'dashboard' && (
            <div className="flex flex-col gap-8 max-w-5xl">
              <div>
                <h1 className="font-bebas text-3xl text-net-white tracking-wide mb-1">Welcome back 👋</h1>
                <p className="text-sm text-white/40">Manage your MPPL site content from here.</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={i} className="bg-[#111] border border-white/5 rounded-xl p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-white/30 uppercase tracking-widest">{s.label}</span>
                        <Icon size={16} className={s.color} />
                      </div>
                      <div className={`font-bebas text-3xl tracking-wide mb-1 ${s.color}`}>{s.val}</div>
                      <div className="text-xs text-white/30">{s.sub}</div>
                    </div>
                  );
                })}
              </div>

              {/* Legs status */}
              <div className="bg-[#111] border border-white/5 rounded-xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-bebas text-xl text-net-white tracking-wide">LEG STATUS</h2>
                  <button onClick={() => setActiveTab('schedule')} className="text-xs text-neon-orange hover:underline">Edit →</button>
                </div>
                <div className="flex flex-col gap-3">
                  {content.legs.map((leg, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${leg.confirmed ? 'bg-neon-green' : 'bg-white/20'}`} />
                        <div>
                          <div className="text-sm font-medium text-net-white">{leg.label}</div>
                          <div className="text-xs text-white/30">{leg.date || 'TBA'}</div>
                        </div>
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${leg.confirmed ? 'bg-neon-green/10 text-neon-green' : 'bg-white/5 text-white/30'}`}>
                        {leg.confirmed ? 'CONFIRMED' : 'TBA'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div className="bg-[#111] border border-white/5 rounded-xl p-6">
                <h2 className="font-bebas text-xl text-net-white tracking-wide mb-5">QUICK LINKS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <a href={content.registrationLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-lg px-4 py-3 text-sm text-white/60 hover:text-white/90 transition-colors">
                    <Edit3 size={14} /> Registration Form
                  </a>
                  <a href={`https://wa.me/${content.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-lg px-4 py-3 text-sm text-white/60 hover:text-white/90 transition-colors">
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                  <Link href="/format" target="_blank" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-lg px-4 py-3 text-sm text-white/60 hover:text-white/90 transition-colors">
                    <FileText size={14} /> Format Page
                  </Link>
                  <Link href="/rules" target="_blank" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-lg px-4 py-3 text-sm text-white/60 hover:text-white/90 transition-colors">
                    <Scale size={14} /> Rules Page
                  </Link>
                </div>
              </div>

              {/* Info note */}
              <div className="flex items-start gap-3 bg-neon-orange/5 border border-neon-orange/20 rounded-xl p-4">
                <AlertCircle size={16} className="text-neon-orange shrink-0 mt-0.5" />
                <p className="text-xs text-white/50 leading-relaxed">
                  Changes saved here are stored locally for reference. To apply them to the live site, update the matching component files and push to Git. Use this panel to plan & track content updates.
                </p>
              </div>
            </div>
          )}

          {/* ── SCHEDULE ──────────────────────────────────────────────────── */}
          {activeTab === 'schedule' && (
            <div className="flex flex-col gap-6 max-w-4xl">
              <div>
                <h1 className="font-bebas text-3xl text-net-white tracking-wide mb-1">SCHEDULE / LEGS</h1>
                <p className="text-sm text-white/40">Edit qualifying leg details. Save to record changes.</p>
              </div>

              {content.legs.map((leg, i) => (
                <div key={i} className="bg-[#111] border border-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${leg.confirmed ? 'bg-neon-green' : 'bg-white/20'}`} />
                      <h3 className="font-bebas text-xl text-net-white tracking-wide">{leg.label}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <SaveBadge saved={!!savedMap[`leg_${i}`]} />
                      <label className="flex items-center gap-2 cursor-pointer">
                        <span className="text-xs text-white/40">Confirmed</span>
                        <div
                          onClick={() => updateLeg(i, 'confirmed', !leg.confirmed)}
                          className={`w-10 h-5 rounded-full transition-colors relative ${leg.confirmed ? 'bg-neon-green' : 'bg-white/10'}`}
                        >
                          <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${leg.confirmed ? 'right-0.5' : 'left-0.5'}`} />
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <Field label="City" value={leg.city} onChange={v => updateLeg(i, 'city', v)} />
                    <Field label="Date" value={leg.date} onChange={v => updateLeg(i, 'date', v)} placeholder="e.g. Aug 21, 22, 23" />
                    <Field label="Venue Name" value={leg.venue} onChange={v => updateLeg(i, 'venue', v)} placeholder="e.g. Surya Pickleball Academy" />
                    <Field label="Google Rating" value={leg.rating} onChange={v => updateLeg(i, 'rating', v)} placeholder="e.g. 5.0" />
                  </div>
                  <div className="mb-4">
                    <Field label="Full Address" value={leg.address} onChange={v => updateLeg(i, 'address', v)} placeholder="Full street address" />
                  </div>

                  <button
                    onClick={() => save(`leg_${i}`)}
                    className="flex items-center gap-2 bg-neon-orange text-pure-black font-bebas text-base px-5 py-2 rounded-lg hover:bg-neon-orange/90 transition-colors"
                  >
                    <Save size={14} /> SAVE LEG {i + 1}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* ── CONTENT ───────────────────────────────────────────────────── */}
          {activeTab === 'content' && (
            <div className="flex flex-col gap-6 max-w-4xl">
              <div>
                <h1 className="font-bebas text-3xl text-net-white tracking-wide mb-1">SITE CONTENT</h1>
                <p className="text-sm text-white/40">Manage key text content and FAQ entries.</p>
              </div>

              {/* General content */}
              <div className="bg-[#111] border border-white/5 rounded-xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bebas text-xl text-net-white tracking-wide">GENERAL CONTENT</h3>
                  <SaveBadge saved={!!savedMap['general']} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <Field label="Founder Name" value={content.founderName} onChange={v => setContent(c => ({ ...c, founderName: v }))} />
                  <Field label="Founder Title" value={content.founderTitle} onChange={v => setContent(c => ({ ...c, founderTitle: v }))} />
                  <Field label="Prize Pool (display)" value={content.prizePool} onChange={v => setContent(c => ({ ...c, prizePool: v }))} />
                </div>
                <Field label="Announcement Strip Text" value={content.announcementText} onChange={v => setContent(c => ({ ...c, announcementText: v }))} multiline />

                <button
                  onClick={() => save('general')}
                  className="mt-4 flex items-center gap-2 bg-neon-orange text-pure-black font-bebas text-base px-5 py-2 rounded-lg hover:bg-neon-orange/90 transition-colors"
                >
                  <Save size={14} /> SAVE CONTENT
                </button>
              </div>

              {/* FAQ editor */}
              <div className="bg-[#111] border border-white/5 rounded-xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bebas text-xl text-net-white tracking-wide">FAQ EDITOR</h3>
                  <SaveBadge saved={!!savedMap['faq']} />
                </div>

                <div className="flex flex-col gap-3">
                  {content.faqs.map((faq, i) => (
                    <div key={i} className="border border-white/5 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setEditingFaq(editingFaq === i ? null : i)}
                        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/5 transition-colors"
                      >
                        <span className="text-sm text-white/70 font-medium">{faq.question}</span>
                        <div className="flex items-center gap-2">
                          <Edit3 size={13} className="text-white/30" />
                          {editingFaq === i ? <X size={13} className="text-white/30" /> : <ChevronRight size={13} className="text-white/30" />}
                        </div>
                      </button>

                      {editingFaq === i && (
                        <div className="px-4 pb-4 flex flex-col gap-3 border-t border-white/5">
                          <Field label="Question" value={faq.question} onChange={v => updateFaq(i, 'question', v)} />
                          <Field label="Answer" value={faq.answer} onChange={v => updateFaq(i, 'answer', v)} multiline />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => save('faq')}
                  className="mt-4 flex items-center gap-2 bg-neon-orange text-pure-black font-bebas text-base px-5 py-2 rounded-lg hover:bg-neon-orange/90 transition-colors"
                >
                  <Save size={14} /> SAVE FAQ
                </button>
              </div>
            </div>
          )}

          {/* ── LINKS ─────────────────────────────────────────────────────── */}
          {activeTab === 'links' && (
            <div className="flex flex-col gap-6 max-w-3xl">
              <div>
                <h1 className="font-bebas text-3xl text-net-white tracking-wide mb-1">LINKS & CONTACTS</h1>
                <p className="text-sm text-white/40">Manage all external links and contact information.</p>
              </div>

              <div className="bg-[#111] border border-white/5 rounded-xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bebas text-xl text-net-white tracking-wide">CONTACT & LINKS</h3>
                  <SaveBadge saved={!!savedMap['links']} />
                </div>

                <div className="flex flex-col gap-4 mb-5">
                  <div className="flex flex-col gap-1">
                    <label className="font-dm-sans text-xs font-bold uppercase tracking-widest text-white/40">WhatsApp Number</label>
                    <div className="flex gap-2">
                      <input
                        className="flex-1 bg-[#0a0a0a] border border-white/10 rounded text-net-white font-dm-sans text-sm px-3 py-2 focus:outline-none focus:border-neon-orange/60 transition-colors"
                        value={content.whatsapp}
                        onChange={e => setContent(c => ({ ...c, whatsapp: e.target.value }))}
                        placeholder="+91 XXXXX XXXXX"
                      />
                      <a
                        href={`https://wa.me/${content.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-green-600 hover:bg-green-500 text-white rounded px-3 py-2 transition-colors"
                      >
                        <MessageCircle size={16} />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-dm-sans text-xs font-bold uppercase tracking-widest text-white/40">Registration Form URL</label>
                    <div className="flex gap-2">
                      <input
                        className="flex-1 bg-[#0a0a0a] border border-white/10 rounded text-net-white font-dm-sans text-sm px-3 py-2 focus:outline-none focus:border-neon-orange/60 transition-colors"
                        value={content.registrationLink}
                        onChange={e => setContent(c => ({ ...c, registrationLink: e.target.value }))}
                      />
                      <a
                        href={content.registrationLink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white/10 hover:bg-white/20 text-white rounded px-3 py-2 transition-colors"
                      >
                        <Globe size={16} />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-dm-sans text-xs font-bold uppercase tracking-widest text-white/40">Instagram / Reel Link</label>
                    <div className="flex gap-2">
                      <input
                        className="flex-1 bg-[#0a0a0a] border border-white/10 rounded text-net-white font-dm-sans text-sm px-3 py-2 focus:outline-none focus:border-neon-orange/60 transition-colors"
                        value={content.instagramLink}
                        onChange={e => setContent(c => ({ ...c, instagramLink: e.target.value }))}
                      />
                      <a
                        href={content.instagramLink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-pink-600 hover:bg-pink-500 text-white rounded px-3 py-2 transition-colors"
                      >
                        <Globe size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Live preview card */}
                <div className="bg-[#0a0a0a] border border-white/5 rounded-lg p-4 mb-5">
                  <div className="text-xs text-white/30 uppercase tracking-widest mb-3">Live Preview</div>
                  <div className="flex flex-col gap-2 text-xs">
                    <div className="flex items-center gap-2 text-white/50">
                      <MessageCircle size={12} className="text-green-400" />
                      <span>WA: <span className="text-white/80">{content.whatsapp}</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-white/50">
                      <Globe size={12} className="text-neon-orange" />
                      <span className="truncate text-white/80">{content.registrationLink.slice(0, 55)}...</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => save('links')}
                  className="flex items-center gap-2 bg-neon-orange text-pure-black font-bebas text-base px-5 py-2 rounded-lg hover:bg-neon-orange/90 transition-colors"
                >
                  <Save size={14} /> SAVE LINKS
                </button>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
