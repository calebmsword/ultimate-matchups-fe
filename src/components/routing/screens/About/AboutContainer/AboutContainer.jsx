import { Suspense } from 'react'
import { LoadingSpinner } from '../../../../snippets/LoadingSpinner'
import { AboutView } from '../AboutView' 

export const AboutContainer = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
        <AboutView />
    </Suspense>
  )
}
