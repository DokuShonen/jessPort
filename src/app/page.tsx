"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, useMotionValue, useTransform } from "motion/react";
import {
  EnvelopeSimple,
  Phone,
  ArrowUpRight,
  Code,
  Database,
  Terminal,
  WindowsLogo,
  Folder,
  GraduationCap,
} from "@phosphor-icons/react/dist/ssr";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const SKILLS = {
  programmation: ["HTML", "CSS", "PHP", "C", "C++", "Laravel", "JavaScript"],
  bases: ["MySQL", "PostgreSQL", "Oracle", "NoSQL"],
  systemes: ["Windows", "Linux"],
  bureautique: ["Word", "PowerPoint"],
};

const EXPERIENCE = [
  {
    role: "Stagiaire en développement web",
    company: "IT Intégration",
    period: "Juin — Août 2024",
    details: [
      "Plateforme de demande d'autorisation d'absence et de congé (Laravel, PostgreSQL, Bootstrap)",
      "Application de gestion de stock (HTML, CSS, PHP, JS)",
    ],
  },
  {
    role: "Administration réseau",
    company: "SBT",
    period: "Juin — Septembre 2025",
    details: ["Sécurisation d'un réseau WiFi avec serveur RADIUS"],
  },
];

const PROJECTS = [
  {
    name: "Curriculum Vitae",
    description: "Site de présentation de CV interactif",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Gestion Immobilière",
    description: "Application complète de gestion immobilière",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
  },
];

const FORMATION = [
  {
    degree: "Licence en technologie du génie informatique",
    school: "Aube Nouvelle",
    year: "2026 (en cours)",
  },
  {
    degree: "Baccalauréat scientifique",
    school: "Établissement Gabriel Taborin",
    year: "",
  },
  {
    degree: "Brevet d'étude du premier cycle",
    school: "Complexe scolaire Saint Damien",
    year: "",
  },
];

/* ─── Typing Effect ─── */
function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      <span className="ml-0.5 inline-block size-[2px] animate-pulse bg-accent align-middle">
        &nbsp;
      </span>
    </span>
  );
}

/* ─── Floating Particles ─── */
const PARTICLES_DATA = [
  { id: 0, x: 22.7, y: 13.6, size: 2.3, duration: 18.2, delay: 1.3 },
  { id: 1, x: 34.2, y: 39.2, size: 2.2, duration: 22.5, delay: 0.7 },
  { id: 2, x: 28.8, y: 56.4, size: 3.7, duration: 16.9, delay: 3.1 },
  { id: 3, x: 39.5, y: 65.4, size: 2.6, duration: 24.1, delay: 2.0 },
  { id: 4, x: 83.9, y: 85.3, size: 3.4, duration: 19.8, delay: 0.4 },
  { id: 5, x: 40.1, y: 48.8, size: 2.4, duration: 21.3, delay: 4.2 },
  { id: 6, x: 44.1, y: 45.8, size: 3.7, duration: 17.6, delay: 1.9 },
  { id: 7, x: 0.7, y: 57.4, size: 2.2, duration: 23.4, delay: 3.5 },
  { id: 8, x: 90.8, y: 82.5, size: 1.3, duration: 20.7, delay: 0.9 },
  { id: 9, x: 27.8, y: 61.0, size: 1.9, duration: 25.0, delay: 2.6 },
  { id: 10, x: 44.1, y: 54.2, size: 3.1, duration: 15.4, delay: 4.8 },
  { id: 11, x: 3.4, y: 55.3, size: 2.9, duration: 22.0, delay: 1.1 },
];

function FloatingParticles() {
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES_DATA.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Magnetic Button ─── */
function MagneticButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x, y }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={className}
    >
      {children}
    </motion.a>
  );
}

/* ─── Tilt Card ─── */
function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-4, 4]);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Counter Animation ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

