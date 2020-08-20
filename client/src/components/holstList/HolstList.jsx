import React, {useEffect} from 'react';
import './holstList.scss'
import {useDispatch, useSelector} from "react-redux";
import {getHolstList} from "../../actions/holst.actions";
import Holst from "./Holst";

const HolstList = () => {
    const dispatch = useDispatch()
    const holstList = useSelector(state => state.canvas.holstList).map(holst => <Holst key={holst._id} holst={holst}/>)

    useEffect(() => {
        dispatch(getHolstList())
    }, [])

    return (
        <div className="holst-list">
            {holstList}
            <button className="holst-list__create-btn">+</button>
        </div>
    );
};

export default HolstList;
