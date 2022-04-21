import { Suspense } from "react"
import { LoadingCircle } from '../../../../snippets/LoadingCircle'
import { LandingView } from "../LandingView"

export const LandingContainer = () => {
    return (
        <Suspense fallback={<LoadingCircle />}>
            <LandingView />
        </Suspense>
    )
}