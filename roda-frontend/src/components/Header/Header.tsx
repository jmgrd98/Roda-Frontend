import React from 'react'
import {HeaderStyle} from './style.js'
import logo from '../../assets/logowhite.png'

export function Header(){

    return(
    <HeaderStyle>
        <header>
            <img src={logo} alt="Logo Roda" />
            <input type="search" name="" id="" placeholder="Pesquisar livros, grupos e usuários"/>

            <nav>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </header>
    </HeaderStyle>
    )

}