import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const RegisterView = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password_1, setPassword_1] = useState('')
    const [password_2, setPassword_2] = useState('')
    const { t } = useTranslation()
    const navigate = useNavigate()

    const loginHandler = e => {
        e.preventDefault();
        navigate('/')
    }

    return (
        <div>
            <div>
                {t('register.title')}
            </div>
            <form onSubmit={loginHandler} >
                <input 
                    type='text'
                    placeholder={t('register.textbox-username')}
                    value={username}
                    onChange={ e => setUsername(e.target.value)}
                />
                <input 
                    type='text'
                    placeholder={t('register.textbox-email')}
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
                />
                <input 
                    type='password'
                    placeholder={t('register.textbox-password_1')}
                    value={password_1}
                    onChange={ e => setPassword_1(e.target.value)}
                />
                <input 
                    type='password'
                    placeholder={t('register.textbox-password_2')}
                    value={password_2}
                    onChange={ e => setPassword_2(e.target.value)}
                />
                <input 
                    type='submit'
                    value={t('register.button-submit')}
                />
            </form>
        </div>
    )
}