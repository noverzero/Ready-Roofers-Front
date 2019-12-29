export const increment = (qty) => {
    return {
        type: 'INCREMENT',
        payLoad: qty
    }
}
export const decrement = () => {
    return {type: 'DECREMENT'}
}