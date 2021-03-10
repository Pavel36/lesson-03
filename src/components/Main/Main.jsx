import block from 'bem-cn'
import React from 'react'
import './Main.css'
import {ProductList} from "../ProductList/ProductList";

const b = block('main')

export const Main = () => (
  <main className={b()}>

    <div className={b('title')}> Products Description </div>
    <ProductList />
    <div className={b('pagination')}>
      <a href="" className={b('page')}>&laquo;</a>
      <a href="" className={b('page')}>1</a>
      <a href="" className={b('page')}>2</a>
      <a href="" className={b('page')}>3</a>
      <a href="" className={b('page')}>&raquo;</a>
    </div>
  </main>
)
