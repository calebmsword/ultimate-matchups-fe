import { Suspense } from "react"
import { LoadingCircle } from "../../../../snippets/LoadingCircle"
import { RegisterView } from "../RegisterView"

export const RegisterContainer = () => {
    return (
        <Suspense fallback={<LoadingCircle />}>
            <RegisterView />
        </Suspense>
    )
}