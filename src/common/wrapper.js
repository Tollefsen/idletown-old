import * as React from "react";

const IdleToolWrapper = (props) => {
    let style = {
        width: 200,
        height: 200,
        border: '1px solid black',
        borderRadius: 6
    }

    return (<div style={style}>{props.children}</div>)
}
export default IdleToolWrapper