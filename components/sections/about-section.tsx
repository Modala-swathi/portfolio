"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
// Reverted to the general User icon
import { User, Trophy, Medal, GraduationCap, Award } from "lucide-react"

const achievements = [
  {
    title: "Rank 1259 in TS EAMCET (2023)",
    description: "Engineering, Agriculture and Medical Common Entrance Test",
    icon: Award,
    iconColor: "text-blue-500 bg-blue-50",
  },
  {
    title: "Rank 5932 in JEE Advanced (2023)",
    description: "Joint Entrance Examinaton - Advanced",
    icon: Medal,
    iconColor: "text-amber-500 bg-amber-50",
  },
  {
    title: "GPA: 9.37",
    description: "B.Tech in Computer Science & Engineering at JNTUHUCESTH Hyderabad",
    icon: GraduationCap,
    iconColor: "text-emerald-500 bg-emerald-50",
  },
]

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="relative bg-background py-20 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-14 text-center">
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">About Me</h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-600"></div>
          </motion.div>

          {/* Centered Equal Height Cards */}
          <div className="flex flex-wrap items-stretch justify-center gap-8">
            {/* Who I Am */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="flex w-full max-w-[520px] flex-col rounded-[32px] border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              {/* Top */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  {/* General User Icon */}
                  <User className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Who I Am</h3>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-5 text-muted-foreground">
                <p className="leading-8">
                  A passionate Computer Science student interested in Software Development, Web
                  Technologies, Machine Learning, and AI with a strong curiosity for innovation.
                </p>
                <p className="leading-8">
                  Skilled in Full-Stack Development and AI-driven projects with hands-on experience
                  building practical solutions.
                </p>
                <p className="leading-8">
                  Quick learner with a problem-solving mindset and a strong passion for continuous
                  learning and technology.
                </p>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="flex w-full max-w-[520px] flex-col rounded-[32px] border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              {/* Top */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
                  <Trophy className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Achievements</h3>
              </div>

              {/* Achievement Items */}
              <div className="flex-1 space-y-5">
                {achievements.map((achievement) => {
                  const IconComponent = achievement.icon
                  return (
                    <motion.div
                      key={achievement.title}
                      variants={itemVariants}
                      className="rounded-2xl border-l-4 border-blue-500 bg-secondary px-5 py-4"
                    >
                      <div className="mb-2 flex items-center gap-3">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-xl ${achievement.iconColor}`}
                        >
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <h4 className="text-base font-semibold text-foreground">
                          {achievement.title}
                        </h4>
                      </div>
                      <p className="pl-12 text-sm leading-7 text-muted-foreground">
                        {achievement.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}