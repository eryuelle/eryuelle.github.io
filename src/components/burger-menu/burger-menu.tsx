import styles from './burger-menu.module.css';

interface BurgerMenuProps {
  checkboxRef: React.RefObject<HTMLInputElement>;
}

export default function BurgerMenu({ checkboxRef }: BurgerMenuProps) {
  return (
    <div className={styles.burgerMenu}>
      <input type="checkbox" ref={checkboxRef} />
      <div className={styles.burgerLines}>
        <span className={`${styles.line} ${styles.line1}`}></span>
        <span className={`${styles.line} ${styles.line2}`}></span>
        <span className={`${styles.line} ${styles.line3}`}></span>
      </div>

      <div className={styles.menu}>
        <li><a className={styles.menuItem} href="/">Dailies</a></li>
        <li><a className={styles.menuItem} href="/weeklies">Weeklies</a></li>
        <li><a className={styles.menuItem} href="/bosses">Bosses</a></li>
        <li><a className={styles.menuItem} href="/training">Training</a></li>
        <li><a className={styles.menuItem} href="/gear">Gear Progression</a></li>
        <li><a className={styles.menuItem} href="/checklists">Checklists</a></li>
        <li><a className={styles.menuItem} href="/links">External Links</a></li>
      </div>
    </div>
  );
}
