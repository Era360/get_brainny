export const generateNumber = (max = 20, min = 0) => {
    // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return Math.round(Math.random() * (max - min) + min)
}

export const generateSign = () => {
    let signs = ["+", "-", "*", "/"]
    return signs[Math.floor(Math.random() * signs.length)]
}