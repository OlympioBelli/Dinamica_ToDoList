import React from 'react'
import dnc from '../../assets/dnc.webp'
import './index.css'

const Header = () => {
  return (
    <header>
        <img src={dnc}></img> 
        <div className='titulo'>Lista de Tarefas</div>
    </header>
  )
}

export default Header