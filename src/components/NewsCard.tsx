import React from 'react'
import style from '../../styles/newsCard.module.css';
import { Product } from '../data';

function NewsCard(props:Product) {
    const { title,body } = props ;
  return (
    <div className={style.card}>
        <div className={style.news_title}>
            {title}
        </div>
        <div className={style.news_body}>
            {body}
        </div>
    </div>
  )
}

export default NewsCard