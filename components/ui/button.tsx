import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseStyles = "px-4 py-2 font-medium transition-colors rounded"
    const variantStyles = {
      default: "bg-stone-800 text-white hover:bg-stone-900",
      outline: "border border-stone-300 text-stone-700 hover:bg-stone-100"
    }

    return (
      <button
        className={`${baseStyles} ${variantStyles[variant]} ${className || ""}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
