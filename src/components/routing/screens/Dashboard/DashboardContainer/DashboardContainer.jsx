import { Suspense } from "react"
import { LoadingSpinner } from "../../../../snippets/LoadingSpinner"
import { DashboardView } from '../DashboardView'

export const DashboardContainer = () => {
  return (
    <Suspense fallback={ <LoadingSpinner />} >
      <DashboardView />
    </Suspense>
  )
}