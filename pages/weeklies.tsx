import styles from './weeklies.module.css';

import IconList from '../src/components/icon-list';
import {
  AR_WEEKLIES, AR_WEEKLIES_ORDER,
  B_WEEKLIES, B_WEEKLIES_ORDER,
  T_WEEKLIES, T_WEEKLIES_ORDER,
} from '../src/config/weeklies';

export default function Index() {
  return (
    <>
      <h1>Weeklies</h1>
      <div id={styles.container}>
        <div className={styles.split}>
          <h3>Wednesday Reset @ 5pm MT</h3>
          <IconList
            title="Bosses"
            items={B_WEEKLIES_ORDER}
            dictionary={B_WEEKLIES()}
          />
        </div>
        <div className={styles.split}>
          <h3>Sunday Reset @ 5pm MT</h3>
          <IconList
            title="Misc. Tasks"
            items={T_WEEKLIES_ORDER}
            dictionary={T_WEEKLIES()}
          />
          <IconList
            title="Arcane River"
            items={AR_WEEKLIES_ORDER}
            dictionary={AR_WEEKLIES()}
          />
        </div>
      </div>
    </>
  )
}
