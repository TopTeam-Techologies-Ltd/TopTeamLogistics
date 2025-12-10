"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SmartButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "gradient" | "outline" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
  icon?: React.ReactNode
  animateHover?: boolean
}

const SmartButton = React.forwardRef<HTMLButtonElement, SmartButtonProps>(
  ({ className, variant = "default", size = "default", icon, animateHover = true, children, ...props }, ref) => {
    
    const variants = {
      default: "bg-button hover:bg-button/90 text-white",
      gradient: "bg-gradient-to-r from-button to-bgaccent hover:opacity-90 text-white",
      outline: "border border-button text-button hover:bg-button/10",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    }

    const Content = () => (
      <>
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </>
    )

    if (animateHover) {
      return (
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button
            ref={ref}
            className={cn(
              variants[variant],
              "transition-all duration-200 font-medium",
              className
            )}
            size={size}
            {...props}
          >
            <Content />
          </Button>
        </motion.div>
      )
    }

    return (
      <Button
        ref={ref}
        className={cn(
          variants[variant],
          "transition-all duration-200 font-medium",
          className
        )}
        size={size}
        {...props}
      >
        <Content />
      </Button>
    )
  }
)

SmartButton.displayName = "SmartButton"

export { SmartButton }