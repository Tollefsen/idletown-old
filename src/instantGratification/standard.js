import * as React from "react";
import { connect } from "../app";

const ButtonWithScoreAndUpgrade = ({ overmind }) => {
    const { state, actions } = overmind

    

    return (
        <div>
            <h2>{state.instant.score}</h2>
            <button onClick={actions.instant.increment}>Inc</button>
            <button onClick={actions.instant.upgrade}>{state.instant.price}$</button>
        </div>
    )
}
export default connect(ButtonWithScoreAndUpgrade)