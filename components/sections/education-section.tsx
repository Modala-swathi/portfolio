"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import {
  GraduationCap,
  School,
  BookOpen,
  CalendarDays,
  MapPin,
  Building2,
  Sparkles,
  BadgeCheck,
  Clock3,
} from "lucide-react"

const education = [
  {
    year: "2023 - 2027",
    title: "Bachelor of Technology",
    institution:
      "JNTUH University College of Engineering, Science and Technology Hyderabad",
    location: "Hyderabad, Telangana",
    status: "In Progress",
    field: "Computer Science & Engineering",
    marks: "9.37 CGPA",
    icon: GraduationCap,
  },

  {
    year: "2021 - 2023",
    title: "Board of Intermediate Education",
    institution: "Gouthami Junior College",
    location: "Nalgonda, Telangana",
    status: "Completed",
    field: "Maths Physics Chemistry (MPC)",
    marks: "Marks: 982",
    icon: School,
  },

  {
    year: "2020 - 2021",
    title: "Board of Secondary Education",
    institution: "Sravathi High School",
    location: "Nalgonda, Telangana",
    status: "Completed",
    field: "Secondary School Education",
    marks: "10 GPA",
    icon: BookOpen,
  },
]

export function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-background py-20"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100 dark:bg-blue-950 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-950 px-4 py-2">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />

              <span className="text-sm font-semibold uppercase tracking-[3px] text-blue-700 dark:text-blue-300">
                Education
              </span>
            </div>

            <h2 className="text-4xl font-bold text-foreground">
              Academic Journey
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              My academic background, achievements and learning experience.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mx-auto max-w-5xl">
            {/* Timeline Line */}
            <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-gradient-to-b from-blue-600 via-blue-300 to-transparent dark:from-blue-400 dark:via-blue-500 dark:to-transparent md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-10">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0 }
                      : {}
                  }
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0
                      ? ""
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-5 top-10 z-20 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-blue-600 dark:bg-blue-400 shadow-lg md:left-1/2" />

                  {/* Card */}
                  <div
                    className={`ml-14 md:ml-0 md:w-1/2 ${
                      index % 2 === 0
                        ? "md:pr-14"
                        : "md:pl-14"
                    }`}
                  >
                    <motion.div
                      whileHover={{
                        y: -6,
                      }}
                      className="group rounded-[28px] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
                    >
                      {/* Top Section */}
                      <div className="mb-6 flex items-start gap-4">
                        {/* Icon Box */}
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-950 shadow-sm">
                          <edu.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold leading-tight text-foreground">
                            {edu.title}
                          </h3>

                          {/* Details */}
                          <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-3 text-muted-foreground">
                              <Building2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />

                              <span className="text-base">
                                {edu.institution}
                              </span>
                            </div>

                            <div className="flex items-center gap-3 text-muted-foreground">
                              <CalendarDays className="h-4 w-4 text-blue-600 dark:text-blue-400" />

                              <span className="text-base">
                                {edu.year}
                              </span>
                            </div>

                            <div className="flex items-center gap-3 text-muted-foreground">
                              <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />

                              <span className="text-base">
                                {edu.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="mb-6">
                        {edu.status === "In Progress" ? (
                          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400 bg-orange-50 dark:bg-orange-950 dark:border-orange-600 px-5 py-2.5 shadow-sm">
                            <Clock3 className="h-5 w-5 text-orange-600 dark:text-orange-400" />

                            <span className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                              In Progress
                            </span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-2 rounded-full border border-green-400 bg-green-100 dark:bg-green-950 dark:border-green-600 px-5 py-2.5 shadow-sm">
                            <BadgeCheck className="h-5 w-5 text-green-700 dark:text-green-400" />

                            <span className="text-lg font-semibold text-green-700 dark:text-green-400">
                              Completed
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Subject + Marks */}
                      <div className="space-y-4">
                        {/* Subject */}
                        <div className="rounded-2xl border-l-4 border-blue-600 dark:border-blue-400 bg-secondary px-5 py-4">
                          <div className="flex items-start gap-4">
                            <div className="mt-2 h-3 w-3 rounded-full bg-blue-600 dark:bg-blue-400" />

                            <p className="text-base leading-8 text-foreground">
                              {edu.field}
                            </p>
                          </div>
                        </div>

                        {/* Marks */}
                        <div className="rounded-2xl border-l-4 border-blue-600 dark:border-blue-400 bg-secondary px-5 py-4">
                          <div className="flex items-start gap-4">
                            <div className="mt-2 h-3 w-3 rounded-full bg-blue-600 dark:bg-blue-400" />

                            <p className="text-base leading-8 text-foreground">
                              {edu.marks}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Space */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}