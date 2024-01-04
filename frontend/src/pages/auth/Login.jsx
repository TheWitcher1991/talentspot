import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const [csrfmiddlewaretoken, setCsrfmiddlewaretoken] = useState('JswHLk4fNpxHkh0OObD1uKiOxSDUzkMDWtqzcsFR5pRdRfYEbNNs1AD23Hkjm2fb')

    axios.defaults.headers.common['HTTP_X_CSRFTOKEN'] = csrfmiddlewaretoken;

    const HandlerLogin = async () => {
        await axios
            .post('https://api.talentpost.ru/api/v1/login', {
                email,
                password,
                csrfmiddlewaretoken
            }, {
                withCredentials: true,
                xsrfHeaderName: 'HTTP_X_CSRFTOKEN',
                xsrfCookieName: 'XSRF-TOKEN',
            })
            .then(r => console.log(r))
            .catch(r => console.log(r))
    }

    return (
        <>
            <h1 className='auth__title'>Авторизация</h1>
            <span className='auth__span'>Рады видеть вас снова</span>
            <form action='' method='POST'>
                <input type='hidden' name='csrfmiddlewaretoken' id='csrfmiddlewaretoken' value={csrfmiddlewaretoken} />
                <label htmlFor='email' className='auth__label'>
                    <span>Электронная почта <m>*</m></span>
                    <input type='email' name='email' id='email' required=''
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor='password' className='auth__label'>
                    <span>Пароль <m>*</m></span>
                    <div className='label__password'>
                        <input type='password' name='password' id='password' required=''
                            onChange={e => setPassword(e.target.value)}
                        />
                        <i className='mdi mdi-eye'></i>
                    </div>
                </label>
                <div className='auth__exp' style={{marginTop: 5}}>
                    <div className='white__checkbox'>
                        <input type='checkbox' className='white-checkbox' name='remember' id='remember' value='1'
                            checked={remember} onChange={() => setRemember(!remember)}
                        />
                            <label htmlFor='remember'>Запомнить меня</label>
                    </div>
                    <a>Забыли пароль?</a>
                </div>
                <button className='auth__button' type='button' onClick={HandlerLogin}>Войти</button>
            </form>
        </>
    )
}
