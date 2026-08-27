import { motion } from "motion/react";
import { FaCode, FaDatabase, FaJava } from "react-icons/fa6";
import { ABOUT_TEXT } from "../constants";

const strengths = [
  {
    icon: FaCode,
    label: "Full-stack craft",
    text: "Interfaces and APIs that feel effortless.",
  },
  {
    icon: FaJava,
    label: "Problem solving",
    text: "DSA-focused thinking in Java.",
  },
  {
    icon: FaDatabase,
    label: "Data foundations",
    text: "MongoDB and SQL experience.",
  },
];

function About() {
  return (
    <section id="about" className="border-t border-white/8 py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="about-monogram">RV<span>.</span></div>
          <div className="absolute -bottom-5 -right-4 rounded-2xl border border-white/10 bg-[#11151d] p-4 shadow-xl">
            <p className="mono text-[10px] uppercase tracking-widest text-orange-300">
              Based in
            </p>
            <p className="mt-1 text-sm font-bold text-white">India / Remote</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mono text-xs uppercase tracking-[.2em] text-orange-300">
            01 / About me
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-.04em] text-white sm:text-5xl">
            A curious builder who cares about the details.
          </h2>
          <p className="mt-7 max-w-2xl leading-7 text-slate-400">
            {ABOUT_TEXT}
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {strengths.map(({ icon: Icon, label, text }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/8 bg-white/[.025] p-4"
              >
                <Icon className="text-xl text-orange-300" />
                <h3 className="mt-5 text-sm font-bold text-white">{label}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default About;
