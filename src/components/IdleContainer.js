import * as React from 'react'
import { HiddenUntil, HiddenAfter, ShowBetween, IdleToolWrapper } from '../common/wrappers'
import { Progressbar, PrimaryButton, ScoreDisplay, SecondaryButton } from '../common/components'

const defaultState = {
    score: 0,
    intervalId: 0,
    incrementRate: 1,
    upgradeCost: 100,
    scoreShown: false,
    firstToolShown: false,
    secondToolShown: false,
    toolIntervalId: 0,
    progbar: 0,
    hideAuto: false,
    numberAutomachines: 1,
    upgradeAutoCost: 500
}

const toolStyle = {
    paddingTop: 20,
    display: 'flex',
    justifyContent: 'center'
}


class IdleContainer extends React.Component {
    constructor() {
        super()
        var savegame = JSON.parse(localStorage.getItem("idletown"));
        
        this.state = (savegame) ? savegame : defaultState
        this.increaseScore = this.increaseScore.bind(this)
        this.decreaseScore = this.decreaseScore.bind(this)
        this.save = this.save.bind(this)
        this.reset = this.reset.bind(this)
    }

    componentDidMount() {
        const intervalId = setInterval(this.save, 200)
        this.setState(state => {
            state.intervalId = intervalId
            return state
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }



    increaseScore(n) {
        this.setState(state =>  Object.assign({}, state, {score: state.score + n}))
        if(this.state.score > 9) this.setState(state =>  Object.assign({}, state, {scoreShown: true}))
        if(this.state.score > 49) this.setState(state =>  Object.assign({}, state, {firstToolShown: true}))
        if(this.state.score > 199) this.setState(state =>  Object.assign({}, state, {secondToolShown: true}))
    }

    decreaseScore(n) {
        this.setState(state =>  Object.assign({}, state, {score: state.score - n}))
    }

    increaseIncrementRate(n) {
        if (this.state.score < this.state.upgradeCost) return;
        this.setState(state => Object.assign({}, state, {incrementRate: state.incrementRate + n, score: state.score - state.upgradeCost, upgradeCost: state.upgradeCost + 10}))
    }

    startAuto() {
        this.setState(state => Object.assign({}, state, {hideAuto: true}))
        setInterval(() => {
            this.setState(state => {
                state.score = (state.progbar == 100) ? state.score + (state.incrementRate * state.numberAutomachines) : state.score
                state.progbar = (state.progbar < 100) ? state.progbar + 1 : 0
                return state
            })
        }, 100)
    }

    upgradeAuto() {
        if (this.state.score < this.state.upgradeAutoCost) return;
        this.setState(state =>  Object.assign({}, state, {numberAutomachines: state.numberAutomachines + 1, score: state.score - state.upgradeAutoCost}))
    }

    save() {
        localStorage.setItem('idletown', JSON.stringify(this.state));
    }

    reset() {
        this.setState(state => {
            state = defaultState
            return state
        })
    }

    render() {
        const primaryButton = (<PrimaryButton onClick={() => this.increaseScore(this.state.incrementRate)}>
            <HiddenAfter score={this.state.score} target={1}>Press me</HiddenAfter>
            <ShowBetween score={this.state.score} from={1} until={2}>Again</ShowBetween>
            <ShowBetween score={this.state.score} from={2} until={3}>Keep going!</ShowBetween>
        </PrimaryButton>)
        const secondaryButton = (<SecondaryButton onClick={() => this.increaseIncrementRate(1)}>Cost: {this.state.upgradeCost}</SecondaryButton>)
        return (
            <div>
                <ScoreDisplay score={this.state.score} shown={this.state.scoreShown}/>
                {primaryButton}
                <div style={toolStyle}>
                    <IdleToolWrapper shown={this.state.firstToolShown}>
                        Rate: {this.state.incrementRate}
                        <Progressbar score={this.state.score} ceil={this.state.upgradeCost} />
                        {secondaryButton}
                    </IdleToolWrapper>
                    <IdleToolWrapper shown={this.state.secondToolShown}>
                        #{this.state.numberAutomachines}
                        <Progressbar score={this.state.progbar} ceil={100} />
                        <SecondaryButton onClick={() => this.upgradeAuto()}>Cost: {this.state.upgradeAutoCost}</SecondaryButton>
                        <SecondaryButton onClick={() => this.startAuto()} shown={this.state.hideAuto}>Start</SecondaryButton>
                    </IdleToolWrapper>

                </div>
                
                <button onClick={() => this.reset()}>Reset</button>
            </div>
        )
    }
}

export default IdleContainer