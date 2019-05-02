export const increment =  ({ state }) => {
    state.instant.score += state.instant.incRate
}

export const upgrade = ({ state }) => {
    if (state.instant.score >= state.instant.price) {
        state.instant.score -= state.instant.price
        state.instant.incRate++
        state.instant.price += 1
    }
}