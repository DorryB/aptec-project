import React from 'react';
import styles from './Order.module.scss';
import { TiDeleteOutline } from 'react-icons/ti';

export default function Orders(props) {
  return (
    <div className={styles.item}>
      <img src={'./images/' + props.item.img} />
      <h2>{props.item.title}</h2> 
      <b>{props.item.price} ₽</b>
      <TiDeleteOutline className={styles.deletIcon}
        onClick={() => props.onDelete(props.item.id)}
      />
      </div>
  );
}
