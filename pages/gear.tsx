import GearTable from '../src/components/gear-table/gear-table';
import { GEAR_LIST } from '../src/config/gear';

export default function Index() {
  return (
    <div>
      <h1>Gear Guide</h1>
      <GearTable icons={GEAR_LIST} />
    </div>
  )
}
