import * as React from "react";
import { render } from "react-dom";
import ButtonWithScoreAndUpgrade from "./instantGratification/standard";
import ProgressBar from "./delayedGratification/progressbar";
import IdleToolWrapper from './common/wrapper'

const App = () => {
    return (
        <div>
            <IdleToolWrapper>
                <ButtonWithScoreAndUpgrade />
            </IdleToolWrapper>
            <IdleToolWrapper>
                <ProgressBar />
            </IdleToolWrapper>
        </div>
    )
}

render(<App />, document.querySelector('#root'))