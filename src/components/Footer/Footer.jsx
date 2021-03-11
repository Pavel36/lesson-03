import block from 'bem-cn'
import React from 'react'
import './Footer.css'

const b = block('footer')

export const Footer = () => (

  <footer className={b()}>
    <div className={b('row')}>
      <a href="#" className={b('col')}>
        <img className={b('logo')} src="/images/Footer/instagram.png" alt=""/>
      </a>
      <a href="#" className={b('col')}>
        <img className={b('logo')} src="/images/Footer/facebook.png" alt=""/>
      </a>
      <a href="#" className={b('col')}>
        <img className={b('logo')} src="/images/Footer/vk.png" alt=""/>
      </a>
    </div>
  </footer>

  )
