import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles'

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  
  

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography varint="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography varint="h5">
            {product.price.formatted}
          </Typography>
        </div>
        <Typography varint="body1" color="textSecondary" dangerousSetInnerHTML={ { __html: product.description } }/>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="add to cart" onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product