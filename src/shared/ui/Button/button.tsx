import { memo, ReactNode, useMemo } from 'react'

import './button.scss'

export type ButtonProps = {
  disabled?: boolean
  className?: string
  children?: ReactNode
  onClick: () => void
}

export const Button = memo(
  ({ children, onClick, disabled = false, className }: ButtonProps) => {
    const summaryClassName = useMemo(() => {
      return `button ${disabled && 'is-disabled'} ${className || ''}`
    }, [disabled, className])

    return (
      <button className={summaryClassName} onClick={onClick}>
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
