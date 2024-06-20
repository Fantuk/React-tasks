import React, {useState, useEffect} from 'react'

import axios from 'axios'

import styles from './card.module.css'

function Card({card}) {

    const [data, setCardData] = useState({rating: {}})
    
    useEffect(() => {
        const apiUrl =`https://fakestoreapi.com/products/${card}`
        axios.get(apiUrl).then((resp) => {
            const cardData = resp.data;
            setCardData(cardData);
          })
        return () => {
          setCardData({title: 'Loading', rating: {}})
        }
    }, [card])

  return (
    <div key={data.id} className={styles.card}>
        <img src={data.image} alt="product"  className={styles.image}/>
        <div className={styles.description}>
            <h3>{data.title}</h3>
            <p>Category: {data.category}</p>
            <p>{data.description}</p>
            <p>${data.price}</p>
            <div className={styles.rating}>
                <p>Rating: {data.rating.rate} stars</p>
                <p>{data.rating.count} feedbacks</p>
            </div>
            <button>Купить</button>
        </div>
    </div>
  )
}

export default Card