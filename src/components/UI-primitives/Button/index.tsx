import cn from "@/lib/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

const buttonVariants = cva('rounded-md font-semibold cursor-pointer', {
    variants: {
        variant: {
            primary: 'bg-primary text-white',
            secondary: 'bg secondary text-black',
            outline: 'bg-transparent text-primary border-2 border-primary',
            'outline-secondary': 'bg-transparent text-secondary border-2 border-secondary'
        },
        size: {
            sm: 'px-4 py-2 font-medium',
            md: 'px-6 py-3 font-semibold',
            lg: 'px-8 py-4 font-semibold'
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