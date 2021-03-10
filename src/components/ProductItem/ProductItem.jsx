import block from 'bem-cn'
import React from 'react'
import './ProductItem.css'

const b = block('product-item')

export const ProductItem = ({imageSrc, title, description}) => (
  <section className={b()}>
    <img src={imageSrc} alt="" className={b('image')}/>
    <div className={b('title')}>{title}</div>
    <div className={b('description')}>{description}</div>
    <div className={b('buttons')}>
      <button className={b('add-to-cart')} />
      <button className={b('like')} />
    </div>

  </section>
)
