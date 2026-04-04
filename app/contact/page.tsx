import { Mail, Globe, GitBranch, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-20">
      {/* --- HEADER --- */}
      <section className="space-y-4 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Let's <span className="text-blue-500">Connect</span></h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Whether you have a question about my <strong>CNN Thesis</strong>, want to discuss <strong>agentic AI</strong>, or just want to say hi, my inbox is always open.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* --- CONTACT INFO CARDS --- */}
        <div className="space-y-4">
          {/* Email Card */}
          <a href="mailto:your-email@lpunetwork.edu.ph" className="block group p-6 border border-foreground/10 rounded-3xl bg-foreground/5 hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground/40 uppercase tracking-widest">Email</p>
                <p className="font-medium text-[13px]">christian.eraldo@lpunetwork.edu.ph</p>
              </div>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a href="https://www.linkedin.com/in/christian-jude-eraldo-012718251/" target="_blank" className="block group p-6 border border-foreground/10 rounded-3xl bg-foreground/5 hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500 group-hover:scale-110 transition-transform">
                <Globe size={24} />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground/40 uppercase tracking-widest">LinkedIn</p>
                <p className="font-medium text-sm">Christian Jude Eraldo</p>
              </div>
            </div>
          </a>

          {/* GitHub Card */}
          <a href="https://github.com/ChristianJudeEraldo" target="_blank" className="block group p-6 border border-foreground/10 rounded-3xl bg-foreground/5 hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500 group-hover:scale-110 transition-transform">
                <GitBranch size={24} />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground/40 uppercase tracking-widest">GitHub</p>
                <p className="font-medium text-sm">@ChristianJudeEraldo</p>
              </div>
            </div>
          </a>

          {/* Location Card */}
          <div className="p-6 border border-foreground/10 rounded-3xl bg-foreground/5">
            <div className="flex items-center gap-4 text-foreground/60">
              <div className="p-3 bg-foreground/5 rounded-2xl">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest">Location</p>
                <p className="font-medium text-sm">Philippines</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- MESSAGE FORM --- */}
        <div className="md:col-span-2 p-8 border border-foreground/10 rounded-3xl bg-foreground/5 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground/50 ml-1">NAME</label>
              <input type="text" placeholder="John Doe" className="w-full p-4 rounded-2xl bg-background border border-foreground/10 focus:border-blue-500 focus:outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground/50 ml-1">EMAIL</label>
              <input type="email" placeholder="john@example.com" className="w-full p-4 rounded-2xl bg-background border border-foreground/10 focus:border-blue-500 focus:outline-none transition-all" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-foreground/50 ml-1">MESSAGE</label>
            <textarea rows={4} placeholder="Hi Jude, I saw your CNN thesis and..." className="w-full p-4 rounded-2xl bg-background border border-foreground/10 focus:border-blue-500 focus:outline-none transition-all resize-none"></textarea>
          </div>
          <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98]">
            <Send size={18} />
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}