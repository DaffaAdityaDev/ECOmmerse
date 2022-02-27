import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'

import useStyle from './styles'

const products = [
    { id: 1, name: 'Product 1', price: '$1.00', description: 'product 1 best', image: 'https://source.unsplash.com/random/400x500' },
    { id: 2, name: 'Product 2', price: '$2.00', description: 'product 2 best', image: 'https://source.unsplash.com/random/400x400' },
    { id: 3, name: 'Product 3', price: '$3.00', description: 'product 3 best', image: 'https://source.unsplash.com/random/400x600' },
]
const Products = () => {
  const classes = useStyle();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products