"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, Folder, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "SignBridge",
    description:
      "An AI-powered Indian Sign Language translator using computer vision for real-time sign detection through webcam integration.",
    image: "/projects/blog.jpg",
    tech: [
      "React.js",
      "Material-UI",
      "Python",
      "Flask",
      "Node.js",
      "React Router",
      "JavaScript",
    ],
    github: "https://github.com/Modala-swathi/SignBridge",
    live: "https://drive.google.com/file/d/1JqgQ_DFu9srYLpCcdxmeXEqBEIfDuc5v/view?usp=sharing",
    categories: ["WebDevelopment", "AI/ML"],
  },

  {
    id: 2,
    title: "NeuroVault",
    description:
      "A secure Android application for encrypted file sharing using steganography, AES-256 encryption, secret sharing, and dual-vault security features.",
    image: "/projects/todo.jpg",
    tech: [
      "Java",
      "Android SDK",
      "Room Database",
      "TensorFlow Lite 2.16.1",
      "AndroidX Material",
      "Gradle/Kotlin DSL",
    ],
    github: "https://github.com/Modala-swathi/Neurovault",

    // APK file path
    live: "https://drive.google.com/file/d/19x4onRi9x7SYVE6qzR6gFlBanxkWBTbh/view?usp=sharing",

    // download flag
    downloadable: true,

    categories: ["Cybersecurity", "MobileApp"],
  },

  {
    id: 3,
    title: "BlogPlatform",
    description:
      "A full-stack blog platform that allows users to create, edit, and manage blogs with secure authentication, search functionality, and responsive design.",
    image: "/projects/rps.jpg",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    github: "https://github.com/Modala-swathi/BlogPlatform",
    live: "https://blog-platform-omega-five.vercel.app/login",
    categories: ["FullStack"],
  },

  {
    id: 4,
    title: " AI-Chatbot",
    description:
      "A React-based AI chatbot for booking assistance with smart intent detection, service browsing, appointment scheduling, and responsive UI for seamless user interaction.",
    image: "/projects/ecommerce.jpg",
    tech: ["React.js", "JavaScript", "HTML/CSS"],
    github: "https://github.com/Modala-swathi/ChatBot",
    live: "https://chat-bot-delta-indol.vercel.app/",
    categories: ["WebDevelopment", "AI/ML"],
  },

  {
    id: 5,
    title: "Rock Paper Scissors",
    description:
      "An interactive Rock Paper Scissors game with score tracking, responsive UI, and real-time gameplay using JavaScript.",
    image: "/projects/weather.jpg",
    tech: ["HTML5", "CSS3", "JavaScript "],
    github: "https://github.com/Modala-swathi/RockPaperScissors",
    live: "https://rock-paper-scissors-zeta-ashy.vercel.app/",
    categories: ["WebDevelopment"],
  },

  {
    id: 6,
    title: "TextUtils",
    description:"A React-based text utility application that provides text formatting, case conversion, spacing adjustments, and character analysis tools.",    
    image: "/projects/chat.jpg",
    tech: ["React.js", "React Router", "JavaScript", "HTML/CSS"],
    github: "https://github.com/Modala-swathi/TextUtils",
    live: "https://text-utils-seven-virid.vercel.app/",
    categories: ["WebDevelopment"],
  },
  {
    id: 7,
    title: "TicTacToe",
    description:"A classic Tic Tac Toe game built with vanilla JavaScript featuring win detection, interactive gameplay, and responsive design.",    
    image: "/projects/chat.jpg",
    tech: ["HTML5", "CSS3","JavaScript"],
    github: "https://github.com/Modala-swathi/TicTacToe",
    live: "https://tic-tac-toe-pi-nine-60.vercel.app/",
    categories: ["WebDevelopment"],
  },
  {
    id: 8,
    title: "TodoList",
    description:"A Django-based task management application that helps users create, organize, and track daily tasks with persistent database storage.",    
    image: "/projects/chat.jpg",
    tech: ["Django", "Python", "SQLite3", "Django ORM"],
    github: "https://github.com/Modala-swathi/TodoList",
    live: "https://todolist-ua7m.onrender.com/",
    categories: ["FullStack"],
  },
  {
    id: 9,
    title: "Weather App",
    description:"A Django-powered weather application that provides real-time weather updates and forecasts using external weather APIs.",    
    image: "/projects/chat.jpg",
    tech: ["Django", "Python"],
    github: "https://github.com/Modala-swathi/WeatherApp",
    live: "https://weatherapp-o708.onrender.com/",
    categories: ["WebDevelopment"],
  },
]

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Dynamic Filters
  const filters = useMemo(() => {
    const allCategories = projects.flatMap(
      (project) => project.categories
    )

    const uniqueCategories = [...new Set(allCategories)]

    return [
      { label: "All", value: "all" },
      ...uniqueCategories.map((category) => ({
        label: formatCategory(category),
        value: category,
      })),
    ]
  }, [])

  // Filtered Projects
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeFilter)
        )

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
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container relative mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="mb-12 text-center"
          >
            <span className="font-mono text-sm uppercase tracking-wider text-primary">
              My Work
            </span>

            <h2 className="mt-3 text-balance text-3xl font-bold md:text-4xl">
              Featured Projects
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Here are some of my recent projects. Each one was built to solve a
              real problem and showcase different skills.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-10 flex flex-wrap justify-center gap-3"
          >
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={
                  activeFilter === filter.value
                    ? "default"
                    : "outline"
                }
                size="sm"
                onClick={() => setActiveFilter(filter.value)}
                className="rounded-full capitalize"
                suppressHydrationWarning
              >
                {filter.label}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Folder className="h-16 w-16 text-primary/30" />
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center gap-4 bg-background/90 backdrop-blur-sm"
                    >
                      {/* GitHub */}
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>

                      {/* Demo / Download */}
                      <motion.a
                        href={project.live}
                        target={
                          project.downloadable ? "_self" : "_blank"
                        }
                        rel="noopener noreferrer"
                        download={project.downloadable}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground"
                        aria-label={
                          project.downloadable
                            ? `Download ${project.title} APK`
                            : `View ${project.title} live demo`
                        }
                      >
                        {project.downloadable ? (
                          <Download className="h-5 w-5" />
                        ) : (
                          <ExternalLink className="h-5 w-5" />
                        )}
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>

                    {/* APK Badge */}
                    {project.downloadable && (
                      <p className="mb-3 text-xs font-medium text-primary">
                        Download Android APK
                      </p>
                    )}

                    <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>

                    {/* Categories */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.categories.map((category) => (
                        <span
                          key={category}
                          className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium capitalize text-primary"
                        >
                          {formatCategory(category)}
                        </span>
                      ))}
                    </div>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}

                      {project.tech.length > 4 && (
                        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* GitHub Button */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex justify-center"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group h-14 rounded-2xl border-[#0091ff] bg-sky-50/50 px-8 text-base font-medium text-[#0091ff] shadow-sm transition-all duration-300 hover:bg-sky-100/70 hover:text-[#0091ff]"
            >
              <a
                href="https://github.com/Modala-swathi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Github className="h-5 w-5 stroke-[1.75] text-[#0091ff]" />

                <span>View All Projects on GitHub</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Format Category Labels
function formatCategory(category: string) {
  return category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
}