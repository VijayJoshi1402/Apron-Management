import { CreateStandAssignmentDto } from './dto/create-stand-assignment.dto';
import { StandAssignmentsService } from './stand-assignments.service';
export declare class StandAssignmentsController {
    private readonly assignmentService;
    constructor(assignmentService: StandAssignmentsService);
    findAll(): Promise<import("./entities/stand-assignment.entity").StandAssignment[]>;
    create(dto: CreateStandAssignmentDto): Promise<import("./entities/stand-assignment.entity").StandAssignment>;
}
