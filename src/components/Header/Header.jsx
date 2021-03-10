import block from 'bem-cn'
import React from 'react'
import './Header.css'

const b = block('header')

export const Header = () => (
  <header className={b()}>
    <div className={b('row')}>
      <div className={b('tab')}>Home</div>
      <div className={b('tab')}>All products</div>
      <div className={b('tab')}>My account</div>
      <div className={b('tab')}>Contact us</div>
      <div className={b('tab')}>
        <form className={b('search')}>sss</form>
      </div>
      <button className={b('cart')} />

    </div>
    <div className={b('row')}>
      <div className={b('img')}>
        <img src="/images/Background.jpg" className={b('img')} alt=""/>
      </div>
    </div>

  </header>
)
