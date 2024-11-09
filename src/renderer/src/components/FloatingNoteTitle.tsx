import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const title = 'Note Title'

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <span className="text-gray-400">{title}</span>
    </div>
  )
}
