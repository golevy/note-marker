import { selectedNoteAtom } from '@renderer/store'
import { cn } from '@renderer/utils'
import { useAtomValue } from 'jotai'
import { ComponentProps } from 'react'

export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const selectedNote = useAtomValue(selectedNoteAtom)

  if (!selectedNote) return null

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <span className="text-gray-400">{selectedNote.title}</span>
    </div>
  )
}
