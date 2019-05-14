export const state = {
    amount: 0,
    max: 100,
    interest: state => (state.amount * .1),
    displayAmount: state => Math.floor(state.amount),
    intervalId: 0,
    intervalRunning: state => state.intervalId !== 0
}