import { Overmind } from "overmind";
import { namespaced } from 'overmind/config'
import { createHook, createConnect } from "overmind-react";
import * as instant from './instantGratification'

let progressbar = {
    state: {
        score: 0,
        incRate: 1,
        price: 10,
        progbar: 0
    },
    actions: {
        startTimer ({ state }) {
            let nr = setInterval(() => {
                state.progressbar.progbar++
                if(state.progressbar.progbar === 100) {
                    state.progressbar.score += state.progressbar.incRate
                    state.progressbar.progbar = 0
                    clearInterval(nr)
                }
            }, 100)
        }
    }
}

const config = namespaced({
    instant
})

const app = new Overmind(config)

export const connect = createConnect(app)