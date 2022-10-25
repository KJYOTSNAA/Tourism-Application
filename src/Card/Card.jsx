import React from 'react'
import styles from './Card.module.css'

function Card(props) {
    const {product} = props
    return ( 
        <div className={styles.container}>
            <img src={product.images} alt='product' className={styles.productImage}/>
            <p><b>{product.name}</b></p>
            <p><i>{product.info}</i></p>
        </div>
    );
}

export default Card;