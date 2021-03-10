import block from 'bem-cn'
import React from 'react'
import './Main.css'
import {ProductList} from "../ProductList/ProductList";

const b = block('main')

export const Main = () => (
  <main className={b()}>

    <div className={b('title')}> Products Description </div>

    <ProductList />
  </main>
)
