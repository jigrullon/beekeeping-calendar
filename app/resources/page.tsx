import type React from "react"
import Link from "next/link"
import { ArrowLeft, BookOpen, ExternalLink, FileText, GraduationCap, Users, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Beekeeping Resources</h1>
              <p className="text-muted-foreground md:text-xl">Helpful resources for beginning beekeepers</p>
            </div>

            <Tabs defaultValue="books" className="space-y-4">
              <TabsList>
                <TabsTrigger value="books">Books</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="associations">Associations</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
              </TabsList>

              <TabsContent value="books" className="space-y-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <ResourceCard
                    icon={<BookOpen className="h-8 w-8 text-amber-600" />}
                    title="Beekeeping For Dummies"
                    description="By Howland Blackiston"
                    content="A comprehensive guide for beginners covering all aspects of beekeeping."
                    link="https://example.com/book1"
                  />
                  <ResourceCard
                    icon={<BookOpen className="h-8 w-8 text-amber-600" />}
                    title="The Beekeeper's Bible"
                    description="By Richard Jones & Sharon Sweeney-Lynch"
                    content="A comprehensive guide to beekeeping history, practices, and honey recipes."
                    link="https://example.com/book2"
                  />
                  <ResourceCard
                    icon={<BookOpen className="h-8 w-8 text-amber-600" />}
                    title="The Backyard Beekeeper"
                    description="By Kim Flottum"
                    content="An absolute beginner's guide to keeping bees in your yard and garden."
                    link="https://example.com/book3"
                  />
                  <ResourceCard
                    icon={<BookOpen className="h-8 w-8 text-amber-600" />}
                    title="Natural Beekeeping"
                    description="By Ross Conrad"
                    content="Organic approaches to modern apiculture with focus on sustainable practices."
                    link="https://example.com/book4"
                  />
                  <ResourceCard
                    icon={<BookOpen className="h-8 w-8 text-amber-600" />}
                    title="The Bee Book"
                    description="By DK Publishing"
                    content="A visual guide to apiculture with step-by-step illustrations."
                    link="https://example.com/book5"
                  />
                  <ResourceCard
                    icon={<BookOpen className="h-8 w-8 text-amber-600" />}
                    title="First Lessons in Beekeeping"
                    description="By Keith Delaplane"
                    content="A beginner-friendly introduction to beekeeping fundamentals."
                    link="https://example.com/book6"
                  />
                </div>
              </TabsContent>

              <TabsContent value="videos" className="space-y-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <ResourceCard
                    icon={<Video className="h-8 w-8 text-amber-600" />}
                    title="University of Guelph Beekeeping Videos"
                    description="Educational Series"
                    content="Comprehensive video series covering all aspects of beekeeping for beginners."
                    link="https://example.com/video1"
                  />
                  <ResourceCard
                    icon={<Video className="h-8 w-8 text-amber-600" />}
                    title="National Honey Show Lectures"
                    description="Expert Presentations"
                    content="Recorded lectures from beekeeping experts at the National Honey Show."
                    link="https://example.com/video2"
                  />
                  <ResourceCard
                    icon={<Video className="h-8 w-8 text-amber-600" />}
                    title="628 Dirt Rooster"
                    description="YouTube Channel"
                    content="Practical beekeeping videos with focus on beginner-friendly techniques."
                    link="https://example.com/video3"
                  />
                  <ResourceCard
                    icon={<Video className="h-8 w-8 text-amber-600" />}
                    title="University of Minnesota Bee Lab"
                    description="Educational Videos"
                    content="Research-based beekeeping videos from leading bee researchers."
                    link="https://example.com/video4"
                  />
                </div>
              </TabsContent>

              <TabsContent value="associations" className="space-y-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <ResourceCard
                    icon={<Users className="h-8 w-8 text-amber-600" />}
                    title="American Beekeeping Federation"
                    description="National Organization"
                    content="National organization supporting beekeepers with resources and annual conferences."
                    link="https://example.com/org1"
                  />
                  <ResourceCard
                    icon={<Users className="h-8 w-8 text-amber-600" />}
                    title="State Beekeeping Associations"
                    description="Local Support"
                    content="Find your state beekeeping association for local mentorship and resources."
                    link="https://example.com/org2"
                  />
                  <ResourceCard
                    icon={<Users className="h-8 w-8 text-amber-600" />}
                    title="Local Beekeeping Clubs"
                    description="Community Support"
                    content="Connect with beekeepers in your area for hands-on learning opportunities."
                    link="https://example.com/org3"
                  />
                </div>
              </TabsContent>

              <TabsContent value="courses" className="space-y-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <ResourceCard
                    icon={<GraduationCap className="h-8 w-8 text-amber-600" />}
                    title="Penn State Extension Beekeeping 101"
                    description="Online Course"
                    content="Comprehensive online course for beginning beekeepers from a trusted institution."
                    link="https://example.com/course1"
                  />
                  <ResourceCard
                    icon={<GraduationCap className="h-8 w-8 text-amber-600" />}
                    title="Cornell University Master Beekeeper Program"
                    description="Certification Program"
                    content="Advanced beekeeping education for those looking to deepen their knowledge."
                    link="https://example.com/course2"
                  />
                  <ResourceCard
                    icon={<GraduationCap className="h-8 w-8 text-amber-600" />}
                    title="University of Montana Online Beekeeping Certificate"
                    description="Certificate Program"
                    content="Structured online learning program with certificates upon completion."
                    link="https://example.com/course3"
                  />
                </div>
              </TabsContent>
            </Tabs>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Free Beekeeping Guides</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ResourceCard
                  icon={<FileText className="h-8 w-8 text-amber-600" />}
                  title="USDA Beekeeping Guide"
                  description="Government Resource"
                  content="Official beekeeping guidelines and best practices from the USDA."
                  link="https://example.com/guide1"
                />
                <ResourceCard
                  icon={<FileText className="h-8 w-8 text-amber-600" />}
                  title="Bee Health Coalition Resources"
                  description="Best Practices"
                  content="Evidence-based guides for maintaining healthy bee colonies."
                  link="https://example.com/guide2"
                />
                <ResourceCard
                  icon={<FileText className="h-8 w-8 text-amber-600" />}
                  title="Seasonal Management Checklists"
                  description="Practical Tools"
                  content="Downloadable checklists for seasonal beekeeping tasks."
                  link="https://example.com/guide3"
                />
              </div>
            </div>

            <div className="rounded-lg bg-amber-50 p-6">
              <h2 className="mb-4 text-2xl font-bold">Get Your Personalized Beekeeping Calendar</h2>
              <p className="mb-4 text-muted-foreground">
                Combine these resources with our location-specific beekeeping calendar for the best start to your
                beekeeping journey.
              </p>
              <Link href="/calendar">
                <Button className="bg-amber-600 hover:bg-amber-700">Get Your Calendar</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © 2025 BeeKeeper Calendar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

interface ResourceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  content: string
  link: string
}

function ResourceCard({ icon, title, description, content, link }: ResourceCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center gap-4">
        {icon}
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col justify-between">
        <p className="text-sm text-muted-foreground">{content}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-sm font-medium text-amber-600 hover:underline"
        >
          Learn More
          <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </CardContent>
    </Card>
  )
}
