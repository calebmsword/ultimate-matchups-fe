import { Suspense } from "react"
import { LoadingSpinner } from "../../../../snippets/LoadingSpinner"
import { RegisterView } from "../RegisterView"

export const RegisterContainer = () => {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <RegisterView />
        </Suspense>
    )
}