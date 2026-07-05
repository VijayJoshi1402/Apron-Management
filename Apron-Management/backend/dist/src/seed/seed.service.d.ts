import { DataSource, Repository } from 'typeorm';
import { FlightPlan } from '../flight-plans/entities/flight-plan.entity';
import { Stand } from '../stands/entities/stand.entity';
import { StandAssignment } from '../stand-assignments/entities/stand-assignment.entity';
export declare class SeedService {
    private readonly flightRepository;
    private readonly standRepository;
    private readonly assignmentRepository;
    private readonly dataSource;
    constructor(flightRepository: Repository<FlightPlan>, standRepository: Repository<Stand>, assignmentRepository: Repository<StandAssignment>, dataSource: DataSource);
    seed(): Promise<{
        success: boolean;
        message: string;
        flightsImported: number;
        standsImported: number;
    }>;
}
