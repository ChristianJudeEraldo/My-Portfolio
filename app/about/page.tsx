import { Brain, Code2, GraduationCap, Laptop, ShieldAlert, Terminal, User } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      {/* --- PAGE HEADER --- */}
      <section className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          About <span className="text-blue-500">Jude</span>
        </h1>
        <p className="text-lg text-foreground/60 max-w-3xl leading-relaxed">
          I'm a graduating Computer Engineering student with a passion for building 
          software that doesn't just work, but performs. I bridge the gap between 
          complex hardware logic and modern software architecture.
        </p>
      </section>

      {/* --- BENTO GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto">
        
        {/* 1. Main Bio (Large Card) */}
        <div className="md:col-span-2 md:row-span-2 p-8 border border-foreground/10 rounded-3xl bg-foreground/5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500 w-fit">
              <User size={28} />
            </div>
            <h2 className="text-2xl font-bold">The Journey</h2>
            <p className="text-foreground/70 leading-relaxed">
              My background in <strong>Computer Engineering</strong> gave me a deep appreciation for 
              how systems work under the hood. While I started with circuits and digital 
              logic, I found my true calling in <strong>Software Development</strong>. 
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Today, I focus on creating high-performance web applications and 
              AI-driven systems, ensuring that every line of code is as efficient 
              as a well-designed circuit.
            </p>
          </div>
        </div>

        {/* 2. Education (Wide Card) */}
        <div className="md:col-span-2 p-8 border border-foreground/10 rounded-3xl bg-foreground/5 flex items-center gap-6">
          <div className="hidden sm:block p-4 bg-blue-500/10 rounded-2xl text-blue-500">
            <GraduationCap size={40} />
          </div>
          <div>
            <h3 className="text-xl font-bold">LPU - Cavite</h3>
            <p className="text-foreground/50 text-sm font-medium uppercase tracking-widest">B.S. Computer Engineering</p>
            <p className="text-foreground/70 mt-2 text-sm italic">Graduating 2026</p>
          </div>
        </div>

        {/* 3. Certifications (Small Square) */}
        <div className="p-8 border border-foreground/10 rounded-3xl bg-blue-500/5 flex flex-col justify-center items-center text-center space-y-2 border-blue-500/20">
          <Code2 className="text-blue-500" size={32} />
          <h3 className="font-bold">Certified</h3>
          <p className="text-[10px] text-foreground/50 font-bold uppercase">Python & Databases</p>
        </div>

        {/* 4. Cybersecurity (Small Square) */}
        <div className="p-8 border border-foreground/10 rounded-3xl bg-foreground/5 flex flex-col justify-center items-center text-center space-y-2">
          <ShieldAlert className="text-blue-500" size={32} />
          <h3 className="font-bold">Security</h3>
          <p className="text-[10px] text-foreground/50 font-bold uppercase">PicoCTF & Bandit</p>
        </div>

        {/* 5. The Hardware (Medium Card) */}
        <div className="md:col-span-2 p-8 border border-foreground/10 rounded-3xl bg-foreground/5 flex flex-col justify-between">
          <div className="flex items-center gap-4">
            <Laptop className="text-blue-500" size={24} />
            <h3 className="text-xl font-bold">The Rig</h3>
          </div>
          <p className="text-sm text-foreground/70 mt-4 leading-relaxed">
            I believe in optimizing for the environment. I develop on a Ryzen 3 system with 4GB RAM, 
            which has taught me the importance of writing lightweight, efficient code and 
            leveraging CLI-based agentic workflows to stay productive.
          </p>
        </div>

        {/* 6. Current Mission (Medium Card) */}
        <div className="md:col-span-2 p-8 border border-foreground/10 rounded-3xl bg-blue-600 text-white flex flex-col justify-between">
          <div className="flex items-center gap-4">
            <Brain size={24} />
            <h3 className="text-xl font-bold">Current Mission</h3>
          </div>
          <div>
            <p className="text-sm opacity-90 leading-relaxed font-medium">
              Developing a <strong>CNN-Based Facial Recognition System</strong> for my thesis, 
              aiming to monitor early signs of sleep deprivation in students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}