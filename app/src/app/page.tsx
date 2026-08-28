"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDownToLine, ArrowUpRight, Mail, Phone } from "lucide-react";

import projects from "./data.json";

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function KatiePage() {
  const stats = [
    { value: "2029 ", label: "MD Graduating Class" },
    { value: "2,000+ ", label: "Clinical Hours" },
    { value: "1 ", label: "Publication" },
    { value: "400+ ", label: "Volunteer Hours" },
  ];

  return (
    <div className="min-h-screen bg-[url('https://img.magnific.com/free-vector/geometric-pattern-background-vector-white_53876-128361.jpg?semt=ais_hybrid&w=740&q=80')]">
      {/* Hero */}
      <div className="flex min-h-screen items-center justify-center p-8">
        <div className="grid w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="mt-4 font-display text-7xl font-bold tracking-tight text-[#0f1f4d]">
              Katie
              <br />
              Kanaan
            </h1>

            <p className="p-3 text-sm font-semibold uppercase tracking-[0.3em] text-black">
              MD Student
            </p>
            <div className="mt-6 h-1 w-24 rounded-full bg-[#4274D9]" />
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-500">
              I am a medical student at the University of Iowa Roy J. and
              Lucille A. Carver College of Medicine, MD Class of 2029. <br />{" "}
              <br /> Prior to medical school, I earned my Associate&rsquo;s of
              Science degree from Southeastern Community College (GPA 3.89)
              while I was still in high school. Afterwards, I went to Western
              Illinois University, where I received a President&rsquo;s
              Scholarship (full tuition, fees, room & board) and obtained my
              Bachelors of Science degree in Chemistry, Biochemistry Option with
              a Zoology minor (3.89 GPA). I then took two gap years gaining
              clinical experience as a dermatology medical assistant and Mohs
              laboratory technician.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="./KatieKanaanCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#4274D9] px-8 py-3 font-semibold text-white shadow-sm shadow-[#4274D9]/30 transition hover:bg-[#3560c0]"
              >
                CV <ArrowDownToLine size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#4274D9] px-8 py-3 font-semibold text-white shadow-sm shadow-[#4274D9]/30 transition hover:bg-[#3560c0]"
              >
                Contact Me <Mail size={18} />
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/60 transition hover:shadow-black/80">
            <img
              src="/unnamed.jpg"
              alt="Katie Kanaan"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* About */}
      <div id="about" className="flex justify-center bg-[#4274D9] p-8 md:p-24">
        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          <FadeIn>
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/45 transition hover:shadow-black/70">
              <img
                src="./katiepic.jpg"
                alt="Katie"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </FadeIn>
          <FadeIn delay={150} className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#95CCDD]">
              About Me
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-white">
              My Interests
            </h2>
            <div className="mt-6 h-1 w-24 rounded-full bg-[#FFFFFF]"></div>

            <p className="mt-4 leading-relaxed text-white/80">
              Currently, I am interested in specializing in pediatrics! I have
              always loved working with children-- inspiring them, caring for
              them, and being a positive role model. I am not sure yet if I
              would pursue a fellowship or stay in primary care. Outside of
              medicine, I love doing anything outdoors, including hiking,
              walking my dog, camping, or going on lake days.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Projects */}
      <div id="work" className="flex flex-col items-center gap-8 p-12">
        <FadeIn className="w-full max-w-6xl">
          <p className="font-semibold uppercase tracking-[0.3em] text-[#4274D9]">
            Experiences
          </p>
          <h2 className="my-2 mt-2 font-display text-5xl font-bold text-[#0f1f4d]">
            Research, Work, & Volunteer Experience
          </h2>
          <div className="mt-6 h-1 w-24 rounded-full bg-[#4274D9]" />
        </FadeIn>
        <div className="grid w-full max-w-6xl grid-cols-1 gap-10 text-white md:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 100}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl bg-[#4274D9] p-8 text-white shadow-xl shadow-[#4274D9]/30 transition hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#4274D9]/55"
              >
                <span className="w-fit rounded-full bg-[#95CCDD]/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#95CCDD]">
                  {project.tag}
                </span>
                <h3 className="mt-3 font-display text-3xl font-bold text-[#FFFFFF]">
                  {project.title}
                </h3>
                <div className="mt-6 h-1 w-24 rounded-full bg-[#95CCDD]"></div>

                <p className="mt-3 leading-relaxed text-[#FFFFFF]">
                  {project.desc}
                </p>
                <span className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white underline underline-offset-4">
                  Learn More <ArrowUpRight size={18} />
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-center bg-[#0f1f4d] p-12">
        <div className="grid w-full max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100} className="min-w-0">
              <div className="h-full min-w-0 rounded-2xl bg-white/5 p-6 text-center shadow-xl transition hover:-translate-y-1.5 hover:bg-white/10 hover:shadow-2xl">
                <p className="font-display text-3xl font-bold text-[#D4A843] sm:text-4xl md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/60 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="flex justify-center p-12 pb-20">
        <FadeIn className="w-full max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4274D9]">
            Get In Touch
          </p>
          <h2 className="mt-3 font-display text-5xl font-bold text-[#0f1f4d]">
            Let&rsquo;s connect
          </h2>
          <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-[#4274D9]" />

          <p className="mt-4 flex items-center justify-center gap-2 text-lg text-gray-500">
            <Phone size={18} /> (319)-671-3807
          </p>
          <a
            href="mailto:katiekanaan@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#4274D9] px-10 py-4 font-semibold text-white shadow-lg shadow-[#4274D9]/30 transition hover:bg-[#3560c0]"
          >
            Personal Email <Mail size={18} />
          </a>
          <a
            href="mailto:katie-kanaan@uiowa.edu"
            className="m-2 mt-8 inline-flex items-center gap-2 rounded-full bg-[#4274D9] px-10 py-4 font-semibold text-white shadow-lg shadow-[#4274D9]/30 transition hover:bg-[#3560c0]"
          >
            School Email <Mail size={18} />
          </a>
        </FadeIn>
      </div>
    </div>
  );
}
