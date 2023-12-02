import IconList from '../src/components/icon-list/icon-list';
import {
  AR_DAILIES, AR_DAILIES_ORDER,
  B_DAILIES, B_DAILIES_ORDER,
  T_DAILIES, T_DAILIES_ORDER,
} from '../src/config/dailies';

export default function Index() {
  return (
    <>
      <h1>Dailies</h1>
      <h3>Resets @ 5pm MT every day</h3>
      <IconList
        bordered={true}
        compact={true}
        title="Arcane River"
        items={AR_DAILIES_ORDER}
        dictionary={AR_DAILIES()}
      />
      <IconList
        compact={true}
        title="Misc. Tasks"
        items={T_DAILIES_ORDER}
        dictionary={T_DAILIES()}
      />
      <IconList
        compact={true}
        title="Bosses"
        items={B_DAILIES_ORDER}
        dictionary={B_DAILIES()}
      />
    </>
  )
}
