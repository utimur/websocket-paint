import React, {useState} from 'react';
import './createPopup.scss';
import {useDispatch, useSelector} from "react-redux";
import {hidePopup} from "../../reducers/appReducer";
import {createHolst} from "../../actions/holst.actions";

const CreatePopup = () => {
    const isPopupVisible = useSelector(state => state.app.isPopupVisible)
    const dispatch = useDispatch()
    const [title, setTitle ] = useState('')

    return (
        <div className={isPopupVisible ? "create-popup create-popup_open" : "create-popup"} onClick={()=>dispatch(hidePopup())}>
            <div className="create-popup__content" onClick={e => e.stopPropagation()}>
                <div className="create-popup__header">
                    <div className="create-popup__title">Create new holst</div>
                    <div className="create-popup__close" onClick={()=>dispatch(hidePopup())}>X</div>
                </div>
                <input
                    onChange={(e)=> setTitle(e.target.value)}
                    value={title}
                    type="text"
                    className="create-popup__input"
                    placeholder="Input holst name..."/>
                <button className="create-popup__create" onClick={()=> dispatch(createHolst(title))}>Create</button>
            </div>
        </div>
    );
};

export default CreatePopup;
