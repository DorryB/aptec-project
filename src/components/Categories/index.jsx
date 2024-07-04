import React from 'react';
import styles from './Categories.module.scss';

export default function Categories(props) {
  const categories = [
    {
      key: 'all',
      name: 'Все',
    },
    {
      key: 'Курс',
      name: 'Курс',
    },
    {
      key: 'Консультация',
      name: 'Консультация',
    },
    {
      key: 'Гайд',
      name: 'Гайд',
    },
    {
      key: 'Наставничество',
      name: 'Наставничество ',
    },
  ];

  return (
    <div className={styles.categories}>
      {categories.map((el) => (
        <div key={el.key} onClick={() => props.chooseCategory(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
}
