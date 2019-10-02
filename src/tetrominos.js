export const TETROMINOS = {
    0: { shape: [[0]], color: '0,0,0' },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ], color: '54,215,255'//light-blue
    },
    J: {
        shape: [
            [0, 'J', 0, 0],
            [0, 'J', 0, 0],
            ['J', 'J', 0, 0],
        ], color: '253,141,19'//orange
    },
    L: {
        shape: [
            [0, 'L', 0, 0],
            [0, 'L', 0, 0],
            [0, 'L', 'L', 0],
        ], color: '0,76,197'//deep blue
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O']
        ], color: '253,206,19'//yellow
    },
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0, 0]
        ], color: '135,135,195'//purple
    },
    S: {
        shape: [
            [0, 0, 0, 0],
            [0, 0, 'S', 'S'],
            ['S', 'S', 0, 0],
        ], color: '21,212,2'//green
    },
    Z: {
        shape: [
            [0, 0, 0, 0],
            ['Z', 'Z', 0, 0],
            [0, 0, 'Z', 'Z'],
        ], color: '241,34,34'//red
    }
}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ'
    const randTetromino =
        tetrominos[Math.floor(Math.random() * tetrominos.length)]
    return TETROMINOS[randomTetromino]
}