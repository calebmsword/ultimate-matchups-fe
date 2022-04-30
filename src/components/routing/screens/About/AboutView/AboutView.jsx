import { useNavigate } from 'react-router'

export const AboutView = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <p onClick={goBack} style={{cursor: 'pointer'}}>
                This is a back button
            </p>
            <div>
                The layout of this page is still being determined.
            </div>
        </div>
    )
}