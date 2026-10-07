import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Bell,
  BookOpen,
  Camera,
  ChevronRight,
  Compass,
  Download,
  Gem,
  Grid2x2,
  Lock,
  Map,
  MapPinned,
  Mountain,
  NotebookPen,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Upload,
  UserRound,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: Grid2x2, active: true },
  { label: 'AI Rock ID', icon: Camera },
  { label: 'My Field Journal', icon: NotebookPen },
  { label: 'Search Database', icon: Search },
  { label: 'Interactive Map', icon: Map },
  { label: 'Guides Library', icon: BookOpen },
  { label: 'Achievements', icon: Trophy },
];

const rockCatalog = [
  { name: 'Granite', tag: 'Igneous', tone: 'bg-amber-500/15 text-amber-200 border-amber-400/25' },
  { name: 'Basalt', tag: 'Igneous', tone: 'bg-slate-500/15 text-slate-200 border-slate-400/25' },
  { name: 'Limestone', tag: 'Sedimentary', tone: 'bg-emerald-500/15 text-emerald-200 border-emerald-400/25' },
  { name: 'Sandstone', tag: 'Sedimentary', tone: 'bg-orange-500/15 text-orange-200 border-orange-400/25' },
  { name: 'Slate', tag: 'Metamorphic', tone: 'bg-indigo-500/15 text-indigo-200 border-indigo-400/25' },
  { name: 'Marble', tag: 'Metamorphic', tone: 'bg-pink-500/15 text-pink-200 border-pink-400/25' },
  { name: 'Quartz', tag: 'Minerals', tone: 'bg-cyan-500/15 text-cyan-200 border-cyan-400/25' },
  { name: 'Mica', tag: 'Minerals', tone: 'bg-violet-500/15 text-violet-200 border-violet-400/25' },
];

const journals = [
  { rock: 'Basalt', location: 'Cascade Trail', date: 'Aug 23, 2023', tagline: 'Logged at Cascade Trail', accent: 'from-[#8b6f5d] to-[#d8c1a0]' },
  { rock: 'Amethyst Quartz', location: 'Basin Ridge', date: 'Jul 15, 2023', tagline: 'Editable notes', accent: 'from-[#6f5c75] to-[#d8c9d5]' },
  { rock: 'Crystal Veins', location: 'North Fork', date: 'Jun 02, 2023', tagline: 'Fine texture', accent: 'from-[#7f8f80] to-[#d3dcc5]' },
];

const guideCards = [
  {
    title: 'Cascades Volcanics',
    badge: 'PRO',
    premium: true,
    accent: 'from-[#d9ba93] to-[#8d6f4e]',
    price: '$18',
  },
  {
    title: 'Granite & Gneiss Basics',
    badge: 'Field',
    premium: false,
    accent: 'from-[#90a5ae] to-[#5d6f75]',
    price: '$12',
  },
];

const achievements = [
  { title: 'Geology Novice', unlocked: true, progress: '5 / 5', icon: Sparkles },
  { title: 'Igneous Expert', unlocked: true, progress: '3 / 10', icon: Mountain },
  { title: 'Sedimentary Scholar', unlocked: false, progress: '2 / 8', icon: Compass },
  { title: 'Field Explorer', unlocked: false, progress: '7 / 15', icon: Trophy },
];

const mapPins = [
  { name: 'Basalt', left: '27%', top: '42%' },
  { name: 'Quartz', left: '45%', top: '30%' },
  { name: 'Limestone', left: '63%', top: '52%' },
  { name: 'Slate', left: '78%', top: '37%' },
];

