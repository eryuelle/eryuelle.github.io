import DayCountdown from '../src/components/day-countdown/day-countdown';
import IconList from '../src/components/icon-list/icon-list';
import TabRow from '../src/components/tab-row/tab-row';
import {
  AR_DAILIES, AR_DAILIES_ORDER,
  B_DAILIES, B_DAILIES_ORDER,
  T_DAILIES, T_DAILIES_ORDER,
} from '../src/config/dailies';
import {
  AR_WEEKLIES, AR_WEEKLIES_ORDER,
  T_WEEKLIES, T_WEEKLIES_ORDER,
} from '../src/config/weeklies';

export default function Index() {
  const tabs = {
    "Dailies": (
      <>
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
    ),
    "Sunday Reset": (
      <>
        <IconList
          bordered={true}
          title="Misc. Tasks"
          items={T_WEEKLIES_ORDER}
          dictionary={T_WEEKLIES()}
        />
        <IconList
          compact={true}
          bordered={true}
          title="Arcane River"
          items={AR_WEEKLIES_ORDER}
          dictionary={AR_WEEKLIES()}
        />
      </>
    ), 
    "Wednesday Reset": (
      <>
        <div className="tmargin-8">
          Check out the <a href="/bosses">Bosses</a> tab!
        </div>
      </>
    ),
  };
  
  return (
    <div>
      <h1>Chores</h1>
      <DayCountdown />
      <TabRow tabs={tabs} />
    </div>
  )
}
