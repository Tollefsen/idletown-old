import * as React from 'react'

const theme = {
    colors: {
        primary: 'lightgreen',
        secondary: 'lightgrey'
    }
}

export const Progressbar = (props) => {
    const progress = (props.score > props.ceil) ? 100 : (props.score / props.ceil) * 100
    const divStyle = {
        width: 100,
        height: 10,
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: 6,
        display: 'flex',
        alignSelf: 'center',
        margin: 5
    }
    const innerStyle = {
        width: progress,
        height: 10,
        backgroundColor: theme.colors.primary,
        overflow: 'hidden'
    }
    return (
        <div style={divStyle} >
            <div style={innerStyle} ></div>
        </div>
    )
}

export const PrimaryButton = (props) => {
    const style = {
        width: 400,
        height: 200,
        backgroundColor: theme.colors.primary,
        borderRadius: 7,
        fontSize: 34
    }
    const flex = {
        display: 'flex',
        justifyContent: 'center'
    }
    return (<div style={flex}><button style={style} onClick={props.onClick} >{props.children}</button></div>)
}

export const SecondaryButton = (props) => {
    const style = {
        backgroundColor: theme.colors.secondary,
        opacity: (props.shown) ? 0 : 1,
        margin: 5
    }
    return (<button style={style} onClick={props.onClick} >{props.children}</button>)
}

export const ScoreDisplay = (props) => {
    const style = {
        fontSize: 400,
        opacity: (props.shown) ? 1 : 0,
        margin: '0 auto',
        textAlign: 'center'
    }
    return (<div style={style}>{props.score}</div>)
}