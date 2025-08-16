import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-[var(--color-ring)] disabled:opacity-50 disabled:pointer-events-none rounded-sm shadow-sm",
    {
        variants: {
            variant: {
                default:
                    "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:brightness-110 active:brightness-90",
                secondary:
                    "bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] hover:brightness-105 active:brightness-95",
                destructive:
                    "bg-[var(--color-destructive)] text-[var(--color-destructive-foreground)] hover:brightness-110 active:brightness-90",
                outline:
                    "border border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-foreground)]",
                ghost:
                    "bg-transparent hover:bg-[var(--color-accent)] text-[var(--color-foreground)]",
                link: "underline-offset-4 hover:underline text-[var(--color-primary)]",
            },
            size: {
                sm: "h-8 px-3 py-1.5 text-xs",
                default: "h-9 px-4 py-2",
                lg: "h-10 px-6 py-2",
                icon: "h-9 w-9 p-0",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                ref={ref as any}
                className={cn(buttonVariants({ variant, size }), className)}
                {...props}
            />
        );
    },
);
Button.displayName = "Button";

export { buttonVariants };
