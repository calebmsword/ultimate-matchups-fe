import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Redirect } from 'react-router'
import { LandingContainer } from '../screens/Landing/LandingContainer'
import { LoginContainer } from '../screens/Login/LoginContainer'
import { RegisterContainer } from '../screens/Register/RegisterContainer'
// import { About } from '../screens/About'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingContainer />} />
                <Route path='login' element={<LoginContainer />} />
                <Route path='register' element={<RegisterContainer />} />
                {/* <Route exact path='/dashboard' component={Dashboard} /> */}
                {/* <Route exact path='/editor' component={MatchupEditor} /> */}
                {/* <Route exact path='/settings' component={Settings} /> */}
                {/* <Route exact path='about' element={
                    <Suspense fallback={<div>Ayy lmao</div>} >
                        <About />
                    </Suspense>
                } />  */}
                {/* <Route component={NoMatch} /> */}
               
            </Routes>
        </BrowserRouter>
        // <div>Hi</div>
    ) 
}