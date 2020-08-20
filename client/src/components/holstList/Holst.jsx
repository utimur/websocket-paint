import React from 'react';
import './HolstList'
import {useHistory} from 'react-router-dom'

const Holst = ({holst}) => {
    const history = useHistory()
    console.log(holst.img)
    return (
        <div className="holst" onClick={()=> history.push(`/canvas/${holst._id}`)}>
            <div className="holst__title">{holst.title}</div>
            <img className="holst__image" src={holst.img} alt=""/>
            <div className="holst__updated">{holst.updated.slice(0,10)}</div>
        </div>
    );
};

export default Holst;
