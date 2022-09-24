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
                    <li>
                        <img src="" alt="" srcset="" />
                        <p>Trocas</p>
                    </li>
                    <li>
                        <img src="" alt="" srcset="" />
                        <p>Chat</p>
                    </li>
                    <li>
                        <img src="" alt="" srcset="" />
                        <p>Perfil</p>
                    </li>
                </ul>
            </nav>
        </header>
    </HeaderStyle>
    )

}