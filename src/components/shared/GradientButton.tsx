import { cn } from "@/lib/utils"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

const GradientButton = ({ className, disabled, type,  children, ...props }: ButtonProps) => {
  return (
    <button disabled={disabled} type={type} className={cn("font-bold text-[16px] leading-[100%] tracking-0 py-[10px] px-[20px] rounded-[10px] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity bg-linear-to-r from-[#FA8C54] to-[#FB31BB] text-white", className)} {...props}>
        {children}
    </button>
  )
}

export default GradientButton;