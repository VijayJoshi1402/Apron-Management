import { Repository } from 'typeorm';
import { FlightPlan } from '../flight-plans/entities/flight-plan.entity';
import { Stand } from '../stands/entities/stand.entity';
import { StandAssignment } from '../stand-assignments/entities/stand-assignment.entity';
export declare class DashboardService {
    private readonly flightRepository;
    private readonly standRepository;
    private readonly assignmentRepository;
    constructor(flightRepository: Repository<FlightPlan>, standRepository: Repository<Stand>, assignmentRepository: Repository<StandAssignment>);
    getDashboard(): Promise<{
        totalFlights: number;
        arrivals: number;
        departures: number;
        availableStands: number;
    }>;
}
