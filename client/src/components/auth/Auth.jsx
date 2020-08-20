import React, {useState} from 'react';
import './auth.scss'
import {useDispatch, useSelector} from "react-redux";
import {login, registration} from "../../actions/user.actions";

const Auth = () => {
    const isLogin = useSelector(state => state.user.isLogin)
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    return (
        <div className="auth">
            <div className="auth__content">
                <div className="auth__title">{isLogin ? "Авторизация" : "Регистрация"}</div>
                <input
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    type="text"
                    className="auth__username auth__input"
                    placeholder="Введите username..."
                />
                <input
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    className="auth__password auth__input"
                    placeholder="Введите пароль..."
                />
                <button
                    onClick={isLogin ? ()=> dispatch(login(username, password)) : () => registration(username, password)}
                    className="auth__btn">
                    {isLogin ? "Войти" : "Зарегистрироваться"}
                </button>
            </div>
        </div>
    );
};

export default Auth;
