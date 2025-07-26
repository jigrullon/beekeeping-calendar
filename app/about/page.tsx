import Link from "next/link"
import { ArrowLeft, BeakerIcon as Bee } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About BeeKeeper Calendar</h1>
              <p className="text-muted-foreground md:text-xl">
                Helping new beekeepers succeed with location-specific guidance
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
                <p className="mb-4 text-muted-foreground">
                  BeeKeeper Calendar was created to help new beekeepers navigate their first few years with confidence.
                  We understand that beekeeping is highly location-dependent, and timing is everything when it comes to
                  successful hive management.
                </p>
                <p className="mb-4 text-muted-foreground">
                  Our mission is to provide beginner-friendly, region-specific guidance that helps hobbyist beekeepers
                  understand when to perform essential tasks throughout the beekeeping year.
                </p>
                <div className="flex items-center rounded-lg bg-amber-50 p-4">
                  <Bee className="mr-4 h-8 w-8 text-amber-600" />
                  <p className="text-sm font-medium">
                    We're dedicated to supporting sustainable beekeeping practices and helping pollinators thrive.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Beekeeper working with hives"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Location Matters</h2>
              <p className="text-muted-foreground">
                Beekeeping is inherently tied to local climate, flora, and seasonal patterns. A beekeeper in Maine faces
                very different challenges and timelines than one in Georgia or California. Our calendar takes these
                regional differences into account, providing customized guidance for:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Timing of spring inspections and management</li>
                <li>Swarm prevention strategies based on local bloom times</li>
                <li>Region-specific pest and disease management</li>
                <li>Honey harvest windows that align with local nectar flows</li>
                <li>Winter preparation timelines appropriate for your climate</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">For Beginners, By Beekeepers</h2>
              <p className="text-muted-foreground">
                Our team consists of experienced beekeepers from across the country who understand the challenges
                beginners face. We've combined our knowledge and experience to create a resource that we wish we had
                when we were starting out.
              </p>
              <p className="text-muted-foreground">
                The BeeKeeper Calendar is specifically designed for hobbyist beekeepers in their first 0-3 years, when
                understanding the timing of beekeeping activities is most crucial for success.
              </p>
            </div>

            <div className="rounded-lg bg-amber-50 p-6">
              <h2 className="mb-4 text-2xl font-bold">Ready to get started?</h2>
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
