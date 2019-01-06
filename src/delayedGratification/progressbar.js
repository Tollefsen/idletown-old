import * as React from "react";
import { useOvermind } from "../app";

const ProgressBar = () => {
    const { state, actions } = useOvermind()
    let thisState = state.progressbar
    let thisActions = actions.progressbar

    let divStyle = {
        width: 100,
        height: 10,
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: 6
    }
    let innerStyle = {
        width: thisState.progbar,
        height: 10,
        backgroundColor: 'black',
        overflow: 'hidden'
    }

    return (
        <div>
            <h2>{thisState.score}</h2>
            <div style={divStyle} >
                <div style={innerStyle} ></div>
            </div>
            <button onClick={thisActions.startTimer} >Progbar</button>
        </div>
    )
}
export default ProgressBar