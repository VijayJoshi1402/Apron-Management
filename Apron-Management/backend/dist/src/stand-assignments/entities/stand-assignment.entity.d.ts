import { FlightPlan } from '../../flight-plans/entities/flight-plan.entity';
import { Stand } from '../../stands/entities/stand.entity';
export declare class StandAssignment {
    id: number;
    flightPlan: FlightPlan;
    stand: Stand;
    flightPlanId: number;
    standCode: string;
    fromTime: Date;
    toTime: Date;
    remarks: string;
}
