import block from 'bem-cn'
import React from 'react'
import './ProductList.css'
import {ProductItem} from "../ProductItem/ProductItem";

const b = block('product-list')

export const ProductList = () => (
  <section>
    <div className={('product-list')}>
      <div className={b('row')}>
        <div className={b('col')}>
          <ProductItem imageSrc="/images/CityBackground.jpeg" description="Best product in the world. You should buy it." title="Product 1"/>
        </div>
        <div className={b('col')}>
          <ProductItem imageSrc="/images/CityBackground.jpeg" description="Best product in the world. You should buy it." title="Product 2"/>
        </div>
        <div className={b('col')}>
          <ProductItem imageSrc="/images/CityBackground.jpeg" description="Best product in the world. You should buy it." title="Product 3"/>
        </div>
        <div className={b('col')}>
          <ProductItem imageSrc="/images/CityBackground.jpeg" description="Best product in the world. You should buy it." title="Product 4"/>
        </div>
      </div>
      <div className={b('row')}>
        <div className={b('col')}>
          <ProductItem imageSrc="/images/CityBackground.jpeg" description="Best product in the world. You should buy it." title="Product 1"/>
        </div>
        <div className={b('col')}>
          <ProductItem imageSrc="/images/CityBackground.jpeg" description="Best product in the world. You should buy it." title="Product 2"/>
        </div>
        <div className={b('col')}>
          <ProductItem imageSrc="/images/CityBackground.jpeg" description="Best product in the world. You should buy it." title="Product 3"/>
        </div>
        <div className={b('col')}>
          <ProductItem imageSrc="/images/CityBackground.jpeg" description="Best product in the world. You should buy it." title="Product 4"/>
        </div>
      </div>
      <div className={b('row')}>
        <div className={b('col')}>
          <ProductItem imageSrc="/images/CityBackground.jpeg" description="Best product in the world. You should buy it." title="Product 1"/>
        </div>
        <div className={b('col')}>
          <ProductItem imageSrc="/images/CityBackground.jpeg" description="Best product in the world. You should buy it." title="Product 2"/>
        </div>
        <div className={b('col')}>
          <ProductItem imageSrc="/images/CityBackground.jpeg" description="Best product in the world. You should buy it." title="Product 3"/>
        </div>
        <div className={b('col')}>
          <ProductItem imageSrc="/images/CityBackground.jpeg" description="Best product in the world. You should buy it." title="Product 4"/>
        </div>
      </div>
      <div className={b('row')}>
        <div className={b('col')}>
          <ProductItem imageSrc="/images/CityBackground.jpeg" description="Best product in the world. You should buy it." title="Product 1"/>
        </div>
        <div className={b('col')}>
          <ProductItem imageSrc="/images/CityBackground.jpeg" description="Best product in the world. You should buy it." title="Product 2"/>
        </div>
        <div className={b('col')}>
          <ProductItem imageSrc="/images/CityBackground.jpeg" description="Best product in the world. You should buy it." title="Product 3"/>
        </div>
        <div className={b('col')}>
          <ProductItem imageSrc="/images/CityBackground.jpeg" description="Best product in the world. You should buy it." title="Product 4"/>
        </div>
      </div>
    </div>
  </section>
)
