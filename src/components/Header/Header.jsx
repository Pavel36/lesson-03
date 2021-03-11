import block from 'bem-cn'
import React from 'react'
import './Header.css'

const b = block('header')

export const Header = () => (
  <header className={b()}>
    <div className={b('row')}>
      <a href="#" className={b('tab')}>Home</a>
      <a href="#" className={b('tab')}>All products</a>
      <a href="#" className={b('tab')}>My account</a>
      <a href="#" className={b('tab')}>Contact us</a>
      <div className={b('tab-search')}>
        <input className={b('search')} placeholder="search product"/>
        <img src="/images/search.png" className={b('search-img')} alt=""/>
      </div>
      <a href="#" className={b('cart')}>
        <img src="/images/cart.png" alt="" className={b('cart-img')}/>
      </a>

    </div>
    <div className={b('row')}>
      <div className={b('img')}>
        <img src="/images/Background.jpg" className={b('img')} alt=""/>
      </div>
    </div>

  </header>
)
