import { useNavigate } from 'react-router'

import './SettingsView.css'


export const SettingsView = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <p onClick={goBack} style={{cursor: 'pointer'}}>
        This is a back button
      </p>

      <div>
        Configure user settings. Allows user to
        <ul>
          <li>Change profile picture</li>
          <li>Change displayname</li>
          <li>Request verification</li>
          <li>Change email?</li>
          <li>Change password?</li>
        </ul>
      </div>

    </div>
  )
}