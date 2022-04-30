import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const LandingView = () => {
    const { t } = useTranslation();

    return (
            <div>
                <p>
                    I currently implemented a landing page but I might remove it. We probably should just check local storage to check if people are loggedIn and either redirect to /home or /login.
                </p>

                <div>
                    {t('landing.welcome')}
                </div>
                <div>
                    {t('landing.tagline')}
                </div>
                <div>
                    <Link to='/register'>
                        {t('landing.register_button_text')}
                    </Link>
                </div>
                <div>
                    <Link to='/about'>
                        {t('landing.about_button_text')}
                    </Link>
                </div>
                <div>
                    <div>
                        {t('landing.already_have_account')}
                    </div>
                    <Link to='/login'>
                        {t('landing.login_button_text')}
                    </Link>
                </div>
            </div>
    )
}