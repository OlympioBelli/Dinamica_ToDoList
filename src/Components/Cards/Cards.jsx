import React, {useState} from 'react'
import './index.css'


function Cards({title, title_sub, instruction}) {
    const [mostrarBnt, setMostrarBnt] = useState(false)

  return (
    <div className='cards'>
        <div className='titulo_text'> {title} </div>
        <div className='instruction_text' onClick={() => setMostrarBnt(true)}> Clique para criar um cartão. </div>

        {mostrarBnt && (
        <>
            <div className='text_box'>
                <div>{title_sub}</div>
                <div>{instruction}</div>
            </div>

            <div className='divBotoes'>
                <button onClick={() => setMostrarBnt(false)}>Adicionar Cartão</button>
                <button onClick={() => setMostrarBnt(false)}>Cancelar</button>
            </div>
        </>
        )}
        
    </div>
  )
}

export default Cards