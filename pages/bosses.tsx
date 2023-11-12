import IconList from '../src/components/icon-list';
import {
  BOSSES, BOSSES_ORDER
} from '../src/config/bosses';

export default function Index() {
  return (
    <>
      <h1>Bosses</h1>
      <IconList
        title="Weekly Bosses"
        items={BOSSES_ORDER}
        dictionary={BOSSES()}
      />
    </>
  )
}
