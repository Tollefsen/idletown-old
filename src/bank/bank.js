import React from 'react'
import { connect } from '../app';

const Bank = ({ overmind }) => {
    const { state, actions } = overmind

    return (
        <div>
            {state.bank.displayAmount}
            <button disabled={state.bank.intervalRunning} onClick={() => actions.bank.start()} >Start</button>
            <button onClick={() => actions.bank.stop()} >Stop</button>
            <button onClick={() => actions.bank.invest()} >Invest</button>
        </div>
    )
}
export default connect(Bank)