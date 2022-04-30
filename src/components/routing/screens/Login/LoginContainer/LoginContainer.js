import { Suspense } from "react"
import { LoadingSpinner } from "../../../../snippets/LoadingSpinner"
import { LoginView } from "../LoginView"

export const LoginContainer = () => {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <LoginView />
        </Suspense>
    )
}