"use client"

import { FaJava } from "react-icons/fa"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss,
  SiTensorflow,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiGit,
  SiDjango,
  SiOpencv,
  SiC,
} from "react-icons/si"

import { BrainCircuit, Github } from "lucide-react"

const skillCategories = [
  {
    number: "1",
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 85 },
      {name :"C",level:80}
    ],
  },
  {
    number: "2",
    title: "Web Development & Frameworks",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "Next.js", level: 80},
      { name: "Django", level: 75 },
    ],
  },
  {
    number: "3",
    title: "Databases",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 85 },
    ],
  },
  {
    number: "4",
    title: "ML & AI",
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "AI", level: 75 },
      { name: "TensorFlow", level: 70 },
      { name: "OpenCV", level: 70 },
      { name: "Data Cleaning & Visualization", level: 80 },
      { name: "ML Algorithms", level: 80 },
    ],
  },
  {
    number: "5",
    title: "Tools & Core Competencies",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "OOP", level: 85 },
      { name: "DBMS", level: 80 },
    ],
  },
]

const technologies = [
  {
    name: "Java",
    icon: <FaJava className="text-[#EA2D2E]" />,
    level: 90,
  },
  {
    name: "Python",
    icon: <SiPython className="text-[#3776AB]" />,
    level: 85,
  },
  {
    name: "C",
    icon: <SiC className="text-[#7B3FA1]" />,
    level: 80,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-[#F7DF1E]" />,
    level: 85,
  },
  {
    name: "HTML",
    icon: <SiHtml5 className="text-[#F97316]" />,
    level: 95,
  },
  {
    name: "CSS",
    icon: <SiCss className="text-[#2563EB]" />,
    level: 85,
  },
  {
    name: "React.js",
    icon: <SiReact className="text-[#61DAFB]" />,
    level: 85,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-[#22C55E]" />,
    level: 80,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-black dark:text-white" />,
    level: 80,
  },
  {
    name: "Django",
    icon: <SiDjango className="text-[#092E20]" />,
    level: 75,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-[#2563EB]" />,
    level: 85,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#16A34A]" />,
    level: 85,
  },
  {
    name: "TensorFlow",
    icon: <SiTensorflow className="text-[#F97316]" />,
    level: 80,
  },
  {
    name: "OpenCV",
    icon: <SiOpencv className="text-[#5C3EE8]" />,
    level: 70,
  },
  {
    name: "Machine Learning",
    icon: <BrainCircuit className="text-[#3B82F6]" />,
    level: 80,
  },
  {
    name: "AI",
    icon: (
      <span className="text-cyan-500 text-3xl font-bold">
        AI
      </span>
    ),
    level: 75,
  },
  {
    name: "Git",
    icon: <SiGit className="text-[#F05032]" />,
    level: 85,
  },
  {
    name: "GitHub",
    icon: <Github className="text-black dark:text-white" />,
    level: 85,
  },
  {
    name: "Data Structures & Algorithms",
    icon: (
      <span className="text-blue-500 text-3xl font-bold">
        DSA
      </span>
    ),
    level: 85,
  },
  {
    name: "OOP",
    icon: (
      <span className="text-purple-500 text-3xl font-bold">
        OOP
      </span>
    ),
    level: 85,
  },
]

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="skills"
      className="bg-background py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Heading */}
          <div className="mb-14 text-center">
            <h2 className="text-5xl font-bold text-foreground">
              Skills & Expertise
            </h2>

            <div className="mx-auto mt-3 h-[4px] w-20 rounded-full bg-sky-500"></div>

            <p className="mt-5 text-sm text-muted-foreground">
              The tools and technologies I use to bring ideas to life
            </p>
          </div>

          {/* Top Skills Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  inView
                    ? { opacity: 1, y: 0 }
                    : {}
                }
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                {/* Header */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white">
                    {category.number}
                  </div>

                  <h3 className="text-sm font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={skill.name}>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-foreground">
                          {skill.name}
                        </span>

                        <span className="text-[10px] text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-[5px] overflow-hidden rounded-full bg-border">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            inView
                              ? {
                                  width: `${skill.level}%`,
                                }
                              : {}
                          }
                          transition={{
                            duration: 1,
                            delay:
                              index * 0.1 + idx * 0.05,
                          }}
                          className="h-full rounded-full bg-sky-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Stack */}
          <div className="mt-16">
            <h3 className="mb-10 text-center text-2xl font-semibold text-slate-700">
              Technology Stack
            </h3>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0 }
                      : {}
                  }
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white px-4 py-6 shadow-sm"
                >
                  {/* Icon */}
                  <div className="mb-4 flex h-14 w-14 items-center justify-center text-4xl">
                    {tech.icon}
                  </div>

                  {/* Name */}
                  <h4 className="text-center text-sm font-medium text-slate-700">
                    {tech.name}
                  </h4>

                  {/* Progress */}
                  <div className="mt-4 h-[5px] w-full overflow-hidden rounded-full bg-gray-200">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        inView
                          ? {
                              width: `${tech.level}%`,
                            }
                          : {}
                      }
                      transition={{
                        duration: 1,
                        delay: index * 0.05,
                      }}
                      className="h-full rounded-full bg-sky-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}