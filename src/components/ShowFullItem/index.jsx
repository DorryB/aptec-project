import React from 'react';
import styles from './ShowFullItem.module.scss';

export default function ShowFullItem(props) {
  return (
    <div className={styles.fullItem}>
      <div className={styles.div}>
        <img
          src={'./images/' + props.item.img}
          onClick={() => props.onShowItem(props.item)}
        />
        <h2>{props.item.title}</h2>
        <p>{props.item.desc}</p>
        <b>{props.item.price} ₽</b>
        <div
          className={styles.addToCard}
          onClick={() => props.onAdd(props.item)}
        >
          +
        </div>
      </div>
    </div>
  );
}
