import React from 'react'

import { createStage } from '../gameHelpers'
import {StyledTetrisWrapper,StyledTetris } from './styles/StyledTetris'
//components 
import Cell from './Cell'
import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'


const Tetris = () => {

    // console.log(createStage())

    return (
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage={createStage()} />
            <aside>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
            </aside>
            <StartButton />
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}
export default Tetris;