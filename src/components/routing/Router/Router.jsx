import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import { LandingContainer } from '../screens/Landing/LandingContainer'
import { LoginContainer } from '../screens/Login/LoginContainer'
import { RegisterContainer } from '../screens/Register/RegisterContainer'
import { DashboardContainer } from '../screens/Dashboard/DashboardContainer'
import { SettingsContainer } from '../screens/Settings/SettingsContainer'
import { AboutContainer } from '../screens/About/AboutContainer'
import { EditorContainer } from '../screens/Editor/EditorContainer'


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingContainer />} />
                <Route path='login' element={<LoginContainer />} />
                <Route path='register' element={<RegisterContainer />} />
                <Route path='home' element={<DashboardContainer />} />
                <Route path='editor' element={<EditorContainer />} />
                <Route path='settings' element={<SettingsContainer />} />
                <Route path='about' element={<AboutContainer />} />
                {/* <Route element={NoMatch} /> */}
               
            </Routes>
        </BrowserRouter>
    ) 
}
