import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Sun, Droplets, Clock, CheckCircle, AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function PlantingGuidePage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Bee-Friendly Planting Guide</h1>
              <p className="text-muted-foreground md:text-xl">
                Create a year-round buffet for your bees with these easy-to-grow plants
              </p>
            </div>

            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Pro Tip:</strong> Many of these plants may already be growing on your property! Take a walk around 
                your yard and look for these flowers before planting new ones. You might be pleasantly surprised by what you find.
                <br />
                <br />
                <strong>Pro Tip:</strong> Save money by skipping the grass spraying service, helping your bees and your wallet!
              </AlertDescription>
            </Alert>

            <div className="space-y-8">
              {/* Early Spring Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-green-700">🌱 Early Spring (March-May)</h2>
                <p className="text-muted-foreground">
                  These early bloomers provide crucial food for bees emerging from winter and building up their colonies.
                </p>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center mb-3 overflow-hidden group relative">
                        <Image
                          src="/beek/dandelion.jpg"
                          alt="Dandelion flower"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                          <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Credit: Empress of Dirt
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Dandelions</CardTitle>
                      <CardDescription>Often considered weeds, but bees love them!</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        One of the first flowers bees find in spring. Rich in nectar and pollen. 
                        Consider leaving some in your yard instead of removing all of them.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Sun className="h-3 w-3" />
                        <span>Full sun to partial shade</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Droplets className="h-3 w-3" />
                        <span>Low water needs</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                    <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center mb-3 overflow-hidden group relative">
                        <Image
                          src="/beek/appletree.jpg"
                          alt="Apple tree blossoms"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                          <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Credit: Bee Life
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Fruit Trees</CardTitle>
                      <CardDescription>Apple, cherry, plum, peach blossoms</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Fruit tree blossoms are excellent early spring food sources. Bees help pollinate 
                        the trees, leading to better fruit production.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Sun className="h-3 w-3" />
                        <span>Full sun</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Droplets className="h-3 w-3" />
                        <span>Moderate water</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                    <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center mb-3 overflow-hidden group relative">
                        <Image
                          src="/beek/crocus.jpg"
                          alt="Crocus flower"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                          <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Credit: Dyck Arboretum
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Crocus</CardTitle>
                      <CardDescription>Early spring bulbs</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Plant bulbs in fall for early spring blooms. Crocus are especially good for bees 
                        as they open early and provide pollen.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Sun className="h-3 w-3" />
                        <span>Full sun to partial shade</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Droplets className="h-3 w-3" />
                        <span>Moderate water</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Late Spring Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-700">🌺 Late Spring (May-June)</h2>
                <p className="text-muted-foreground">
                  As temperatures warm, these plants provide abundant nectar and pollen for growing colonies.
                </p>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                    <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center mb-3 overflow-hidden group relative">
                        <Image
                          src="/beek/lavender.jpg"
                          alt="Lavender flower"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                          <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Credit: iStock
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Lavender</CardTitle>
                      <CardDescription>Fragrant and bee-friendly</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Bees are drawn to lavender's scent and color. Drought-tolerant and easy to grow. 
                        Plant in well-drained soil and avoid overwatering.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Sun className="h-3 w-3" />
                        <span>Full sun</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Droplets className="h-3 w-3" />
                        <span>Low water needs</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                    <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center mb-3 overflow-hidden group relative">
                        <Image
                          src="/beek/sunflower.jpg"
                          alt="Sunflower"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                          <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Credit: The Honey and Bee Connection
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Sunflowers</CardTitle>
                      <CardDescription>Giant bee magnets</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Sunflowers provide both nectar and pollen. Plant different varieties for staggered 
                        blooming throughout summer and fall.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Sun className="h-3 w-3" />
                        <span>Full sun</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Droplets className="h-3 w-3" />
                        <span>Moderate water</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                    <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center mb-3 overflow-hidden group relative">
                        <Image
                          src="/beek/clover.jpg"
                          alt="Clover flower"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                          <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Credit: Buzz About Bees
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Clover</CardTitle>
                      <CardDescription>White clover</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Clover is excellent for bees and improves soil nitrogen. White clover can be 
                        used as a ground cover in lawns. Red (pink) clover can be hit and miss as the nectar is not as good. They do like
                        crimson clover though.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Sun className="h-3 w-3" />
                        <span>Full sun to partial shade</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Droplets className="h-3 w-3" />
                        <span>Low water needs</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Summer Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-orange-700">☀️ Summer (June-August)</h2>
                <p className="text-muted-foreground">
                  These heat-loving plants provide food during the peak of the beekeeping season.
                </p>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                    <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center mb-3 overflow-hidden group relative">
                        <Image
                          src="/beek/basil.jpg"
                          alt="Basil flower"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                          <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Credit: Shutterstock
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Basil & Herbs</CardTitle>
                      <CardDescription>Mint, oregano, thyme, sage</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Let herbs flower to attract bees. Many herbs are drought-tolerant and easy to grow 
                        in containers or gardens.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Sun className="h-3 w-3" />
                        <span>Full sun</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Droplets className="h-3 w-3" />
                        <span>Low to moderate water</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                    <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center mb-3 overflow-hidden group relative">
                        <Image
                          src="/beek/blackeyedsusan.jpg"
                          alt="Black eyed susan flower"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                          <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Credit: GlaszArt
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Black-Eyed Susan</CardTitle>
                      <CardDescription>Drought-tolerant perennial</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Native wildflower that blooms all summer. Very low maintenance and attracts 
                        many types of pollinators.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Sun className="h-3 w-3" />
                        <span>Full sun</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Droplets className="h-3 w-3" />
                        <span>Low water needs</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                    <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center mb-3 overflow-hidden group relative">
                        <Image
                          src="/beek/zinnia.jpg"
                          alt="Zinnia flower"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                          <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Credit: UC Agriculture and Natural Resources
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Zinnias</CardTitle>
                      <CardDescription>Colorful annual flowers</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Easy to grow from seed, zinnias bloom continuously throughout summer. 
                        Deadhead regularly to encourage more blooms.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Sun className="h-3 w-3" />
                        <span>Full sun</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Droplets className="h-3 w-3" />
                        <span>Moderate water</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Fall Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-amber-700">🍂 Fall (August-October)</h2>
                <p className="text-muted-foreground">
                  These late bloomers help bees prepare for winter by providing essential food sources.
                </p>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                    <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center mb-3 overflow-hidden group relative">
                        <Image
                          src="/goldenrod.jpg"
                          alt="Goldenrod flower"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                          <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Credit: Smithsonian Insider
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Goldenrod</CardTitle>
                      <CardDescription>Essential fall food source</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        One of the most important fall plants for bees. Provides both nectar and pollen 
                        when other sources are scarce.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Sun className="h-3 w-3" />
                        <span>Full sun</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Droplets className="h-3 w-3" />
                        <span>Low water needs</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                    <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center mb-3 overflow-hidden group relative">
                        <Image
                          src="/aster.jpg"
                          alt="Aster flower"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                          <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Credit: BeesWiki
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Asters</CardTitle>
                      <CardDescription>Late-blooming perennials</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Asters bloom late into fall and provide crucial food for bees preparing for winter. 
                        Many native varieties available.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Sun className="h-3 w-3" />
                        <span>Full sun to partial shade</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Droplets className="h-3 w-3" />
                        <span>Moderate water</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                    <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center mb-3 overflow-hidden group relative">
                        <Image
                          src="/sedum.jpg"
                          alt="Sedum flower"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                          <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Credit: Back Yard Biology
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Sedum</CardTitle>
                      <CardDescription>Stonecrop varieties</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Drought-tolerant succulents that bloom in late summer and fall. Excellent for 
                        hot, dry areas and rock gardens.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Sun className="h-3 w-3" />
                        <span>Full sun</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Droplets className="h-3 w-3" />
                        <span>Low water needs</span>
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
                    Planting Tips for Success
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Plant in groups of 3-5 of the same species for better bee attraction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Choose native plants when possible - they're adapted to your climate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Plant for continuous bloom from early spring to late fall</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Include both nectar and pollen sources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Avoid pesticides and herbicides in your garden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Leave some "weeds" like dandelions and clover</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <AlertTriangle className="h-5 w-5" />
                    Plants to Avoid
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Double-flowered varieties (bees can't access nectar. Examples are roses, tulips, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Invasive species that can spread aggressively</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Plants treated with pesticides</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Non-native plants that don't provide good forage.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Plants that bloom only briefly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Ornamental grasses (no nectar or pollen)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-lg bg-amber-50 p-6">
              <h2 className="mb-4 text-2xl font-bold">Ready to plan your bee garden?</h2>
              <p className="mb-4 text-muted-foreground">
                Now that you know what to plant, get your personalized beekeeping calendar to know exactly 
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