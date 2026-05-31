"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import {
  Award,
  Code,
  ExternalLink,
  GraduationCap,
} from "lucide-react"

const experiences = [
  {
    title: "B.Tech Computer Science",
    company: "JNTUH University College of Engineering, Science and Technology Hyderabad",
    period: "2023 - Present",
    description:
      "Currently pursuing Computer Science Engineering with focus on Full Stack Development, DSA, Machine Learning and modern web technologies.",
    skills: ["DSA", "React", "Node.js", "Machine Learning"],
  },

  {
    title: "Personal Projects & Learning",
    company: "Self Learning",
    period: "2023 - Present",
    description:
      "Building responsive web applications, AI tools and portfolio projects while continuously improving problem solving and development skills.",
    skills: ["Next.js", "MongoDB", "Tailwind CSS", "JavaScript"],
  },
]

const certifications = [
  {
    title: "AI for Students: Build Your Own Generative AI Model",
    issuer: "NxtWave",
    date: "2026 ",
    url: "https://drive.google.com/file/d/19VN05ARUZZq8b6adWyeqSReqMFoTz6pN/view?usp=sharing",
  },

  {
    title: "Resume, LinkedIn \& Personal Branding Masterclass",
    issuer: "Seoak Developers Community",
    date: "2026",
    url: "https://drive.google.com/file/d/1v8WpcSgkvgp9sOBmR2fqjRGnhHXuuh3C/view?usp=sharing}{View",
  },

  {
    title: "DataScience",
    issuer: "Infosys Springboard",
    date: "2026",
    url: "https://drive.google.com/file/d/1GKIoDNnhaOYV26k2yh9ZyiSTfa6Ug6SA/view?usp=sharing",
  },
]

const codingProfiles = [
  {
    name: "LeetCode",
    stats: "500+ Problems Solved",
    url: "https://leetcode.com/u/swathimodala/",
    color: "bg-orange-500",
  },

  {
    name: "GitHub",
    stats: "Projects & Contributions",
    url: "https://github.com/Modala-swathi",
    color: "bg-slate-800",
  },
]

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="experience"
      className="bg-background py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="text-sm uppercase tracking-[4px] text-sky-500">
              EXPERIENCE
            </span>

            <h2 className="mt-4 text-5xl font-bold text-foreground">
              My Journey So Far
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {/* Left Side */}
            <div className="lg:col-span-2">
              {/* Heading */}
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
                  <GraduationCap className="h-6 w-6 text-sky-500" />
                </div>

                <h3 className="text-3xl font-bold text-foreground">
                  Education & Learning
                </h3>
              </div>

              {/* Cards */}
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
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
                    className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h4 className="text-2xl font-semibold text-foreground">
                          {exp.title}
                        </h4>

                        <p className="mt-1 text-lg text-sky-600">
                          {exp.company}
                        </p>
                      </div>

                      <span className="rounded-full bg-secondary px-4 py-1 text-sm font-medium text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>

                    <p className="mb-5 text-lg leading-8 text-muted-foreground">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-10">
              {/* Certifications */}
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
                    <Award className="h-6 w-6 text-sky-500" />
                  </div>

                  <h3 className="text-3xl font-bold text-foreground">
                    Certifications
                  </h3>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.a
                      key={index}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
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
                      whileHover={{
                        scale: 1.02,
                      }}
                      className="block rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-semibold text-foreground">
                            {cert.title}
                          </h4>

                          <p className="mt-1 text-muted-foreground">
                            {cert.issuer} • {cert.date}
                          </p>
                        </div>

                        <ExternalLink className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Coding Profiles */}
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
                    <Code className="h-6 w-6 text-sky-500" />
                  </div>

                  <h3 className="text-3xl font-bold text-foreground">
                    Coding Profiles
                  </h3>
                </div>

                <div className="space-y-4">
                  {codingProfiles.map((profile, index) => (
                    <motion.a
                      key={index}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
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
                      whileHover={{
                        scale: 1.02,
                      }}
                      className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md"
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white ${profile.color}`}
                      >
                        {profile.name.charAt(0)}
                      </div>

                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-foreground">
                          {profile.name}
                        </h4>

                        <p className="text-muted-foreground">
                          {profile.stats}
                        </p>
                      </div>

                      <ExternalLink className="h-5 w-5 text-muted-foreground" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}