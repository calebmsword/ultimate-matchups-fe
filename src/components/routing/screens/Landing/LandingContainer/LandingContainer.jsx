import { Suspense } from "react"
import { LoadingSpinner } from '../../../../snippets/LoadingSpinner'
import { LandingView } from '../LandingView'

export const LandingContainer = () => {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <LandingView />
        </Suspense>
    )
}