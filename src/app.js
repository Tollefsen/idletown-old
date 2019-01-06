import { Overmind } from "overmind";
import { namespaced } from 'overmind/config'
import { createHook, createConnect } from "overmind-react";
import * as instant from './instantGratification'
import * as delayed from './delayedGratification'
import * as bank from './bank'

const config = namespaced({
    instant,
    delayed,
    bank
})

const app = new Overmind(config)

export const connect = createConnect(app)