import { FacilityItem } from './FacilityViewTypes';
import { SummaryStat } from './SummaryStatTypes';

export interface FacilitiesOverviewProps {
    facilities: FacilityItem[];
    stats?: SummaryStat[];
}
