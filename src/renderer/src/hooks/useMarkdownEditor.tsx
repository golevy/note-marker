import { MDXEditorMethods } from '@mdxeditor/editor'
import { saveNoteAtom, selectedNoteAtom } from '@renderer/store'
import { NoteContent } from '@shared/models'
import { useAtomValue, useSetAtom } from 'jotai'
import { useRef } from 'react'

export const useMarkdownEditor = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  const saveNote = useSetAtom(saveNoteAtom)
  const editorRef = useRef<MDXEditorMethods>(null)

  const handleAutoSaving = async (content: NoteContent) => {
    if (!selectedNote) return

    console.info('Auto saving', selectedNote.title)
    await saveNote(content)
  }

  return {
    editorRef,
    selectedNote,
    handleAutoSaving
  }
}
