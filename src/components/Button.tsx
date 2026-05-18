import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
}

export default function Button({ fullWidth, className = '', children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`inline-flex cursor-pointer items-center gap-2 rounded-sm border-0 bg-primary px-6 py-3 text-sm font-bold text-white${fullWidth ? ' w-full justify-center' : ''} ${className}`.trim()}
    >
      {children}
    </button>
  )
}
