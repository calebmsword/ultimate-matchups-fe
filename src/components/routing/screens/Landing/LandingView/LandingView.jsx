import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const LandingView = () => {
    const { t } = useTranslation();

    return (
            <div>
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