import * as React from "react"
import { cn } from "@/lib/utils"

const Timeline = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn("space-y-2", className)}
    {...props}
  />
))
Timeline.displayName = "Timeline"

const TimelineItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement> & { isCompleted?: boolean }
>(({ className, isCompleted, ...props }, ref) => (
  <li ref={ref} className={cn("flex items-center space-x-2", className)} {...props} />
))
TimelineItem.displayName = "TimelineItem"

const TimelineDot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { isCompleted?: boolean }
>(({ className, isCompleted, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "h-3 w-3 rounded-full",
      isCompleted ? "bg-primary" : "bg-gray-300",
      className
    )}
    {...props}
  />
))
TimelineDot.displayName = "TimelineDot"

const TimelineConnector = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-10 w-0.5 bg-gray-300 ml-1.5", className)}
    {...props}
  />
))
TimelineConnector.displayName = "TimelineConnector"

const TimelineContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-grow", className)}
    {...props}
  />
))
TimelineContent.displayName = "TimelineContent"

export { Timeline, TimelineItem, TimelineDot, TimelineConnector, TimelineContent }

