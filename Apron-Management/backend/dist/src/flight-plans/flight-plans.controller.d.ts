import { FlightPlansService } from './flight-plans.service';
import { CreateFlightPlanDto } from './dto/create-flight-plan.dto';
import { UpdateFlightPlanDto } from './dto/update-flight-plan.dto';
export declare class FlightPlansController {
    private readonly flightPlansService;
    constructor(flightPlansService: FlightPlansService);
    findAll(query: any): Promise<import("./entities/flight-plan.entity").FlightPlan[]>;
    findOne(id: string): Promise<import("./entities/flight-plan.entity").FlightPlan>;
    findLinkedFlights(id: string): Promise<import("./entities/flight-plan.entity").FlightPlan[]>;
    create(dto: CreateFlightPlanDto): Promise<import("./entities/flight-plan.entity").FlightPlan>;
    update(id: string, dto: UpdateFlightPlanDto): Promise<import("./entities/flight-plan.entity").FlightPlan>;
}
