"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CalendarIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { beekeepingData } from "@/lib/beekeeping-data"
import { regions } from "@/lib/regions"
import { TaskCard } from "@/components/task-card"

export default function CalendarPage() {
  const [selectedRegion, setSelectedRegion] = useState("")
  const [selectedMonth, setSelectedMonth] = useState("january")

  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ]

  const monthNames = {
    january: "January",
    february: "February",
    march: "March",
    april: "April",
    may: "May",
    june: "June",
    july: "July",
    august: "August",
    september: "September",
    october: "October",
    november: "November",
    december: "December",
  }

  const tasks = (selectedRegion && beekeepingData[selectedRegion]?.[selectedMonth]) || []

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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Beekeeping Calendar</h1>
              <p className="text-muted-foreground md:text-xl">
                Select your region to see a customized beekeeping calendar
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Select Your Region</CardTitle>
                <CardDescription>Choose your state to get location-specific beekeeping guidance</CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger className="w-full sm:w-[300px]">
                    <SelectValue placeholder="Select your region" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((region) => (
                      <SelectItem key={region.value} value={region.value}>
                        {region.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {selectedRegion && (
              <div className="space-y-6">
                <div className="flex items-center">
                  <CalendarIcon className="mr-2 h-5 w-5 text-amber-600" />
                  <h2 className="text-2xl font-bold">Your Beekeeping Calendar</h2>
                </div>

                <Tabs defaultValue={selectedMonth} value={selectedMonth} onValueChange={setSelectedMonth}>
                  <TabsList className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12">
                    {months.map((month) => (
                      <TabsTrigger key={month} value={month}>
                        {monthNames[month]}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {months.map((month) => (
                    <TabsContent key={month} value={month} className="space-y-4">
                      <h3 className="text-xl font-bold">{monthNames[month]} Tasks</h3>

                      {beekeepingData[selectedRegion]?.[month]?.length ? (
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          {beekeepingData[selectedRegion][month].map((task, index) => (
                            <TaskCard key={index} task={task} />
                          ))}
                        </div>
                      ) : (
                        <Card>
                          <CardContent className="pt-6">
                            <p className="text-center text-muted-foreground">
                              No specific tasks for this month. Use this time to prepare equipment, study beekeeping
                              resources, or connect with local beekeeping associations.
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            )}
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
