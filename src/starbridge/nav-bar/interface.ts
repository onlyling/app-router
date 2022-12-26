import type { ReactNode } from 'react'

export interface NavBarProps {
  title?: ReactNode
  onBack?: () => void
  backgroundColor?: string
}
