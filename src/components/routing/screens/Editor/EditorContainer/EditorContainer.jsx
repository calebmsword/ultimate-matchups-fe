import { Suspense } from 'react'

import { LoadingSpinner } from '../../../../snippets/LoadingSpinner'
import { EditorView } from '../EditorView'

export const EditorContainer = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <EditorView />
    </Suspense>
  )
}