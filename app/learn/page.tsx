import Link from "next/link"
import { ArrowLeft, BookOpen, Calendar, CheckCircle, Clock, Compass, Leaf } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LearnPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Beekeeping Basics</h1>
              <p className="text-muted-foreground md:text-xl">
                Learn the fundamentals of beekeeping to get started on your journey
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Calendar className="h-8 w-8 text-amber-600" />
                  <div>
                    <CardTitle>Seasonal Activities</CardTitle>
                    <CardDescription>Understanding the beekeeping year</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Learn about the critical activities that happen throughout the beekeeping year and how they vary by
                    region.
                  </p>
                  <Link href="/calendar">
                    <Button variant="link" className="mt-4 px-0 text-amber-600">
                      View Calendar
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <BookOpen className="h-8 w-8 text-amber-600" />
                  <div>
                    <CardTitle>Beekeeping Terminology</CardTitle>
                    <CardDescription>Essential terms for beginners</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Familiarize yourself with common beekeeping terms and concepts to better understand guides and
                    instructions.
                  </p>
                  <Link href="/glossary">
                    <Button variant="link" className="mt-4 px-0 text-amber-600">
                      View Glossary
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <CheckCircle className="h-8 w-8 text-amber-600" />
                  <div>
                    <CardTitle>Getting Started Checklist</CardTitle>
                    <CardDescription>What you need to begin</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A comprehensive checklist of equipment, knowledge, and preparations needed before getting your first
                    bees.
                  </p>
                  <Link href="/checklist">
                    <Button variant="link" className="mt-4 px-0 text-amber-600">
                      View Checklist
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Compass className="h-8 w-8 text-amber-600" />
                  <div>
                    <CardTitle>Hive Location Guide</CardTitle>
                    <CardDescription>Finding the perfect spot</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Learn how to select the ideal location for your beehives based on sunlight, wind protection, water
                    access, and more.
                  </p>
                  <Link href="/hive-location">
                    <Button variant="link" className="mt-4 px-0 text-amber-600">
                      Read Guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Leaf className="h-8 w-8 text-amber-600" />
                  <div>
                    <CardTitle>Bee-Friendly Planting</CardTitle>
                    <CardDescription>Supporting your bees with forage</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Discover the best plants to grow in your region to provide nectar and pollen sources throughout the
                    beekeeping season.
                  </p>
                  <Link href="/planting-guide">
                    <Button variant="link" className="mt-4 px-0 text-amber-600">
                      View Planting Guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Clock className="h-8 w-8 text-amber-600" />
                  <div>
                    <CardTitle>Time Commitment</CardTitle>
                    <CardDescription>What to expect as a beekeeper</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Understand the time investment required for successful beekeeping throughout the year and at
                    different experience levels.
                  </p>
                  <Link href="/time-commitment">
                    <Button variant="link" className="mt-4 px-0 text-amber-600">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-lg bg-amber-50 p-6">
              <h2 className="mb-4 text-2xl font-bold">Ready to start your beekeeping journey?</h2>
              <p className="mb-4 text-muted-foreground">
                Get your personalized beekeeping calendar based on your location to know exactly what tasks to perform
                and when.
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
