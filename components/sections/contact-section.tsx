"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, MapPin, Phone, Send, Loader2, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
      }

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to send email")
      }

      setIsSubmitted(true)
      // Reset form after showing success
      setTimeout(() => {
        setIsSubmitted(false)
        ;(e.target as HTMLFormElement).reset()
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "swathimodala26@email.com",
      href: "mailto:swathimodala26@email.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9063048166",
      href: "tel:+919063048166",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nalgonda, India",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Modala-swathi",
      label: "GitHub",
      customStyle: "fill-black text-black stroke-[0.5]",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/modala-swathi-99b531351",
      label: "LinkedIn",
      customStyle: "fill-black text-black stroke-[0.5]",
    },
    {
      icon: Mail,
      href: "swathimodala26@gmail.com",
      label: "Email",
      customStyle: "text-black stroke-[1.75]",
    },
    {
      icon: Phone,
      href: "tel:+919063048166",
      label: "Mobile",
      customStyle: "text-black stroke-[1.75]",
    },
  ]

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-background">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />

      <div className="container relative mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <span className="font-mono text-sm uppercase tracking-wider text-primary">
              Contact
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold md:text-4xl">
              Let&apos;s Work Together
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Have a project in mind or just want to say hi? I&apos;d love to hear
              from you. Drop me a message and I&apos;ll get back to you as soon as
              possible.
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10 lg:grid-cols-5">
              {/* Contact Info */}
              <motion.div variants={itemVariants} className="space-y-6 lg:col-span-2">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Styled Social Links Panel */}
                <motion.div variants={itemVariants} className="pt-6">
                  <p className="mb-4 text-sm font-medium text-muted-foreground">
                    Follow me on
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
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
                        className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md"
                        aria-label={social.label}
                      >
                        <social.icon
                          className={`h-5 w-5 ${social.customStyle}`}
                        />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants} className="lg:col-span-3">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 rounded-2xl border border-border bg-card p-6 md:p-8"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="h-11"
                        suppressHydrationWarning
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="h-11"
                        suppressHydrationWarning
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      required
                      className="h-11"
                      suppressHydrationWarning
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className="resize-none"
                      suppressHydrationWarning
                    />
                  </div>

                  {error && (
                    <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full rounded-xl"
                    suppressHydrationWarning
                    variant={isSubmitted ? "default" : error ? "destructive" : "default"}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <span className="mr-2">✓</span>
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}