import React, {useEffect} from 'react';
import './fileMenu.scss';
import {useSelector} from "react-redux";


const FileMenu = ({visible, setVisible, saveClickHandler, history}) => {
    const canvas = useSelector(state => state.canvas.canvas)
    const currentHolst = useSelector(state => state.canvas.currentHolst)

    useEffect(()=> {
        return function () {
            setVisible(false)
        }
    }, [])

    async function download() {
        const a = document.createElement("a");
        a.href = canvas.toDataURL()
        a.download = currentHolst._id + '.jpg';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    return (
        <ul className={visible ? 'file-menu file-menu_open' : 'file-menu'}>
            <li className="file-menu__item">Открыть</li>
            <li className="file-menu__item" onClick={() => saveClickHandler()}>Сохранить</li>
            <li className="file-menu__item" onClick={() => download()}>Сохранить как</li>
            <li className="file-menu__item" onClick={() => history.push('/')}>Закрыть</li>
        </ul>
    );
};

export default FileMenu;
