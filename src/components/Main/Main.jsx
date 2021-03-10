import block from 'bem-cn'
import React from 'react'
import './Main.css'

const b = block('main')

export const Main = () => (
  <main className={b()}>
    <span className={b('title')}>
      Application title
    </span>
  </main>
)
