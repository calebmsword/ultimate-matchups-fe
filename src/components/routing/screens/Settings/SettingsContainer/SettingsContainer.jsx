import { Suspense } from 'react'
import { LoadingSpinner } from '../../../../snippets/LoadingSpinner'
import { SettingsView } from '../SettingsView'

export const SettingsContainer = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SettingsView />
    </Suspense>
  )
}