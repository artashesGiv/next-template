import { memo, ReactNode, useCallback, useMemo } from 'react'

import './button.scss'

export type ButtonProps = {
  disabled?: boolean
  className?: string
  onClick: (value: number) => void
  children: ReactNode
}

export const Button = memo(
  ({ children, onClick, disabled = false, className }: ButtonProps) => {
    let value = 1

    const handleClick = useCallback(() => {
      if (!disabled) {
        onClick((value += 1))
      }
    }, [onClick, disabled])

    // Оптимизированное значение класса
    const summaryClassName = useMemo(() => {
      return `button ${disabled && 'is-disabled'} ${className}`
    }, [disabled, className])

    return (
      <button className={summaryClassName} onClick={handleClick}>
        {children}
      </button>
    )
  },
)
Button.displayName = 'Button'
