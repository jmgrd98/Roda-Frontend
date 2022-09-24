import styled from 'styled-components'
import '../../styles/global.css'

export const HeaderStyle = styled.header`

header{

    background-color: black;
    color: white;
    width: 100vw;
    max-width: 1240px;
    height: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
    padding: 20px;
    }

    img{
        width: 150px;
    }

    input{
        padding: 10px;
        border-radius: 5px;
        width: 30%;
    }

    nav{
        width: 10%
    }

    ul{
        display: flex;
        gap: 10px;
        width: 30%
    }

    li{
        display: flex;
        flex-direction: column;
    }

`