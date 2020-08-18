import React from 'react';
import './leftBar.scss'
import {useDispatch, useSelector} from "react-redux";
import {setColor, setFillColor, setStrokeColor, setTool} from "../../reducers/toolReducer";
import Brush from "../../tools/Brush";
import Cursor from "../../tools/Cursor";
import Line from "../../tools/Line";
import Eraser from "../../tools/Eraser";
import Pencil from "../../tools/Pencil";
import Text from "../../tools/Text";
import Square from "../../tools/Square";
import Circle from "../../tools/Circle";

const LeftBar = () => {
    const dispatch = useDispatch()
    const canvas = useSelector(state => state.canvas.canvas)

    function setColorHandler(e){
        e.preventDefault()
        dispatch(setFillColor(e.target.value))
        dispatch(setStrokeColor(e.target.value))
    }

    return (
        <div className="leftbar">
            <div className="leftbar__btns">
                <button className="leftbar__cursor leftbar__btn" onClick={() => dispatch(setTool(new Cursor(canvas)))}/>
                <button className="leftbar__brush leftbar__btn" onClick={() => dispatch(setTool(new Brush(canvas)))}/>
                <button className="leftbar__pencil leftbar__btn" onClick={() => dispatch(setTool(new Pencil(canvas)))}/>
                <button className="leftbar__text leftbar__btn" onClick={() => dispatch(setTool(new Text(canvas)))}/>
                <button className="leftbar__eraser leftbar__btn" onClick={() => dispatch(setTool(new Eraser(canvas)))}/>
                <button className="leftbar__line leftbar__btn" onClick={() => dispatch(setTool(new Line(canvas)))}/>
                <button className="leftbar__square leftbar__btn" onClick={() => dispatch(setTool(new Square(canvas)))}/>
                <button className="leftbar__circle leftbar__btn" onClick={() => dispatch(setTool(new Circle(canvas)))}/>
            </div>
            <input type="color" className="leftbar__color-input" onInput={(e) => setColorHandler(e)}/>
        </div>
    );
};

export default LeftBar;