function App() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [isScanning, setIsScanning] = useState(true);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [mapView, setMapView] = useState(true);

  const filteredRocks = useMemo(() => {
    if (selectedTag === 'All') return rockCatalog;
    return rockCatalog.filter((rock) => rock.tag === selectedTag);
  }, [selectedTag]);

  const handleUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2200);
  };

  return (
    <div className="min-h-screen bg-[#a9b39a] p-3 sm:p-6">
      <div className="mx-auto flex max-w-[1400px] overflow-hidden rounded-[28px] border border-[#51615b] bg-[#2f3d3b] shadow-[0_26px_70px_rgba(19,28,25,0.42)]">
        <aside className="w-full max-w-[260px] border-r border-[#51615b] bg-[#2f3d3b] px-4 py-5 text-slate-200">
          <div className="mb-4 flex items-center gap-3 px-2 pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9d4b5] text-[#1f2a27] shadow-lg shadow-[#00000020]">
              <Gem className="h-5 w-5" />
            </div>
            <div className="text-2xl font-black tracking-tight text-white">GeoID</div>
          </div>

          <nav className="space-y-2">
            {navItems.map(({ label, icon: Icon, active }) => (
              <button
                key={label}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[15px] font-medium transition ${
                  active
                    ? 'bg-[#7ea088] text-[#122218] shadow-inner'
                    : 'text-slate-300 hover:bg-[#3a4947] hover:text-white'
                }`}
              >
                <Icon className="h-5 w-5" />
                {label}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-6">
            <div className="flex items-center gap-3 rounded-[18px] border border-[#50715b] bg-[#1d2a2c] px-3 py-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d8d0c2] text-[#1f2a27]">
                <UserRound className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-white">Geology Novice</div>
                <div className="text-[11px] text-slate-400">Leveling progress</div>
              </div>
              <div className="h-2.5 w-2.5 rounded-full bg-[#7fe1a7]" />
            </div>
          </div>
        </aside>

        <main className="flex-1 bg-[#394d4a] p-4 sm:p-6">
          <header className="mb-6 flex items-center justify-between gap-3 rounded-[20px] border border-[#536a62] bg-[#2f3d3b] px-4 py-3 shadow-inner shadow-[#1c2524]">
            <div className="flex items-center gap-3 rounded-xl border border-[#5f746d] bg-[#1d2e2b]/80 px-3 py-2 text-slate-300 shadow-inner backdrop-blur-sm">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                placeholder="Search"
                className="w-[260px] bg-transparent text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#51615b] bg-[#1d2e2b] text-slate-100">
                <Bell className="h-4 w-4" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#bce8b0]" />
              </button>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d8d0c2] text-[#1d2a2a]">
                <UserRound className="h-4 w-4" />
              </div>
            </div>
          </header>

          <div className="mb-6 text-4xl font-black tracking-tight text-white sm:text-[3.1rem]">
            Identify, Explore, and Catalog Your Finds
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-[26px] border border-[#5a6d66] bg-[#2d3c3d] p-5 shadow-inner shadow-[#1b2624]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.23em] text-[#bce4b9]">
                    <ShieldCheck className="h-4 w-4" />
                    AI Rock ID
                  </div>
                  <div className="text-[15px] text-slate-300">Drag &amp; Drop Rock Photo to Analyze</div>
                </div>
                <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[#d6b88a] bg-[#d7c3a3] px-3 py-2 text-sm font-semibold text-[#1c261f] transition hover:brightness-105">
                  <Upload className="h-4 w-4" />
                  Upload
                  <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
                </label>
              </div>

              <label
                className="relative block min-h-[290px] cursor-pointer overflow-hidden rounded-[22px] border border-dashed border-[#b3b7ba] bg-[#2d3a3d] p-4"
                onDragOver={(event) => event.preventDefault()}
                onDrop={(event) => {
                  event.preventDefault();
                  const file = event.dataTransfer.files?.[0];
                  if (!file) return;
                  const imageUrl = URL.createObjectURL(file);
                  setUploadedImage(imageUrl);
                  setIsScanning(true);
                  setTimeout(() => setIsScanning(false), 2200);
                }}
              >
                {uploadedImage ? (
                  <img src={uploadedImage} alt="Uploaded rock" className="absolute inset-0 h-full w-full object-cover opacity-90" />
                ) : null}

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(55,65,81,0.30),rgba(15,23,42,0.8))]" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center rounded-[18px]" >
                  <div className="mb-4 flex h-[110px] w-[110px] items-center justify-center rounded-[18px] border border-[#d6dce0] bg-[#f0f4f5]/10 backdrop-blur-sm">
                    <div className="h-[70px] w-[70px] rounded-[18px] bg-[linear-gradient(135deg,#d4d4d4_0%,#a9b5b8_35%,#7a7f84_100%)] shadow-[inset_0_8px_20px_rgba(255,255,255,0.25)]" />
                  </div>

                  {isScanning ? (
                    <>
                      <div className="mb-2 flex w-full max-w-[440px] items-center justify-between px-1 text-sm font-semibold text-[#d2f7db]">
                        <span>AI Analyzing...</span>
                        <span>84%</span>
                      </div>
                      <div className="mb-3 h-2.5 w-full max-w-[440px] overflow-hidden rounded-full bg-[#536365]/80">
                        <div className="h-full w-[84%] rounded-full bg-[linear-gradient(90deg,#73e3a7,#d6fff0)]" />
                      </div>
                      <div className="mb-2 flex w-full max-w-[440px] gap-2">
                        {[...Array(3)].map((_, index) => (
                          <div key={index} className="h-10 flex-1 rounded-xl bg-[#394d4a]/80 animate-pulse" />
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="text-center text-slate-100">
                      <div className="text-2xl font-bold">Upload drop zone</div>
                      <div className="mt-1 text-sm text-slate-300">AI scan complete. Ready to identify.</div>
                    </div>
                  )}
                </div>

                {isScanning ? <div className="scanline" /> : null}
              </label>
            </div>

            <div className="rounded-[26px] border border-[#5a6d66] bg-[#2d3c3d] p-5 shadow-inner shadow-[#1b2624]">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d4b88d]">
                <MapPinned className="h-4 w-4" />
                Interactive Map
              </div>
              <div className="mb-4 text-[15px] text-slate-300">Recent Discoveries Map</div>

              <div className="flex gap-2 rounded-full border border-[#61736f] bg-[#253531] p-1">
                <button className="rounded-full bg-[#1d2a2c] px-4 py-2 text-sm text-slate-200">List</button>
                <button
                  onClick={() => setMapView((current) => !current)}
                  className="rounded-full bg-[#e0e4e5] px-4 py-2 text-sm font-medium text-[#1f2a2b]"
                >
                  Map View
                </button>
              </div>

              {mapView ? (
                <div className="relative mt-4 h-[280px] overflow-hidden rounded-[18px] border border-[#60706a] bg-[#b3caac]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_25%),linear-gradient(135deg,rgba(135,173,124,0.8),rgba(153,179,119,0.82))]" />
                  <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '26px 26px' }} />
                  {mapPins.map((pin) => (
                    <div key={pin.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: pin.left, top: pin.top }}>
                      <div className="flex flex-col items-center gap-1">
                        <div className="h-4 w-4 rounded-full border-2 border-[#f6f6f0] bg-[#4b4335] shadow-lg shadow-[#2d251c]/60" />
                        <div className="rounded-full border border-[#404b4c] bg-[#f4f1eb]/90 px-2 py-1 text-[10px] font-medium text-[#1d202a]">
                          {pin.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-4 rounded-[18px] border border-[#60706a] bg-[#253531] p-6 text-center text-slate-300">
                  Map view hidden. Toggle back to show discoveries.
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 grid gap-5 xl:grid-cols-[1.05fr_0.95fr_1fr]">
            <section className="rounded-[26px] border border-[#5b6964] bg-[#2d3c3d] p-5 shadow-inner shadow-[#1b2624]">
              <div className="mb-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#b6d7b7]">
                  <NotebookPen className="h-4 w-4" />
                  My Field Journal
                </div>
                <div className="mt-1 text-[15px] text-slate-300">Your Discoveries Journal</div>
              </div>

              <div className="space-y-3">
                {journals.map((entry) => (
                  <div key={entry.rock} className="flex items-center gap-3 rounded-[16px] border border-[#536d68] bg-[#2c3a3b] p-3">
                    <div className={`h-16 w-16 rounded-[12px] bg-gradient-to-br ${entry.accent}`} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-[15px] font-bold text-white">{entry.rock}</div>
                        <button className="text-xl leading-none text-slate-400">•••</button>
                      </div>
                      <div className="mt-1 text-sm text-slate-300">{entry.tagline}</div>
                      <div className="mt-1 text-xs text-slate-400">{entry.location} · {entry.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[26px] border border-[#5b6964] bg-[#2d3c3d] p-5 shadow-inner shadow-[#1b2624]">
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#c7d8e9]">
                <Trophy className="h-4 w-4" />
                Gamification &amp; Achievements
              </div>

              <div className="flex items-center justify-center py-4">
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-[8px] border-[#b8c9af] bg-[#2b3a3d]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#a7d0ad] bg-[#1d2b2b] text-[#d2f7db]">
                    <Trophy className="h-8 w-8" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {achievements.map(({ title, progress, unlocked, icon: Icon }) => (
                  <div key={title} className="flex items-center justify-between gap-3 rounded-[14px] border border-[#536d68] bg-[#2b3a3d] px-3 py-2.5">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${unlocked ? 'bg-[#d9c7a8] text-[#1d2d2b]' : 'bg-[#495d5b] text-slate-300'}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{title}</div>
                        <div className="text-xs text-slate-400">{unlocked ? 'Unlocked' : 'Locked'} · {progress}</div>
                      </div>
                    </div>
                    {unlocked ? (
                      <div className="rounded-full border border-[#81dd9a] bg-[#163a2d] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d5fadd]">
                        Ready
                      </div>
                    ) : (
                      <Lock className="h-4 w-4 text-slate-400" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[26px] border border-[#5b6964] bg-[#2d3c3d] p-5 shadow-inner shadow-[#1b2624]">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#dfc899]">
                <BookOpen className="h-4 w-4" />
                Field Guides Library
              </div>
              <div className="mb-4 text-[15px] text-slate-300">Digital field notebooks</div>

              <div className="space-y-3">
                {guideCards.map((guide) => (
                  <div key={guide.title} className="overflow-hidden rounded-[18px] border border-[#5d6a63] bg-[#2c3636]">
                    <div className={`h-24 bg-gradient-to-br ${guide.accent} p-3`}>
                      <div className="flex items-start justify-between">
                        <div className="rounded-full border border-[#e7e4db]/70 bg-[#1d2a2a]/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3efe6]">
                          {guide.badge}
                        </div>
                        <div className="rounded-full bg-[#d7c3a3] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#25342a]">
                          {guide.price}
                        </div>
                      </div>
                    </div>

                    <div className="p-3">
                      <div className="flex items-center justify-between gap-4">
                        <div className="text-[15px] font-bold text-white">{guide.title}</div>
                        {guide.premium ? (
                          <span className="rounded-full bg-[#d9bb86] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1d2b2f]">PRO</span>
                        ) : null}
                      </div>

                      <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d7c3a3] px-3 py-2.5 text-sm font-semibold text-[#1d2b2f] transition hover:brightness-105">
                        Buy on Etsy
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-6 rounded-[22px] border border-[#536a62] bg-[#2b3a39] p-4 shadow-inner shadow-[#1b2624]">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d8d0c2] text-[#1f2a27]">
                  <Gem className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Geology Novice</div>
                  <div className="text-xs text-slate-400">Leveling progress</div>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full border border-[#556d66] bg-[#1a2a2b] px-3 py-2 text-sm text-slate-200">
                View achievements
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;












































































































































































































































































































































































