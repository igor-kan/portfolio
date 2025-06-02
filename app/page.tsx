import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, Globe } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex ml-8">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Igor Kan</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <Button variant="outline" className="ml-auto mr-4">
            <Link href="https://igorkan.com/About-Me/Resume">Resume</Link>
          </Button>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Hi, I'm Igor! 👋
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Leveraging modern tools and a strong foundation in problem solving, I strive to find the simplest
                  solutions to real-world problems—making life a little more livable.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/igor-kan" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/igor-zakhidov/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://x.com" target="_blank">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="https://igorkan.com" target="_blank">
                  <Button variant="outline" size="icon">
                    <Globe className="h-4 w-4" />
                    <span className="sr-only">Website</span>
                  </Button>
                </Link>
                <Link href="mailto:igor.kan.zakhidoff@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Nuvva Art"
                description="A creative art website showcasing digital artwork and artistic expressions."
                image="/placeholder.svg?height=400&width=600"
                link="https://nuvva.art"
                tags={["Art", "Creative", "Web Design"]}
              />
              <ProjectCard
                title="Get to Know Zahlen"
                description="An interactive platform for learning and exploring numerical concepts."
                image="/placeholder.svg?height=400&width=600"
                link="https://zahlen.space"
                tags={["Education", "Mathematics", "Interactive"]}
              />
              <ProjectCard
                title="Browser Reader App"
                description="A clean, distraction-free reading application for web content."
                image="/placeholder.svg?height=400&width=600"
                link="https://lesenheit.space"
                tags={["Reading", "Productivity", "Web App"]}
              />
              <ProjectCard
                title="Educational Games"
                description="A collection of interactive educational games for learning."
                image="/placeholder.svg?height=400&width=600"
                link="https://ludorum.space"
                tags={["Games", "Education", "Interactive"]}
              />
              <ProjectCard
                title="Multilingual Translator"
                description="A powerful translation tool supporting multiple languages."
                image="/placeholder.svg?height=400&width=600"
                link="https://versor.space"
                tags={["Translation", "Languages", "Utility"]}
              />
              <ProjectCard
                title="Nucleus Demo"
                description="A demonstration of innovative ideas and concepts in action."
                image="/placeholder.svg?height=400&width=600"
                link="https://youridea.live"
                tags={["Demo", "Innovation", "Concept"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Igor Kan. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
