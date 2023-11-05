import IconList from '../src/components/icon-list';
import { DAILIES, DAILIES_ORDER } from '../src/config/dailies';

export default function Index() {
  return (
    <>
      <h1>Dailies</h1>
      <div>Resets at 6pm MT</div>
      <IconList
        items={DAILIES_ORDER}
        dictionary={DAILIES}
      />
    </>
  )
}
