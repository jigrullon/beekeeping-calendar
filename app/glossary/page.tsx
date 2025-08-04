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
                <h2 className="text-2xl font-bold text-amber-700">Basic Bee Biology</h2>
                
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

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Bee Bread</CardTitle>
                      <CardDescription>Fermented pollen food for bees</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        A mixture of pollen, nectar, and bee secretions packed into cells and fermented by beneficial microbes. Bee bread is the main protein food for developing larvae and young adult bees.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg group relative cursor-help">
                        Eggs
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                            <img 
                              src="/bee-eggs.jpg" 
                              alt="Bee eggs in cells"
                              className="w-48 h-32 object-cover rounded"
                            />
                            <p className="text-xs text-gray-600 mt-1 text-center">Bee eggs in cells</p>
                          </div>
                        </div>
                      </CardTitle>
                      <CardDescription>First stage of bee development</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Tiny, white, rice-shaped objects laid by the queen in the bottom of cells. Eggs hatch into larvae after about 3 days.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg group relative cursor-help">
                        Larvae
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                            <img 
                              src="/bee-larvae.jpg" 
                              alt="Bee larvae in cells"
                              className="w-48 h-32 object-cover rounded"
                            />
                            <p className="text-xs text-gray-600 mt-1 text-center">Bee larvae in cells</p>
                          </div>
                        </div>
                      </CardTitle>
                      <CardDescription>Grub-like bee babies</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        After hatching from eggs, larvae are fed by nurse bees. They look like small white grubs curled in the bottom of cells. Larvae are capped with wax before pupating, making capped brood.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg group relative cursor-help">
                        Brood
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                            <img 
                              src="/bee-brood.jpg" 
                              alt="Bee brood pattern"
                              className="w-48 h-32 object-cover rounded"
                            />
                            <p className="text-xs text-gray-600 mt-1 text-center">Bee brood pattern</p>
                          </div>
                        </div>
                      </CardTitle>
                      <CardDescription>Developing bees</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Eggs, larvae, and pupae in the hive. Brood is raised in hexagonal cells and requires constant 
                        temperature (93-95°F) to develop properly.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Hive Threats */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-red-700">⚠️ Hive Threats</h2>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Varroa Mites</CardTitle>
                      <CardDescription>Most serious bee pest</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Tiny parasitic mites that feed on bee blood and spread viruses. They reproduce in brood cells 
                        and can kill colonies if left untreated. Regular monitoring and treatment is essential.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Small Hive Beetles</CardTitle>
                      <CardDescription>Destructive beetle larvae</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Dark beetles that lay eggs in hive cracks. Larvae tunnel through comb, damaging honey and brood. 
                        Strong colonies can defend against them, but weak colonies may be overwhelmed.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Wax Moths</CardTitle>
                      <CardDescription>Comb destroyers</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Moth larvae that tunnel through wax comb, leaving behind silk webs and frass. They prefer 
                        stored equipment and weak colonies. Strong colonies can keep them under control.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Ants</CardTitle>
                      <CardDescription>Hive invaders</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Can invade hives for honey and brood. They're attracted to weak colonies and can overwhelm 
                        them. Keep hives elevated and use ant barriers to prevent access.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Wasps & Hornets</CardTitle>
                      <CardDescription>Predatory insects</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Can prey on bees and steal honey. Yellow jackets are particularly aggressive in fall. 
                        Strong colonies can defend themselves, but weak colonies may need protection.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Mice</CardTitle>
                      <CardDescription>Winter invaders</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Can nest in hives during winter when bees are clustered. They damage comb and can kill bees. 
                        Use mouse guards and keep entrances small in winter.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Hive Components */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-700">Hive Components</h2>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Super</CardTitle>
                      <CardDescription>Main box of the hive</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        The wooden box that contains frames. Deep supers are used for brood. Medium boxes 
                        can be used for brood or honey. Standard sizes are 10-frame or 8-frame.
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
                        Hexagonal wax cells built by bees. Used for storing honey, bee bread, and raising brood. 
                        New comb is white, old comb becomes dark brown.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Bottom Board</CardTitle>
                      <CardDescription>Bottom of the hive</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Can be screened or solid. Used to protect bottom of the hive from rain and snow. Screened provides flexibility 
                        allowing you to leave open for ventilation in the summer, and closed in the winter.
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
                <h2 className="text-2xl font-bold text-green-700">Beekeeping Terms</h2>
                
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
                        Usually happens in spring when hives are crowded. Also a great way to expand your apiary!
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
                        Shipped by mail and installed in a new hive. Nucs are a better way to start beekeeping.
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
                        spend energy building new comb. Focus on this your first year!
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Essential Tools */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-purple-700">Essential Tools</h2>
                
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
                        Colony without a laying queen. Workers may lay unfertilized eggs (which make drones). 
                        Colony will die unless <Link href="https://thebeesupply.com/blogs/beekeepers-blog/requeening-a-hive-made-easy" className="text-amber-600 hover:underline" target="_blank" rel="noopener noreferrer">requeened</Link> or allowed to raise a new queen.
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
                        moisture, or disease. Can spread disease. Bees are typically very clean so this is a sign of a big problem.
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
                        the robbed colony because they will have no food. Reduce entrance to prevent. 
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
                      <span>Dont worry about honey the first year</span>
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
                      <span>Feeding sugar syrup in winter (This is what their fall honey is for)</span>
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