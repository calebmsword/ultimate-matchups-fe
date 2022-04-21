import { Suspense } from "react"
import { LoadingCircle } from "../../../../snippets/LoadingCircle"
import { LoginView } from "../LoginView"

export const LoginContainer = () => {
    return (
        <Suspense fallback={<LoadingCircle />}>
            <LoginView />
        </Suspense>
    )
}