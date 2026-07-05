import { Repository } from 'typeorm';
import { FlightPlan } from '../flight-plans/entities/flight-plan.entity';
import { Stand } from '../stands/entities/stand.entity';
import { CreateStandAssignmentDto } from './dto/create-stand-assignment.dto';
import { StandAssignment } from './entities/stand-assignment.entity';
export declare class StandAssignmentsService {
    private readonly assignmentRepository;
    private readonly flightRepository;
    private readonly standRepository;
    constructor(assignmentRepository: Repository<StandAssignment>, flightRepository: Repository<FlightPlan>, standRepository: Repository<Stand>);
    findAll(): Promise<StandAssignment[]>;
    create(dto: CreateStandAssignmentDto): Promise<StandAssignment>;
}
