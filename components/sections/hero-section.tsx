"use client"

import { motion } from "framer-motion"
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      
      {/* Background Gradient Orbs */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[128px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-400/10 blur-[128px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto max-w-7xl"
      >
        {/* Main Layout */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:max-w-2xl lg:text-left">
            
            <motion.h1
              variants={itemVariants}
              className="max-w-2xl text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Hi, I&apos;m{" "}

              <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                Modala Swathi
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground md:text-xl"
            >
              A passionate{" "}

              <span className="font-medium text-foreground">
                Software Developer
              </span>{" "}

              with interests in Full-Stack Development, Machine Learning, and Artificial Intelligence. I enjoy building scalable applications, solving real-world problems, and transforming ideas into efficient, user-focused solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden rounded-full px-8"
              >
                <a href="#projects">
                  <span className="relative z-10">
                    View Projects
                  </span>

                  <motion.div
                    className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-500 to-blue-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center justify-center gap-6 lg:justify-start"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/Modala-swathi",
                  label: "GitHub",
                  customStyle:
                    "fill-black text-black stroke-[0.5]",
                },

                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/modala-swathi-99b531351",
                  label: "LinkedIn",
                  customStyle:
                    "fill-black text-black stroke-[0.5]",
                },

                {
                  icon: Mail,
                  href: "mailto:swathimodala26@email.com",
                  label: "Email",
                  customStyle:
                    "text-black stroke-[1.75]",
                },

                {
                  icon: Phone,
                  href: "tel:+919063048166",
                  label: "Mobile",
                  customStyle:
                    "text-black stroke-[1.75]",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md"
                  aria-label={social.label}
                >
                  <social.icon
                    className={`h-6 w-6 ${social.customStyle}`}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-1 justify-center lg:justify-end"
          >
            {/* Image Container */}
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-blue-500/30 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              
              <Image
                src="/SwathiPhoto.jpeg"
                alt="Profile photo"
                fill
                className="object-cover"
                priority
              />

              {/* Blue Ring */}
              <div className="absolute inset-0 rounded-full ring-4 ring-blue-500/20 ring-offset-4 ring-offset-background" />
            </div>

            {/* Blue Glow */}
            <div className="absolute -inset-6 -z-10 rounded-full bg-blue-500/25 blur-3xl" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
            aria-label="Scroll to about section"
          >
            <span className="text-xs font-medium uppercase tracking-wider">
              Scroll
            </span>

            <ArrowDown className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}