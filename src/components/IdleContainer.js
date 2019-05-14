import * as React from 'react'

const initGameState = {
    version: 0.3,
    intervals: {
        update: 0,
        save: 0
    },
    player: {
        name: 'NAVN',
        hp: 10,
        maxHp: 10,
        energy: 10,
        maxEnergy: 10,
        talents: []
    },
    resources: {
        wood: 0,
        stone: 0,
        metal: 0,
        gold: 0,
        villagers: 0
    },
    generators: {
        wood: {
            active: false,
            rate: 1000,
            output: 1
        },
        stone: {
            active: false,
            rate: 1000,
            output: 1
        },
        metal: {
            active: false,
            rate: 1000,
            output: 1
        },
        gold: {
            active: false,
            rate: 1000,
            output: 1
        },
        villagers: {
            active: false,
            rate: 1000,
            output: 1
        }
    }
}

class IdleContainer extends React.Component {
    constructor() {
        super()
        const savegame = JSON.parse(localStorage.getItem("idletown"));
        
        this.state = (savegame) ? savegame : JSON.parse(JSON.stringify(initGameState))
        
        this.save = this.save.bind(this)
        this.reset = this.reset.bind(this)
        this.update = this.update.bind(this)

        this.startGenerator = this.startGenerator.bind(this)
    }

    componentDidMount() {
        const updateId = setInterval(this.update, 200)
        const saveId = setInterval(this.save, 5000)
        this.setState(state => {
            state.intervals.update = updateId
            return state
        })
    }

    update() {
        /* code that updates */
        const generators = this.state.generators
        const oldResources = this.state.resources
        let newResources = oldResources

        Object.keys(oldResources).forEach(key => {
            if (generators[key].active) newResources[key] = oldResources[key] + generators[key].output
        });
        this.setState(state => {
            state.resources = newResources
            return state
        })
    }

    componentWillUnmount() {
        Object.keys(this.state.intervals).forEach(key => {
            clearInterval(this.state.intervals[key])
        })
    }

    reset() {
        this.setState(state => {
            state = JSON.parse(JSON.stringify(initGameState))
            return state
        })
    }

    save() {
        localStorage.setItem('idletown', JSON.stringify(this.state));
    }


    startGenerator(element) {
        this.setState(state => {
            Object.keys(state.generators).forEach(key => state.generators[key].active = false)
            state.generators[element].active = true
            return true
        })
    }

    render() {
        const {wood, stone, metal, gold} = this.state.resources

        return (
            <div>
                Wood: {wood}
                <button onClick={() => this.startGenerator('wood')}>Start wood</button>
                Stone: {stone}
                <button onClick={() => this.startGenerator('stone')}>Start stone</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default IdleContainer