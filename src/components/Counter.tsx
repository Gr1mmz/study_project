import { FC, useState } from 'react';
import styles from './Counter.module.scss';

export const Counter: FC = ({}) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button className={styles.btn} onClick={decrement}>decrement</button>
      <span>{count}</span>
      <button className={styles.btn} onClick={increment}>increment</button>
    </div>
  )
};