import cn from "@/lib/utils/cn"
import { cva, VariantProps } from "class-variance-authority"
import { InputHTMLAttributes } from "react"

interface inputProps extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> { }

const inputVariants = cva('rounded-md w-80 h-10 border-2 border-teal-500', {
    variants: {
        variant: {
            primary: 'bg-teal-300',
            secondary: 'bg-red-400',
            default: 'bg-slate-300'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
})

const Input = ({ className, variant, ...props }: inputProps) => {
    return (
        <input
            className={cn(inputVariants({ variant }), className)}
            {...props}
        />
    )
}

export default Input