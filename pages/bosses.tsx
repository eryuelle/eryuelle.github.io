import IconList from '../src/components/icon-list/icon-list';
import IconListCounter from '../src/components/icon-list-counter/icon-list-counter';
import TabRow from '../src/components/tab-row/tab-row';
import {
  BOSSES, BOSSES_ORDER, MESOS_ORDER
} from '../src/config/bosses';

export default function Index() {
  const tabs = {
    "Normal": (
      <IconList
        title="Weekly Bosses"
        items={BOSSES_ORDER}
        dictionary={BOSSES()}
      />
    ),
    "Mesos": (
      <IconListCounter
        items={MESOS_ORDER}
        dictionary={BOSSES()}
      />
    ),
  };

  return (
    <div>
      {/* TODO: For all titles and subtitles, center them on page? */}
      <h1>Bosses</h1>
      <TabRow tabs={tabs} />
    </div>
  )
}
