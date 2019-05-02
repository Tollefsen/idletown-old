import * as React from "react";
import { render } from "react-dom";
import IdleContainer from './components/IdleContainer'

const App = () => {
    return (
        <div>
            <IdleContainer />
        </div>
    )
}

render(<App />, document.querySelector('#root'))