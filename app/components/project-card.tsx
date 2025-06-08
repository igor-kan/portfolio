import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  githubLink?: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, link, githubLink, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer relative">
      <a href={link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
        <span className="sr-only">Visit {title} Project</span>
      </a>

      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center z-20">
        <span className="inline-flex items-center gap-2 text-sm">
          <ExternalLink className="h-4 w-4" />
          Visit Project
        </span>
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        )}
      </CardFooter>
    </Card>
  )
}
