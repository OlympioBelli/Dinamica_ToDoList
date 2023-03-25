import React from 'react'
import Cards from '../Cards/Cards'
import './index.css'

function Columns() {
  return (
    <div className='Columns_area'>
        <Cards title='Planejamento' title_sub='Título' instruction='Descrissão'/>
        <Cards title='A Fazer' title_sub='' instruction='' />
        <Cards title='Fazendo' title_sub='' instruction='' />
        <Cards title='Feito' title_sub='' instruction='' />
    </div>
  )
}

export default Columns