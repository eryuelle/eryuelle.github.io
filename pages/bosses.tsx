import IconList from '../src/components/icon-list/icon-list';
import {
  BOSSES, BOSSES_ORDER
} from '../src/config/bosses';

export default function Index() {
  return (
    <div>
      <h1>Bosses</h1>
      <IconList
        title="Weekly Bosses"
        items={BOSSES_ORDER}
        dictionary={BOSSES()}
      />
    </div>
  )
}
