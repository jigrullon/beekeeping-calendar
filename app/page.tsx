import Link from "next/link"
import { ArrowRight, BeakerIcon as Bee } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Bee className="h-6 w-6 text-amber-500" />
            <span>BeeKeeper Calendar</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/resources" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Resources
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Personalized Beekeeping Calendar
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Know exactly when to perform essential beekeeping tasks based on your location. Perfect for
                    beekeepers in their first 0-3 years.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/calendar">
                    <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/learn">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/beek/beekeeper-3.jpg?height=550&width=450"
                  alt="Beekeeper tending to hives"
                  width={550}
                  height={450}
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our calendar provides customized guidance for beekeepers based on their location
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Select Your State</h3>
                <p className="text-muted-foreground">Choose your state to get location-specific beekeeping guidance</p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">View Your Calendar</h3>
                <p className="text-muted-foreground">See a month-by-month breakdown of essential beekeeping tasks</p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Get Detailed Instructions</h3>
                <p className="text-muted-foreground">Access beginner-friendly guides for each beekeeping task</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to start your beekeeping journey?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get your personalized beekeeping calendar today
                </p>
              </div>
              <Link href="/calendar">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Get Your Calendar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © 2025 Jaime Grullon. All rights reserved.
          </p>
          {/* <nav className="flex gap-4 sm:gap-6">
            <Link href="/terms" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
          </nav> */}
        </div>
      </footer>
    </div>
  )
}
