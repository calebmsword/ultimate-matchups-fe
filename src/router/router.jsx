import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<></>} />
            </Routes>
        </BrowserRouter>
    )
}