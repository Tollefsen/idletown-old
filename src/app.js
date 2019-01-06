import { Overmind } from "overmind";
import { namespaced } from 'overmind/config'
import { createHook, createConnect } from "overmind-react";
import * as instant from './instantGratification'
import * as delayed from './delayedGratification'

const config = namespaced({
    instant,
    delayed
})

const app = new Overmind(config)

export const connect = createConnect(app)