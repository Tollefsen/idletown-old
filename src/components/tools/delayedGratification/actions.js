export const startTimer = ({ state }) => {
    let nr = setInterval(() => {
        state.delayed.progbar++
        if(state.delayed.progbar === 100) {
            state.delayed.score += state.delayed.incRate
            state.delayed.progbar = 0
            clearInterval(nr)
        }
    }, 100)
}