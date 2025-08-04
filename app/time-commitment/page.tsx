import Link from "next/link"
import { ArrowLeft, Clock, CheckCircle, AlertTriangle, Calendar, Info, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function TimeCommitmentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <Link href="/learn" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Learning
          </Link>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Time Commitment</h1>
              <p className="text-muted-foreground md:text-xl">
                Understanding the "less is more" approach to beekeeping
              </p>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>Key Principle:</strong> New beekeepers often want to check their hives constantly, but bees thrive 
                with minimal interference. Focus on quality inspections over quantity.
              </AlertDescription>
            </Alert>

            <div className="space-y-8">
              {/* The "Less is More" Philosophy */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-green-700">🌱 The "Less is More" Philosophy</h2>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-800">
                        <CheckCircle className="h-5 w-5" />
                        Why Less is Better
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Bees need stability:</strong> Frequent disturbances stress the colony and disrupt their work</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Temperature control:</strong> Opening the hive breaks their carefully maintained 93°F brood temperature</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Queen laying:</strong> Disturbances can cause the queen to stop laying eggs temporarily</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Honey production:</strong> Bees spend time repairing and reorganizing after each inspection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Colony development:</strong> Uninterrupted colonies build up faster and stronger</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200 bg-red-50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-red-800">
                        <XCircle className="h-5 w-5" />
                        Why Over-Inspection Hurts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Stress:</strong> Bees become defensive and may sting more</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Brood chilling:</strong> Repeated exposure to cold air can kill developing bees</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Queen issues:</strong> Disturbed queens may stop laying or leave the hive</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Honey robbing:</strong> Open hives attract robber bees from other colonies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Disease spread:</strong> Moving frames between hives can spread pathogens</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Minimum Time Requirements */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-700">⏰ Minimum Time Requirements</h2>
                <p className="text-muted-foreground">
                  These are the essential checks you must perform. As long as everything looks good, 
                  resist the urge to check more frequently.
                </p>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">New Colonies (First 2-3 weeks)</CardTitle>
                      <CardDescription>Critical establishment period</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Check every 3-5 days to ensure queen is laying and bees are building comb. 
                        Look for eggs, larvae, and capped brood.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>15-20 minutes per inspection</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>3-5 inspections total</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Established Colonies (Spring/Summer)</CardTitle>
                      <CardDescription>Active season maintenance</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Check every 7-10 days during peak season. Monitor for queen status, brood pattern, 
                        honey stores, and space needs.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>20-30 minutes per inspection</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>4-6 inspections per month</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Winter (Dormant period)</CardTitle>
                      <CardDescription>Minimal disturbance</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Only check if temperatures are above 50°F. Listen for buzzing and check weight. 
                        Avoid opening unless it is an emergency.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>5-10 minutes per check</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>1-2 checks per month</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* What to Check During Inspections */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-amber-700">✅ Essential Checklist</h2>
                <p className="text-muted-foreground">
                  Focus on these key items during each inspection. If everything looks good, close up and walk away.
                </p>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Queen Status</CardTitle>
                      <CardDescription>Is she present and laying?</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Look for eggs (tiny white dots in cells)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Check for larvae (white grubs)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Look for capped brood (brown cells)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Spot the queen if possible (larger, longer abdomen)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Colony Health</CardTitle>
                      <CardDescription>Are they thriving?</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Good brood pattern (not spotty)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Sufficient honey stores</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>No signs of disease or pests</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Adequate space for expansion</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Time Investment by Experience Level */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-purple-700">👨‍🌾 Time Investment by Experience</h2>
                
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Beginner (Year 1)</CardTitle>
                      <CardDescription>Learning and nervous</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        You'll want to check constantly, but resist! Focus on learning proper inspection techniques 
                        and recognizing normal vs. problematic conditions.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>2-3 hours per week (including learning)</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <AlertTriangle className="h-3 w-3" />
                        <span>Common mistake: Over-inspection</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Intermediate (Years 2-3)</CardTitle>
                      <CardDescription>Confident and efficient</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        You know what to look for and can spot problems quickly. Inspections become more efficient 
                        and you're comfortable with fewer checks.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>1-2 hours per week</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="h-3 w-3" />
                        <span>Efficient inspections</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Advanced (Year 4+)</CardTitle>
                      <CardDescription>Minimal intervention</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        You understand bee behavior and can predict problems before they occur. Most colonies 
                        require minimal intervention and thrive with hands-off management.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>30 minutes - 1 hour per week</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="h-3 w-3" />
                        <span>Preventive management</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* When to Check More Frequently */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-red-700">🚨 When to Check More Often</h2>
                <p className="text-muted-foreground">
                  These situations require more frequent monitoring, but still maintain the "less is more" principle.
                </p>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Swarm Season</CardTitle>
                      <CardDescription>Spring (March-May)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Check every 5-7 days for queen cells and overcrowding. Add supers before they run out of space. This 
                        is for swarm prevention and let's you control colony expansion. 
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                        <Clock className="h-3 w-3" />
                        <span>Every 5-7 days</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Drought Conditions</CardTitle>
                      <CardDescription>Limited forage</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Monitor honey stores weekly. Bees may need supplemental feeding if natural sources are scarce. Especially important during dearth.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                        <Clock className="h-3 w-3" />
                        <span>Every 7 days</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Disease Outbreak</CardTitle>
                      <CardDescription>In your area</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Check every 3-5 days for signs of disease. Early detection is crucial for treatment success. They can easily pick something up
                        from a neighbor's yard and bring it back to your hive.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                        <Clock className="h-3 w-3" />
                        <span>Every 3-5 days</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <CheckCircle className="h-5 w-5" />
                    Success Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Keep detailed records of each inspection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Inspect during warm, sunny weather</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Work quickly and efficiently</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Have a plan before opening the hive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Trust your bees - they know what they're doing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Join a beekeeping association for support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <AlertTriangle className="h-5 w-5" />
                    Common Mistakes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Checking hives every day "just to see"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Opening hives in cold or rainy weather</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Spending too long with the hive open</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Not having a specific purpose for inspection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Ignoring obvious problems to avoid "bothering" bees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Comparing your schedule to other beekeepers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-lg bg-amber-50 p-6">
              <h2 className="mb-4 text-2xl font-bold">Ready to manage your time wisely?</h2>
              <p className="mb-4 text-muted-foreground">
                Get your personalized beekeeping calendar to know exactly when to perform essential tasks 
                and when to leave your bees alone to do what they do best.
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