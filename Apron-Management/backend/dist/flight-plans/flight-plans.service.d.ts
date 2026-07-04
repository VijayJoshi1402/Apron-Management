import { Repository } from 'typeorm';
import { FlightPlan } from './entities/flight-plan.entity';
import { CreateFlightPlanDto } from './dto/create-flight-plan.dto';
import { UpdateFlightPlanDto } from './dto/update-flight-plan.dto';
export declare class FlightPlansService {
    private readonly flightPlanRepository;
    constructor(flightPlanRepository: Repository<FlightPlan>);
    findAll(query: any): Promise<FlightPlan[]>;
    findOne(id: number): Promise<FlightPlan>;
    findLinkedFlights(id: number): Promise<FlightPlan[]>;
    create(dto: CreateFlightPlanDto): Promise<FlightPlan>;
    update(id: number, dto: UpdateFlightPlanDto): Promise<FlightPlan>;
}
