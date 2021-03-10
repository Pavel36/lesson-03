import block from 'bem-cn'
import React from 'react'
import './Footer.css'

const b = block('footer')

export const Footer = () => (

  <footer className={b()}>
    <div className={b('row')}>
      <div className={b('col')}>links</div>
      <div className={b('col')}>d</div>
      <div className={b('col')}>w</div>
    </div>
  </footer>

  )
