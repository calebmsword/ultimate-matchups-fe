import { Link } from 'react-router-dom'

import './DashboardView.css'


export const DashboardView = () => {
  return (
    <div>
      <p>
        This is the home page. 
        Users should automatically be directed here if their login is found in localstorage.
      </p>
      <p>
        There should be a link to access settings, a link to access the about page, 
        and a display of all the user's created matchup charts. There should also
        be a button for creating a new chart.
      </p>
      <p>
        Clicking 'create new chart' (or whatever text or symbol we choose) will open the editor.
      </p>
      <p>
        Clicking a user's matchup chart will link then to the editor preloaded with that chart.
      </p>
      <p>
        <Link to='/about'>About</Link>
      </p>
      <p>
        <Link to='/settings'>Settings</Link>
      </p>
      <p>
        <Link to='/editor'>Editor</Link>
      </p>
    </div>
   
  )
}