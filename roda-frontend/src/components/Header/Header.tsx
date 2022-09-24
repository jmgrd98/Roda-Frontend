import React from 'react'
import {HeaderStyle} from './style.js'
import logo from '../../assets/logowhite.png'
import '../../styles/global.css'
import { Link } from 'react-router-dom'
import {BiBookAlt} from 'react-icons/bi'

const iconName1: string = `${BiBookAlt}`
const iconName2: string = `${BiBookAlt}`
const iconName3: string = `${BiBookAlt}`

export function Header(){

    return(
    <HeaderStyle>
        <header>
            <img src={logo} alt="Logo Roda" />
            <input type="search" name="" id="" placeholder="Pesquisar livros, grupos e usuários"/>

            <nav>
                <ul>
                    <li>
                    <Link to="/trocas">
                        <img src={iconName1} alt="Ícone Trocas" />
                        <p>Trocas</p>
                    </Link>
                    </li>
                    <li>
                    <Link to="/chat">
                        <img src={iconName1} alt="Ícone Chat" />
                        <p>Chat</p>
                    </Link>
                    </li>
                    <li>
                    <Link to="">
                        <img src={iconName1} alt="Ícone Notificações" />
                        <p>Notificações</p>
                    </Link>
                    </li>
                    <li>
                    <Link to="/perfil">
                        <img src={iconName1} alt="Ícone Perfil"  />
                        <p>Perfil</p>
                    </Link>
                    </li>
                </ul>
            </nav>
        </header>
    </HeaderStyle>
    )

}