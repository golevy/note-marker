import { notesMock } from '@/store/mocks'
import { useNotesList } from '@renderer/hooks/useNotesList'
import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'
import { NotePreview } from './NotePreview'

export const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({})

  if (notes.length === 0) {
    return (
      <ul className={cn('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul className={className} {...props}>
      {notesMock.map((note, index) => (
        <NotePreview
          key={note.title + note.lastEditTime}
          {...note}
          isActive={selectedNoteIndex === index}
          onClick={handleNoteSelect(index)}
          {...note}
        />
      ))}
    </ul>
  )
}
