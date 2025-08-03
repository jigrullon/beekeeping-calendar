import Link from "next/link"
import { ArrowLeft, BookOpen, Search, AlertTriangle, CheckCircle, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function GlossaryPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Beekeeping Glossary</h1>
              <p className="text-muted-foreground md:text-xl">
                Essential terms and concepts for beginner beekeepers
              </p>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>Tip:</strong> Don't try to memorize everything at once! Start with the basics and refer back to this glossary 
                as you encounter new terms in your beekeeping journey.
              </AlertDescription>
            </Alert>

            <div className="space-y-8">
              {/* Basic Bee Biology */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-amber-700">🐝 Basic Bee Biology</h2>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Queen</CardTitle>
                      <CardDescription>The mother of the colony</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        The only fertile female in the hive. She lays all the eggs and controls the colony's behavior 
                        through pheromones. She can live 2-5 years and lays up to 2,000 eggs per day during peak season.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Worker</CardTitle>
                      <CardDescription>Female bees that do all the work</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Sterile female bees that perform all hive tasks: cleaning, nursing, building, foraging, and guarding. 
                        They live 4-6 weeks in summer, 4-6 months in winter. They make up 95% of the colony.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Drone</CardTitle>
                      <CardDescription>Male bees</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Male bees whose only job is to mate with virgin queens. They have no stinger and are larger than workers. 
                        They're kicked out of the hive in fall and don't survive winter.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Brood</CardTitle>
                      <CardDescription>Developing bees</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Eggs, larvae, and pupae in the hive. Brood is raised in hexagonal cells and requires constant 
                        temperature (93-95°F) to develop properly.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Nectar</CardTitle>
                      <CardDescription>Flower juice that becomes honey</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Sweet liquid collected from flowers. Bees store it in honey cells and fan it to remove water, 
                        turning it into honey.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Pollen</CardTitle>
                      <CardDescription>Protein source for bees</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Yellow/orange powder from flowers that provides protein for developing brood. Bees collect it 
                        in "pollen baskets" on their hind legs.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Hive Components */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-700">🏠 Hive Components</h2>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Hive Body</CardTitle>
                      <CardDescription>Main box of the hive</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        The wooden box that contains frames. Deep hive bodies are used for brood, medium boxes 
                        can be used for brood or honey. Standard size is 10-frame or 8-frame.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Frame</CardTitle>
                      <CardDescription>Removable comb holder</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Wooden rectangle that holds the wax comb. Bees build their cells on both sides. 
                        Frames can be removed for inspection and honey extraction.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Comb</CardTitle>
                      <CardDescription>Wax structure bees build</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Hexagonal wax cells built by bees. Used for storing honey, pollen, and raising brood. 
                        New comb is white, old comb becomes dark brown.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Super</CardTitle>
                      <CardDescription>Honey storage box</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Shallow hive body added on top for honey storage. Usually medium or shallow depth. 
                        Removed for honey harvest.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Inner Cover</CardTitle>
                      <CardDescription>Hive lid liner</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Flat board that goes between the top hive body and outer cover. Provides ventilation 
                        and prevents bees from gluing the outer cover down.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Outer Cover</CardTitle>
                      <CardDescription>Hive roof</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Metal-topped wooden cover that protects the hive from weather. Should be weighted down 
                        to prevent wind damage.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Beekeeping Terms */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-green-700">🔧 Beekeeping Terms</h2>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Apiary</CardTitle>
                      <CardDescription>Bee yard</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        The location where you keep your beehives. Can be a backyard, field, or rooftop. 
                        Also called a "bee yard."
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Inspection</CardTitle>
                      <CardDescription>Checking your hives</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Regular examination of frames to check colony health, queen status, brood pattern, 
                        and honey stores. Usually done every 7-10 days during active season.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Swarm</CardTitle>
                      <CardDescription>Colony reproduction</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        When a colony splits and half the bees leave with the old queen to start a new colony. 
                        Usually happens in spring when hives are crowded.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Nuc</CardTitle>
                      <CardDescription>Small starter colony</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Short for "nucleus colony." A small hive with 3-5 frames of bees, brood, and a queen. 
                        Used for starting new colonies or selling bees.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Package</CardTitle>
                      <CardDescription>Mail-order bees</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        A screened box containing 2-3 pounds of worker bees and a queen in a separate cage. 
                        Shipped by mail and installed in a new hive.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Drawn Comb</CardTitle>
                      <CardDescription>Beeswax foundation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Wax comb that bees have already built out. Highly valuable because bees don't need to 
                        spend energy building new comb.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Essential Tools */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-purple-700">🛠️ Essential Tools</h2>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Smoker</CardTitle>
                      <CardDescription>Calms bees during inspection</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Metal can with bellows that produces cool smoke. Smoke triggers bees' instinct to 
                        prepare for fire by eating honey, making them less defensive.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Hive Tool</CardTitle>
                      <CardDescription>Pry bar for beekeepers</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Flat metal tool with a curved end. Used to pry apart hive bodies, scrape propolis, 
                        and lift frames. Essential for every inspection.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Bee Suit</CardTitle>
                      <CardDescription>Protective clothing</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        White coverall with veil that protects from stings. Should be light-colored and 
                        well-ventilated. Includes gloves and boots.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Frame Grip</CardTitle>
                      <CardDescription>Frame lifting tool</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Tool that clips onto frame ends for easy lifting. Helps prevent dropping frames 
                        and getting stung on hands.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Queen Catcher</CardTitle>
                      <CardDescription>Queen marking tool</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Plastic or metal tool to safely catch and mark queens. Used for queen identification 
                        and age tracking.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Feeder</CardTitle>
                      <CardDescription>Provides supplemental food</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Container that holds sugar syrup or pollen substitute. Used when natural forage 
                        is scarce or for new colonies.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Common Problems */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-red-700">⚠️ Common Problems</h2>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Queenless</CardTitle>
                      <CardDescription>No queen in the hive</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Colony without a laying queen. Workers may lay unfertilized eggs (drones only). 
                        Colony will die unless requeened or allowed to raise a new queen.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Laying Worker</CardTitle>
                      <CardDescription>Worker laying eggs</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        When a worker bee starts laying eggs (unfertilized, so only drones). Usually happens 
                        in queenless colonies. Very difficult to fix.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Dwindling</CardTitle>
                      <CardDescription>Colony getting smaller</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Colony that's losing more bees than it's producing. Can be caused by disease, 
                        poor queen, lack of food, or pesticides.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Dysentery</CardTitle>
                      <CardDescription>Bee diarrhea</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Brown streaks on hive walls and frames. Usually caused by poor quality food, 
                        moisture, or disease. Can spread disease.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Robbing</CardTitle>
                      <CardDescription>Bees stealing honey</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        When bees from other colonies try to steal honey from a weak hive. Can kill 
                        the robbed colony. Reduce entrance to prevent.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Absconding</CardTitle>
                      <CardDescription>Bees leaving hive</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        When entire colony leaves the hive due to poor conditions, pests, or lack of food. 
                        Different from swarming - they don't leave a new colony behind.
                      </p>
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
                    Beginner Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Start with 2-3 hives to learn and compare</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Join a local beekeeping association</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Keep detailed records of inspections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Learn to identify eggs, larvae, and capped brood</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Always have a spare queen or queen cells ready</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Don't be afraid to ask experienced beekeepers for help</span>
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
                      <span>Opening hives too frequently</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Not checking for queen or eggs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Leaving too much space in winter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Not treating for mites</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Feeding sugar syrup in winter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Not having a plan for swarms</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-lg bg-amber-50 p-6">
              <h2 className="mb-4 text-2xl font-bold">Ready to start your beekeeping journey?</h2>
              <p className="mb-4 text-muted-foreground">
                Now that you understand the basics, get your personalized beekeeping calendar to know exactly 
                when to perform essential tasks throughout the year.
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