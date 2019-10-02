import styled from 'styled-components'

import bgImage from '../../img/bg.jpg'

export const StyledTetrisWrapper = styled.div`
width: 100vw;
height:100vh;
background:url(${bgImage}) #000;
background-size:cover;
overflow : hidden;
`

export const StyledTetris = styled.div`
display:flex;
align-items:flex-start;
padding:40xp;
margin:0 auto;
max-width: 900px;

aside {
    width:100%;
    max-width:200px;
    
}
`