import IconList from '../src/components/icon-list';
import {
  AR_DAILIES, AR_DAILIES_ORDER,
  B_DAILIES, B_DAILIES_ORDER,
  T_DAILIES, T_DAILIES_ORDER,
} from '../src/config/dailies';

export default function Index() {
  return (
    <>
      <h1>Dailies</h1>
      <div>Resets at 5pm MT every day</div>
      <IconList
        title="Arcane River"
        items={AR_DAILIES_ORDER}
        dictionary={AR_DAILIES()}
      />
      <IconList
        title="Misc. Tasks"
        items={T_DAILIES_ORDER}
        dictionary={T_DAILIES()}
      />
      <IconList
        title="Bosses"
        items={B_DAILIES_ORDER}
        dictionary={B_DAILIES()}
      />
    </>
  )
}
