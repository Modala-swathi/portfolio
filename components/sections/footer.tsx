"use client"

import { motion } from "framer-motion"
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const footerLinks = {
  navigation: [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ],

  social: [
    {
      icon: Github,
      href: "https://github.com/Modala-swathi",
      label: "GitHub",
      isFilled: true,
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/modala-swathi-99b531351",
      label: "LinkedIn",
      isFilled: true,
    },
    {
      icon: Mail,
      href: "mailto:swathimodala26@email.com",
      label: "Email",
      isFilled: false,
    },
    {
      icon: Phone,
      href: "tel:+91906304811",
      label: "Mobile",
      isFilled: false,
    },
  ],
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative w-full border-t border-border bg-card/40 backdrop-blur-sm">
      
      {/* Row 1 */}
      <div className="w-full px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          
          {/* Logo */}
          <motion.a
            href="#"
            className="text-lg font-bold tracking-tight text-foreground"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-primary">{"<"}</span>
            Swathi
            <span className="text-primary">{" />"}</span>
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-5">
            {footerLinks.navigation.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {footerLinks.social.map((social) => {
              const IconComponent = social.icon

              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition-all hover:shadow-md"
                >
                  <IconComponent
                    className={`h-4 w-4 stroke-[1.8] ${
                      social.isFilled
                        ? "fill-slate-900 text-slate-900"
                        : "text-slate-900"
                    }`}
                  />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-border" />

      {/* Row 2 */}
      <div className="w-full bg-slate-950 px-6 py-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          
          {/* Copyright */}
          <p className="text-sm font-medium tracking-wide text-slate-300">
            &copy; {new Date().getFullYear()} Modala Swathi.
            All Rights Reserved.
          </p>

          {/* Back To Top */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="rounded-full border-slate-700 bg-slate-900 text-slate-200 transition-all duration-200 hover:bg-slate-800 hover:text-white"
            suppressHydrationWarning
          >
            <ArrowUp className="mr-2 h-4 w-4 stroke-[2]" />
            Back to top
          </Button>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </footer>
  )
}