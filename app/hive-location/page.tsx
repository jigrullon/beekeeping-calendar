import Link from "next/link"
import { ArrowLeft, Sun, Wind, Droplets, Trees, Shield, MapPin, AlertTriangle, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function HiveLocationPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hive Location Guide</h1>
              <p className="text-muted-foreground md:text-xl">
                Finding the perfect spot for your beehives is crucial for their health and productivity
              </p>
            </div>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Important:</strong> Always check your local zoning laws and regulations before placing beehives. 
                Some areas have restrictions on hive placement, distance from property lines, or require permits. Be sure 
                to check with your homeeowner's association as well if you have one. Never hurts to bribe skeptical neighbors 
                with honey either.
              </AlertDescription>
            </Alert>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Sun className="h-8 w-8 text-amber-600" />
                  <div>
                    <CardTitle>Sunlight Requirements</CardTitle>
                    <CardDescription>Optimal sun exposure for your hives</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Morning Sun (Essential)</h4>
                    <p className="text-sm text-muted-foreground">
                      Bees need early morning sunlight to warm up and start foraging. Position hives to receive 
                      morning sun from the east or southeast. Otherwise south facing is the best option.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Afternoon Shade (Recommended)</h4>
                    <p className="text-sm text-muted-foreground">
                      Provide afternoon shade to prevent overheating in summer. Trees, buildings, or shade cloth 
                      can help protect hives from intense afternoon sun.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Winter Considerations</h4>
                    <p className="text-sm text-muted-foreground">
                      In colder climates, full winter sun exposure helps hives stay warm. Avoid placing hives 
                      in areas that remain shaded during winter months.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Wind className="h-8 w-8 text-amber-600" />
                  <div>
                    <CardTitle>Wind Protection</CardTitle>
                    <CardDescription>Shielding hives from strong winds</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Natural Windbreaks</h4>
                    <p className="text-sm text-muted-foreground">
                      Place hives behind natural windbreaks like hedges, trees, or buildings. This helps 
                      bees conserve energy and maintain hive temperature.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Hive Orientation</h4>
                    <p className="text-sm text-muted-foreground">
                      Face hive entrances away from prevailing winds. In most areas, this means facing 
                      south or southeast.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Artificial Barriers</h4>
                    <p className="text-sm text-muted-foreground">
                      If natural windbreaks aren't available, consider installing fences, screens, or 
                      planting fast-growing shrubs around your apiary. Piling up straw bales is another good low cost option.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Droplets className="h-8 w-8 text-amber-600" />
                  <div>
                    <CardTitle>Water Access</CardTitle>
                    <CardDescription>Ensuring bees have water sources</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Natural Water Sources</h4>
                    <p className="text-sm text-muted-foreground">
                      Bees need water for cooling the hive and diluting honey. Natural sources like ponds, 
                      streams, or birdbaths within 1/4 mile are ideal.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Providing Water</h4>
                    <p className="text-sm text-muted-foreground">
                      If natural sources aren't available, provide shallow water dishes with rocks or 
                      floating objects for bees to land on safely. You want these close, but not too close to the hives. 
                      Make sure to change the water frequently. 
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Water Quality</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensure water sources are clean and free from pesticides or chemicals that could 
                      harm your bees.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Trees className="h-8 w-8 text-amber-600" />
                  <div>
                    <CardTitle>Forage Availability</CardTitle>
                    <CardDescription>Access to nectar and pollen sources</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Seasonal Blooms</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensure there are early spring blooms (dandelions, fruit trees) and late fall 
                      blooms (goldenrod, asters) to support colony development and winter preparation.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Diverse Plant Life</h4>
                    <p className="text-sm text-muted-foreground">
                      Choose a diverse array of flowering plants, trees, and crops that bloom 
                      throughout the season to provide continuous forage. The dearth is hard enough as 
                      it is, so don't make it harder on yourself by not providing enough forage to get through the season.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Pesticide-Free Zones</h4>
                    <p className="text-sm text-muted-foreground">
                      Avoid areas where pesticides are regularly used, such as heavily sprayed 
                      agricultural fields or chemically treated lawns. 
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Shield className="h-8 w-8 text-amber-600" />
                  <div>
                    <CardTitle>Safety & Accessibility</CardTitle>
                    <CardDescription>Protecting bees and beekeepers</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Distance from People</h4>
                    <p className="text-sm text-muted-foreground">
                      Place hives at least 10-15 feet from property lines and areas where people 
                      frequently gather to minimize conflicts.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Flight Paths</h4>
                    <p className="text-sm text-muted-foreground">
                      Consider bee flight paths. Bees typically fly 3-6 feet above ground, so avoid 
                      placing hives where people walk directly in front of entrances.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Easy Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensure you can easily access your hives for inspections and maintenance, 
                      especially during inclement weather. Consider placing them at your height.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <MapPin className="h-8 w-8 text-amber-600" />
                  <div>
                    <CardTitle>Site Preparation</CardTitle>
                    <CardDescription>Preparing your apiary location</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Level Ground</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensure the ground is level and well-drained. Bees prefer slightly elevated 
                      locations that don't collect water. If there must be a slope, make sure it is toward the entrance.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Vegetation Control</h4>
                    <p className="text-sm text-muted-foreground">
                      Keep grass and vegetation short around hives to prevent moisture buildup 
                      and make inspections easier. Also to stop spiders from creating webs in the bees' flight paths.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Hive Stands</h4>
                    <p className="text-sm text-muted-foreground">
                      Use hive stands to elevate hives 12-18 inches off the ground to prevent 
                      moisture, pests, and make inspections more comfortable.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <CheckCircle className="h-5 w-5" />
                    Ideal Location Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Receives morning sun and afternoon shade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Protected from strong winds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Access to clean water within 1/4 mile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Diverse forage available throughout season</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>At least 10-15 feet from property boundaries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Level, well-drained ground</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Easy access for inspections and maintenance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <AlertTriangle className="h-5 w-5" />
                    Locations to Avoid
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Areas with heavy pesticide use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Low-lying areas that collect water</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Exposed hilltops with constant wind</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Areas with heavy foot traffic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Near swimming pools or water features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Areas with aggressive animals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Locations that violate local ordinances</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-lg bg-amber-50 p-6">
              <h2 className="mb-4 text-2xl font-bold">Ready to plan your apiary?</h2>
              <p className="mb-4 text-muted-foreground">
                Now that you know where to place your hives, get your personalized beekeeping calendar to know 
                exactly when to perform essential tasks throughout the year.
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