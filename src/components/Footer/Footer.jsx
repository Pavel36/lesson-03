import block from 'bem-cn'
import React from 'react'
import './Footer.css'

const b = block('footer')

export const Footer = () => (

  <footer className={b()}>
    <span className={b('title')}>
      Application title
    </span>
  </footer>

  )
