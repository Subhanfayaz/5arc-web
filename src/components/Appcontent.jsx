import { Smartphone, Repeat, Bell, WifiOff, Lock, Rocket } from 'lucide-react';

const contentPillars = [
  {
    title: 'Native Performance, Not Just Native Look',
    icon: <Smartphone size={22} className="text-white" />,
    desc: 'A native-feeling app isn\'t enough if it stutters under real use. We build with platform-specific SDKs when performance matters most, so every scroll, tap, and transition feels instant.',
  },
  {
    title: 'One Codebase, Two Platforms Done Right',
    icon: <Repeat size={22} className="text-white" />,
    desc: 'React Native and Flutter let us ship to iOS and Android from a single codebase — without the compromise. You get near-native performance at a fraction of the cost and timeline of building twice.',
  },
  {
    title: 'Offline-Ready, By Design',
    icon: <WifiOff size={22} className="text-white" />,
    desc: 'Real users lose signal in elevators, subways, and dead zones. We build local data handling and graceful sync so your app keeps working when the connection doesn\'t.',
  },
  {
    title: 'Push Notifications That Earn Their Tap',
    icon: <Bell size={22} className="text-white" />,
    desc: 'Notifications should bring users back, not train them to swipe you away. We architect targeted, timely alerts that respect the user instead of spamming them.',
  },
  {
    title: 'Security From the First Line of Code',
    icon: <Lock size={22} className="text-white" />,
    desc: 'Secure authentication, encrypted storage, and safe API handling aren\'t bolted on after launch — they\'re part of the architecture from day one, protecting your users and your reputation.',
  },
  {
    title: 'Built for App Store Approval, Not Rejection',
    icon: <Rocket size={22} className="text-white" />,
    desc: 'We know what App Store and Google Play review teams look for. From metadata to compliance, we handle launch prep so your app doesn\'t stall in review.',
  },
];

export default function AppContent() {
  return (
    <section className="py-24 px-6 relative bg-[#071E26]">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-[#17A2B8] font-semibold text-sm uppercase tracking-widest mb-4">
            Mobile App Development
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Mobile Apps Built to Live on Your Users' Home Screens
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Getting downloaded is easy. Getting opened again tomorrow is the hard part.
            We design and develop native and cross-platform mobile applications for
            iOS and Android that are fast, intuitive, and reliable enough to earn a
            permanent place on your users' devices, not just a single install.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contentPillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 rounded-2xl p-7 border border-white/10 hover:border-[#17A2B8]/40 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-[#17A2B8] flex items-center justify-center mb-5 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Closing statement / secondary content block */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            From App Idea to App Store, Without the Guesswork
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Whether you're launching a brand-new startup app or rebuilding a clunky
            legacy product, our mobile development team designs every release around
            one outcome: an app your users actually want to keep, on a platform built
            to scale as your business grows.
          </p>
        </div>

      </div>
    </section>
  );
}