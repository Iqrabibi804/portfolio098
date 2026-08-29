import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { ProjectList } from "@/components/sections/ProjectList";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { TechConstellation } from "@/components/sections/TechConstellation";
import { EngineeringProcess } from "@/components/sections/EngineeringProcess";
import { siteConfig } from "@/config/siteConfig";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full relative">
      <Hero />
      <Marquee />

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 md:py-28 border-t border-white/5 relative noise-bg">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,255,56,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,56,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="col-span-1 lg:col-span-5 relative group">
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden relative border border-white/10 group-hover:border-accent/50 transition-colors duration-500 shadow-2xl">
                <Image src="/iqra.jpg" alt="Iqra Bibi - Software Engineer" fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 40vw" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />
                <div className="absolute inset-0 border border-white/5 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_3px] pointer-events-none opacity-50" />
                <div className="absolute bottom-4 left-4 text-[9px] font-mono text-accent tracking-widest bg-background/80 backdrop-blur-sm px-2 py-1 rounded">SYSTEM / PROFILE / 01</div>
                <div className="absolute top-4 right-4 text-[9px] font-mono text-muted tracking-widest">31.54°N 72.35°E</div>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="text-accent font-mono text-xs tracking-widest">01</span>
                <div className="w-10 h-[1px] bg-accent/50" />
                <span className="text-[10px] tracking-[0.3em] text-muted uppercase">ABOUT</span>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-1">IQRA BIBI</h2>
                <div className="text-muted text-[11px] tracking-widest uppercase leading-relaxed">Flutter Developer · Web Developer · Software Engineering Student</div>
              </div>
              <p className="text-lg md:text-xl text-foreground/90 max-w-xl leading-relaxed">
                I&apos;m a Software Engineering student building practical applications across <span className="text-accent">mobile</span>, <span className="text-accent">web</span> and <span className="text-accent">intelligent systems</span>.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-4 mt-4">
                {["MOBILE", "WEB", "AI", "FULL-STACK", "SYSTEMS", "DEVOPS"].map(d => (
                  <div key={d} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    <span className="text-[11px] tracking-widest font-bold uppercase">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-20 md:py-28 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-accent font-mono text-xs tracking-widest">02</span>
            <div className="w-10 h-[1px] bg-accent/50" />
            <span className="text-[10px] tracking-[0.3em] text-muted uppercase">EXPERIENCE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-none tracking-tighter mb-12">THE JOURNEY.</h2>
          <ExperienceTimeline />
        </div>
      </section>

      {/* ── STACK ── */}
      <section id="stack" className="py-20 md:py-28 border-t border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-accent font-mono text-xs tracking-widest">03</span>
            <div className="w-10 h-[1px] bg-accent/50" />
            <span className="text-[10px] tracking-[0.3em] text-muted uppercase">THE STACK</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-none tracking-tighter mb-4">TECHNOLOGY CONSTELLATION.</h2>
          <p className="text-sm text-muted mb-10 max-w-md">Tools are only interesting when they solve something.</p>
          <TechConstellation />
        </div>
      </section>

      {/* ── WORK ── */}
      <section id="work" className="py-20 md:py-28 border-t border-white/5 relative noise-bg">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-accent font-mono text-xs tracking-widest">04</span>
            <div className="w-10 h-[1px] bg-accent/50" />
            <span className="text-[10px] tracking-[0.3em] text-muted uppercase">SELECTED WORK</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-none tracking-tighter mb-8">PROJECTS.</h2>
          <ProjectList />
        </div>
      </section>

      {/* ── CAPABILITIES + PROCESS ── */}
      <section id="process" className="py-20 md:py-28 border-t border-white/5 bg-surface/30 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(119,102,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(119,102,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-accent font-mono text-xs tracking-widest">05</span>
                <div className="w-10 h-[1px] bg-accent/50" />
                <span className="text-[10px] tracking-[0.3em] text-muted uppercase">CAPABILITIES</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tighter mb-6">WHAT I BUILD.</h2>
              <div className="flex flex-col gap-4">
                {siteConfig.services.map((s, i) => (
                  <div key={i} className="border-l-2 border-white/10 pl-4 hover:border-accent transition-colors group py-1">
                    <div className="text-[10px] font-mono text-muted group-hover:text-accent transition-colors">0{i + 1}</div>
                    <div className="text-sm font-bold tracking-widest uppercase">{s}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-accent font-mono text-xs tracking-widest">06</span>
                <div className="w-10 h-[1px] bg-accent/50" />
                <span className="text-[10px] tracking-[0.3em] text-muted uppercase">PHILOSOPHY</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tighter mb-8">HOW I BUILD.</h2>
              <EngineeringProcess />
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION + CERTS ── */}
      <section id="education" className="py-20 md:py-28 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-accent font-mono text-xs tracking-widest">07</span>
                <div className="w-10 h-[1px] bg-accent/50" />
                <span className="text-[10px] tracking-[0.3em] text-muted uppercase">EDUCATION</span>
              </div>
              <div className="border border-white/5 bg-surface/50 rounded-lg p-6 hover:border-accent/30 transition-colors">
                <h3 className="text-xl font-bold tracking-tight mb-1">{siteConfig.education.degree}</h3>
                <div className="text-muted text-[10px] uppercase tracking-widest mb-4">{siteConfig.education.institution}</div>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted">Timeline</span><span>{siteConfig.education.timeline}</span></div>
                  <div className="flex justify-between"><span className="text-muted">Progress</span><span>{siteConfig.education.details}</span></div>
                  <div className="flex justify-between"><span className="text-muted">CGPA</span><span className="font-mono">{siteConfig.education.gpa}</span></div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-accent font-mono text-xs tracking-widest">08</span>
                <div className="w-10 h-[1px] bg-accent/50" />
                <span className="text-[10px] tracking-[0.3em] text-muted uppercase">CERTIFIED</span>
              </div>
              <div className="flex flex-col gap-4">
                {siteConfig.certifications.map((cert, i) => (
                  <div key={i} className="border border-white/5 bg-surface/50 rounded-lg p-5 hover:border-accent/30 transition-colors">
                    <h4 className="text-sm font-bold tracking-tight">{cert.title}</h4>
                    <span className="text-[10px] text-muted uppercase tracking-widest">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 md:py-32 border-t border-white/5 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(200,255,56,0.04)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,255,56,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,56,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-accent font-mono text-xs tracking-widest">09</span>
            <div className="w-10 h-[1px] bg-accent/50" />
            <span className="text-[10px] tracking-[0.3em] text-muted uppercase">CONTACT</span>
          </div>
          <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-bold leading-none tracking-tighter mb-6">
            LET&apos;S BUILD<br />SOMETHING<br />USEFUL.
          </h2>
          <p className="text-base md:text-lg text-muted mb-10 max-w-md">Have an idea, product or technical problem worth solving?</p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mb-10">
            <a href={`mailto:${siteConfig.email}`} className="border border-white/10 bg-background/50 backdrop-blur-sm rounded-xl p-5 hover:border-accent/50 transition-all group text-left">
              <div className="text-[10px] text-muted tracking-widest uppercase mb-2">📧 EMAIL</div>
              <div className="text-sm font-bold group-hover:text-accent transition-colors">{siteConfig.email}</div>
            </a>
            <a href={`tel:${siteConfig.phone}`} className="border border-white/10 bg-background/50 backdrop-blur-sm rounded-xl p-5 hover:border-accent/50 transition-all group text-left">
              <div className="text-[10px] text-muted tracking-widest uppercase mb-2">📱 PHONE</div>
              <div className="text-sm font-bold group-hover:text-accent transition-colors">{siteConfig.phone}</div>
            </a>
          </div>

          <a href={`mailto:${siteConfig.email}`} className="group inline-flex items-center justify-center bg-foreground text-background px-8 py-4 rounded-full font-bold tracking-widest text-sm hover:shadow-[0_0_30px_rgba(200,255,56,0.3)] hover:scale-105 transition-all">
            START A CONVERSATION <span className="ml-2 group-hover:translate-x-1 transition-transform">↗</span>
          </a>

          <div className="flex gap-8 mt-10 text-[11px] font-bold tracking-widest uppercase text-muted">
            <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub ↗</a>
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn ↗</a>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground transition-colors">Email ↗</a>
            <a href={`tel:${siteConfig.phone}`} className="hover:text-foreground transition-colors">Phone ↗</a>
          </div>
        </div>
      </section>
    </main>
  );
}
