import { motion } from 'motion/react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiRedis } from 'react-icons/di'

const stack = [{ name: 'React', Icon: RiReactjsLine, color: 'text-orange-300' }, { name: 'Next.js', Icon: TbBrandNextjs, color: 'text-white' }, { name: 'Node.js', Icon: FaNodeJs, color: 'text-green-400' }, { name: 'MongoDB', Icon: SiMongodb, color: 'text-green-500' }, { name: 'PostgreSQL', Icon: BiLogoPostgresql, color: 'text-orange-400' }, { name: 'Redis', Icon: DiRedis, color: 'text-red-400' }]

function Technologies() { return <section className="border-y border-white/8 py-20 sm:py-24"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mono text-xs uppercase tracking-[.2em] text-orange-300">02 / Toolkit</p><h2 className="mt-4 text-3xl font-extrabold tracking-[-.04em] text-white sm:text-4xl">The tools I build with.</h2></div><p className="max-w-md text-sm leading-6 text-slate-500">A pragmatic, modern stack for reliable products—from interaction to infrastructure.</p></div><div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{stack.map(({ name, Icon, color }, index) => <motion.div key={name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="group rounded-2xl border border-white/8 bg-white/[.025] p-5 transition hover:-translate-y-1 hover:border-orange-300/35 hover:bg-orange-300/[.04]"><Icon className={`text-4xl ${color}`} /><p className="mt-7 text-sm font-bold text-slate-300">{name}</p></motion.div>)}</div></section> }
export default Technologies
