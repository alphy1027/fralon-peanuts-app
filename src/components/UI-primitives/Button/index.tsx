import cn from "@/lib/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    children: ReactNode;
}

const buttonVariants = cva('w-fit rounded-xl font-semibold cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in', {
    variants: {
        variant: {
            primary: 'bg-primary text-white hover:bg-primary-hover active:bg-primary-active',
            secondary: 'bg-secondary text-brand-black hover:bg-secondary-hover active:bg-secondary-active',
            outline: 'bg-transparent text-primary border-2 border-primary',
            "secondary-outline": 'bg-transparent text-secondary border-2 border-secondary',
            transparent: 'bg-transparent'
        },
        size: {
            sm: 'px-4 py-2 font-medium text-sm',
            md: 'px-6 py-3 font-semibold',
            lg: 'px-8 py-4 font-bold text-lg'
        },
        width: {
            full: 'w-full',
            normal: ''
        }

    },
    compoundVariants: [
        {
            variant: 'primary',
            size: 'sm',
            className: 'text-white'
        }
    ],
    defaultVariants: {
        variant: 'primary',
        size: 'md'
    }
})

const Button = ({ children, className, variant, size, ...props }: ButtonProps) => {

    return (
        <button
            className={cn(buttonVariants({ variant, size }), className)}
            {...props}
        >
            {children}
        </button >
    )
}

export default Button