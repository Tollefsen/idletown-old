export const logThis = ({ state }) => {
    console.log('this')
}

export const start = ({ state }) => {
    state.bank.intervalId = setInterval(() => {
        state.bank.amount += state.bank.interest
    }, 1000)
}

export const stop = ({ state }) => {
    clearInterval(state.bank.intervalId)
    state.bank.intervalId = 0
}

export const invest = ({ state }) => {
    state.bank.amount += 10
}