import { AlertCircle, Clock } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Task {
  title: string
  description: string
  difficulty: "beginner" | "intermediate" | "advanced"
  timeEstimate?: string
  tips?: string[]
}

interface TaskCardProps {
  task: Task
  month?: string
}

function isWeatherDependentMonth(month: string): boolean {
  // Late fall and winter months where weather can be variable
  const weatherDependentMonths = [
    "november", "december", "january", "february"  // Late Fall and Winter
  ]
  return weatherDependentMonths.includes(month)
}

function isWeatherDependentTask(task: Task): boolean {
  // Tasks that are not weather dependent (can be done indoors or regardless of weather)
  const nonWeatherDependentKeywords = [
    "equipment", "preparation", "clean", "repair", "order", "build", "plan", "document"
  ]
  
  const taskText = `${task.title} ${task.description}`.toLowerCase()
  
  // Check if task contains non-weather-dependent keywords
  for (const keyword of nonWeatherDependentKeywords) {
    if (taskText.includes(keyword)) {
      return false
    }
  }
  
  return true
}

export function TaskCard({ task, month }: TaskCardProps) {
  const difficultyColor = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-amber-100 text-amber-800",
    advanced: "bg-red-100 text-red-800",
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{task.title}</CardTitle>
          <span className={`text-xs px-2 py-1 rounded-full ${difficultyColor[task.difficulty]}`}>
            {task.difficulty}
          </span>
        </div>
        {task.timeEstimate && (
          <CardDescription className="flex items-center mt-2">
            <Clock className="h-3 w-3 mr-1" />
            {task.timeEstimate}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{task.description}</p>

        {task.tips && task.tips.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Tips:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {task.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      {month && isWeatherDependentMonth(month) && isWeatherDependentTask(task) && (
        <CardFooter>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center text-xs text-muted-foreground cursor-help">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  <span>Weather dependent</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-xs">
                  This task may need to be adjusted based on your local weather conditions. Always prioritize bee and
                  beekeeper safety.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      )}
    </Card>
  )
}
