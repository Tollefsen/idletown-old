import * as React from "react";
import { connect } from "../app";

const ProgressBar = ({ overmind }) => {
    const { state, actions } = overmind

    let divStyle = {
        width: 100,
        height: 10,
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: 6
    }
    let innerStyle = {
        width: state.delayed.progbar,
        height: 10,
        backgroundColor: 'black',
        overflow: 'hidden'
    }

    return (
        <div>
            <h2>{state.delayed.score}</h2>
            <div style={divStyle} >
                <div style={innerStyle} ></div>
            </div>
            <button onClick={actions.delayed.startTimer} >Progbar</button>
        </div>
    )
}
export default connect(ProgressBar)