/* ─── Bezel Card ─── */
function BezelCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="rounded-[1.5rem] bg-white/[0.04] p-[1px] ring-1 ring-white/[0.07]">
      <div
        className={`rounded-[calc(1.5rem-1px)] bg-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

function SkillBadge({ label }: { label: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="inline-block cursor-default rounded-full bg-white/[0.06] px-4 py-1.5 text-sm font-medium text-foreground/80 ring-1 ring-white/[0.08]"
    >
      {label}
    </motion.span>
  );
}

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <div className="grain relative">
      <div className="mesh-gradient" />
      <FloatingParticles />

      {/* Floating Glass Nav */}
      <motion.nav
        initial={reduce ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: EASE_OUT }}
        className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
      >
        <div className="flex items-center gap-1 rounded-full bg-white/[0.08] px-2 py-2 ring-1 ring-white/[0.1] backdrop-blur-2xl">
          <span className="px-4 font-mono text-sm font-medium text-accent">
            JKA
          </span>
          <div className="h-4 w-px bg-white/[0.12]" />
          {[
            ["#about", "À propos"],
            ["#skills", "Compétences"],
            ["#experience", "Expérience"],
            ["#projects", "Projets"],
            ["#contact", "Contact"],
          ].map(([href, label], i) => (
            <motion.a
              key={href}
              href={href}
              initial={reduce ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.05 }}
              className="rounded-full px-4 py-2 text-sm text-foreground/60 transition-all duration-300 hover:bg-white/[0.08] hover:text-foreground"
            >
              {label}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative flex min-h-[100dvh] items-center px-6 pt-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">
          <div>
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 ring-1 ring-accent/20"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="size-1.5 rounded-full bg-accent"
              />
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                Disponible pour stage
              </span>
            </motion.div>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.04em] leading-[1]"
            >
              KABORE
              <br />
              <span className="text-foreground/50">Louise Jessica</span>
            </motion.h1>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE_OUT }}
              className="mt-8 max-w-md text-lg leading-relaxed text-foreground/60"
            >
              <TypingText
                text="Développeuse web en devenir, passionnée par la création d'applications solides et utiles."
                delay={800}
              />
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE_OUT }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <MagneticButton
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/20 active:scale-[0.97]"
              >
                Me contacter
                <span className="flex size-7 items-center justify-center rounded-full bg-background/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="size-3.5" />
                </span>
              </MagneticButton>
              <MagneticButton
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-white/[0.06] px-7 py-3.5 text-sm font-semibold text-foreground ring-1 ring-white/[0.1] transition-all duration-300 hover:bg-white/[0.1] active:scale-[0.97]"
              >
                Voir mes projets
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={
              reduce ? false : { opacity: 0, scale: 0.9, filter: "blur(8px)" }
            }
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-2xl"
              />
              <TiltCard className="relative">
                <div className="size-72 overflow-hidden rounded-[2rem] bg-surface ring-1 ring-white/[0.1] md:size-80 lg:size-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                  <img
                    src="/photo.jpg"
                    alt="KABORE Louise Jessica"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </TiltCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {[
              { value: 2, suffix: "+", label: "Expériences" },
              { value: 4, suffix: "+", label: "Projets réalisés" },
              { value: 10, suffix: "+", label: "Technologies" },
              { value: 1, suffix: "", label: "Licence en cours" },
            ].map(({ value, suffix, label }) => (
              <BezelCard key={label}>
                <div className="p-6 text-center">
                  <p className="text-3xl font-bold text-accent">
                    <AnimatedCounter target={value} suffix={suffix} />
                  </p>
                  <p className="mt-1 text-xs text-foreground/50">{label}</p>
                </div>
              </BezelCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative px-6 py-32 md:py-40">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 ring-1 ring-white/[0.08]">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                À propos
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Qui suis-je
            </h2>
            <div className="mt-12 grid gap-8 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <p className="text-lg leading-relaxed text-foreground/65">
                  Je suis KABORE Louise Jessica Amdiatou, étudiante en
                  technologie du génie informatique. Je développe des
                  applications web et des solutions réseau avec curiosité et
                  rigueur.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-foreground/65">
                  Mon parcours académique et mes expériences de stage m&apos;ont
                  donnée des bases solides en développement full-stack et en
                  administration système.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:col-span-3">
                {[
                  { icon: Code, label: "Développement web", sub: "Full-stack" },
                  { icon: Database, label: "Bases de données", sub: "SQL & NoSQL" },
                  { icon: Terminal, label: "Administration réseau", sub: "Sécurité" },
                  { icon: WindowsLogo, label: "Systèmes d'exploitation", sub: "Windows & Linux" },
                ].map(({ icon: Icon, label, sub }, i) => (
                  <motion.div
                    key={label}
                    initial={reduce ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }}
                  >
                    <TiltCard>
                      <BezelCard className="p-6 transition-all duration-300 hover:ring-accent/20">
                        <Icon className="size-7 text-accent" />
                        <p className="mt-3 text-sm font-medium text-foreground/90">
                          {label}
                        </p>
                        <p className="mt-0.5 text-xs text-foreground/45">{sub}</p>
                      </BezelCard>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative px-6 py-32 md:py-40">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 ring-1 ring-white/[0.08]">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                Compétences
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Mon arsenal technique
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                { title: "Programmation & Web", items: SKILLS.programmation },
                { title: "Bases de données", items: SKILLS.bases },
                { title: "Systèmes d'exploitation", items: SKILLS.systemes },
                { title: "Bureautique", items: SKILLS.bureautique },
              ].map(({ title, items }, i) => (
                <motion.div
                  key={title}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }}
                >
                  <BezelCard className="p-6">
                    <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                      {title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((s) => (
                        <SkillBadge key={s} label={s} />
                      ))}
                    </div>
                  </BezelCard>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <BezelCard className="p-6">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  Qualités
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Professionnalisme", "Esprit d'équipe", "Autonomie"].map(
                    (q, i) => (
                      <motion.span
                        key={q}
                        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        className="cursor-default rounded-full bg-accent/[0.1] px-4 py-1.5 text-sm font-medium text-accent ring-1 ring-accent/20"
                      >
                        {q}
                      </motion.span>
                    )
                  )}
                </div>
              </BezelCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative px-6 py-32 md:py-40">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 ring-1 ring-white/[0.08]">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                Expérience
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Parcours professionnel
            </h2>
            <div className="mt-12 space-y-6">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={reduce ? false : { opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE_OUT }}
                >
                  <BezelCard>
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground/95">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-accent">{exp.company}</p>
                        </div>
                        <span className="font-mono text-xs text-foreground/40">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="mt-5 space-y-2.5">
                        {exp.details.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-3 text-sm text-foreground/60"
                          >
                            <motion.span
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ type: "spring", stiffness: 500 }}
                              className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-accent/50"
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </BezelCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative px-6 py-32 md:py-40">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 ring-1 ring-white/[0.08]">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                Projets
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Réalisations
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {PROJECTS.map((proj, i) => (
                <motion.div
                  key={proj.name}
                  initial={reduce ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: EASE_OUT }}
                >
                  <TiltCard>
                    <BezelCard>
                      <div className="group p-6 md:p-8">
                        <div className="flex items-start justify-between">
                          <motion.div
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="flex size-12 items-center justify-center rounded-2xl bg-accent/[0.1] ring-1 ring-accent/20"
                          >
                            <Folder className="size-5 text-accent" />
                          </motion.div>
                          <ArrowUpRight className="size-5 text-foreground/20 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
                        </div>
                        <h3 className="mt-5 text-lg font-semibold text-foreground/95">
                          {proj.name}
                        </h3>
                        <p className="mt-1 text-sm text-foreground/55">
                          {proj.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {proj.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-lg bg-white/[0.05] px-2.5 py-1 font-mono text-xs text-foreground/50 ring-1 ring-white/[0.06]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </BezelCard>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="relative px-6 py-32 md:py-40">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 ring-1 ring-white/[0.08]">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                Formation
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Parcours académique
            </h2>
            <div className="mt-12 space-y-4">
              {FORMATION.map((f, i) => (
                <motion.div
                  key={f.degree}
                  initial={reduce ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }}
                >
                  <BezelCard>
                    <div className="flex items-start gap-5 p-6">
                      <motion.div
                        whileHover={{ rotate: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent/[0.1] ring-1 ring-accent/20"
                      >
                        <GraduationCap className="size-5 text-accent" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-foreground/95">
                          {f.degree}
                        </h3>
                        <p className="mt-0.5 text-sm text-foreground/55">
                          {f.school}
                          {f.year && (
                            <span className="text-accent"> — {f.year}</span>
                          )}
                        </p>
                      </div>
                    </div>
                  </BezelCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative px-6 py-32 md:py-40">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 ring-1 ring-white/[0.08]">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                Contact
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Travaillons ensemble
            </h2>
            <p className="mt-6 max-w-md text-lg text-foreground/55 leading-relaxed">
              N&apos;hésitez pas à me contacter pour discuter
              d&apos;opportunités de stage, de projets ou de collaborations.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MagneticButton
                href="mailto:Kaborelouisejessica@gmail.com"
                className="group inline-flex items-center gap-4 rounded-full bg-white/[0.06] px-8 py-5 ring-1 ring-white/[0.1] transition-all duration-300 hover:bg-white/[0.1] hover:ring-accent/20 active:scale-[0.98]"
              >
                <EnvelopeSimple className="size-5 text-accent" />
                <span className="text-sm text-foreground/85">
                  Kaborelouisejessica@gmail.com
                </span>
                <ArrowUpRight className="size-4 text-foreground/25 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </MagneticButton>
              <MagneticButton
                href="tel:+22662014520"
                className="group inline-flex items-center gap-4 rounded-full bg-white/[0.06] px-8 py-5 ring-1 ring-white/[0.1] transition-all duration-300 hover:bg-white/[0.1] hover:ring-accent/20 active:scale-[0.98]"
              >
                <Phone className="size-5 text-accent" />
                <span className="text-sm text-foreground/85">
                  +226 62 01 45 20
                </span>
                <ArrowUpRight className="size-4 text-foreground/25 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.08] px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-sm text-foreground/40 md:flex-row md:justify-between">
          <span className="font-mono text-xs">
            © 2025 KABORE Louise Jessica
          </span>
          <div className="flex gap-4">
            <a
              href="mailto:Kaborelouisejessica@gmail.com"
              className="transition-colors hover:text-accent"
            >
              <EnvelopeSimple className="size-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
