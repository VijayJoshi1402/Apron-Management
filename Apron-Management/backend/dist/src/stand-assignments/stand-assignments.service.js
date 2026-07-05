"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandAssignmentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const flight_plan_entity_1 = require("../flight-plans/entities/flight-plan.entity");
const stand_entity_1 = require("../stands/entities/stand.entity");
const stand_assignment_entity_1 = require("./entities/stand-assignment.entity");
let StandAssignmentsService = class StandAssignmentsService {
    assignmentRepository;
    flightRepository;
    standRepository;
    constructor(assignmentRepository, flightRepository, standRepository) {
        this.assignmentRepository = assignmentRepository;
        this.flightRepository = flightRepository;
        this.standRepository = standRepository;
    }
    async findAll() {
        return this.assignmentRepository.find({
            order: {
                fromTime: 'ASC',
            },
        });
    }
    async create(dto) {
        const flight = await this.flightRepository.findOne({
            where: {
                id: dto.flightPlanId,
            },
        });
        if (!flight) {
            throw new common_1.NotFoundException('Flight not found');
        }
        const stand = await this.standRepository.findOne({
            where: {
                stand: dto.standCode,
            },
        });
        if (!stand) {
            throw new common_1.NotFoundException('Stand not found');
        }
        const overlap = await this.assignmentRepository
            .createQueryBuilder('assignment')
            .where('assignment.standCode = :standCode', {
            standCode: dto.standCode,
        })
            .andWhere(`(
      :fromTime < "assignment"."toTime"
      AND
      :toTime > "assignment"."fromTime"
    )`, {
            fromTime: dto.fromTime,
            toTime: dto.toTime,
        })
            .getOne();
        if (overlap) {
            throw new common_1.BadRequestException('Stand is already occupied during this time.');
        }
        const assignment = this.assignmentRepository.create({
            flightPlan: flight,
            stand,
            flightPlanId: dto.flightPlanId,
            standCode: dto.standCode,
            fromTime: new Date(dto.fromTime),
            toTime: new Date(dto.toTime),
            remarks: dto.remarks,
        });
        return this.assignmentRepository.save(assignment);
    }
};
exports.StandAssignmentsService = StandAssignmentsService;
exports.StandAssignmentsService = StandAssignmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(stand_assignment_entity_1.StandAssignment)),
    __param(1, (0, typeorm_1.InjectRepository)(flight_plan_entity_1.FlightPlan)),
    __param(2, (0, typeorm_1.InjectRepository)(stand_entity_1.Stand)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], StandAssignmentsService);
//# sourceMappingURL=stand-assignments.service.js.map