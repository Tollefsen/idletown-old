import * as React from 'react'

export const HiddenUntil = ( props ) => {
    let style = {
        opacity: (props.score < props.target) ? 0 : 1
    }
    return (<div style={style}>{props.children}</div>)
}

export const HiddenAfter = ( props ) => {
    let style = {
        opacity: (props.score > props.target) ? 0 : 1
    }
    return (<div style={style}>{props.children}</div>)
}

export const ShowBetween = ( props ) => {
    return (<HiddenUntil score={props.score} target={props.from}><HiddenAfter score={props.score} target={props.until}>{props.children}</HiddenAfter></HiddenUntil>)
}

export const IdleToolWrapper = (props) => {
    let style = {
        width: 200,
        height: 200,
        border: '1px solid black',
        borderRadius: 6,
        opacity: (props.shown) ? 1 : 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    }

    return (<div style={style}>{props.children}</div>)
}