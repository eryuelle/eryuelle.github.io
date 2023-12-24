import React, { useRef } from "react";

import styles from './counter.module.css';

interface CounterProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Counter({value, onChange}: CounterProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const decrement = () => {
    inputRef.current?.stepDown();
    const ev = new Event('input', { bubbles: true });
    inputRef.current?.dispatchEvent(ev);
  }
  const increment = () => {
    inputRef.current?.stepUp();
    const ev = new Event('input', { bubbles: true });
    inputRef.current?.dispatchEvent(ev);
  }

  /* TODO: Figure out better arrow PNG / alignment for arrow inside button */
  return (
    <div className="flex align-center">
      <button className={styles.button} onClick={decrement}>
        <img
          className={styles.leftarrow}
          src="/icons/common/down-arrow.png"
        />
      </button>
      <input ref={inputRef} className={styles.input} type="number" value={value} step="0.5" min="0" onChange={onChange} />
      <button className={styles.button} onClick={increment}>
        <img
          className={styles.rightarrow}
          src="/icons/common/down-arrow.png"
        />
      </button>
    </div>
  );
}
