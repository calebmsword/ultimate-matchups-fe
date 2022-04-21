import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

export const LoginView = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { t } = useTranslation();
  const navigate = useNavigate();

  const loginHandler = e => {
    e.preventDefault()
    navigate('/login')
  }

  return (
    <div>
      <p>{t('login.title')}</p>
      <form onSubmit={loginHandler} >
        <input 
          type='text'
          placeholder={t('login.textbox_username')}
          value={username}
          onChange={ e => setUsername(e.target.value)}
        />
        <input 
          type='password'
          placeholder={t('login.textbox_password')}
          value={password}
          onChange={ e => setPassword(e.target.value)}
        />
        <input 
          type='submit'
          value={t('login.button_submit')}
        />
      </form>
    </div>
  );
}