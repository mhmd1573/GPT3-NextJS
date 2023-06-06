import React from 'react';
import  styles from'./Card2.module.css';
import Image from 'next/image';

const Card2 = ({ imgUrl, date, text }) => (
  <div className={styles['gpt3__blog-container_article']}>
    <div className={styles['gpt3__blog-container_article-image']}>
      <Image src={imgUrl} alt="card" />
    </div>
    <div className={styles['gpt3__blog-container_article-content']}>
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Card2;