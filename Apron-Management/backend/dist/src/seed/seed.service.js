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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const flight_plan_entity_1 = require("../flight-plans/entities/flight-plan.entity");
const stand_entity_1 = require("../stands/entities/stand.entity");
const stand_assignment_entity_1 = require("../stand-assignments/entities/stand-assignment.entity");
const flightplans_json_1 = __importDefault(require("../../data/flightplans.json"));
const stands_json_1 = __importDefault(require("../../data/stands.json"));
let SeedService = class SeedService {
    flightRepository;
    standRepository;
    assignmentRepository;
    dataSource;
    constructor(flightRepository, standRepository, assignmentRepository, dataSource) {
        this.flightRepository = flightRepository;
        this.standRepository = standRepository;
        this.assignmentRepository = assignmentRepository;
        this.dataSource = dataSource;
    }
    async seed() {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.query('TRUNCATE TABLE stand_assignments RESTART IDENTITY CASCADE');
            await queryRunner.query('TRUNCATE TABLE flight_plans RESTART IDENTITY CASCADE');
            await queryRunner.query('TRUNCATE TABLE stands RESTART IDENTITY CASCADE');
            const flights = flightplans_json_1.default;
            const stands = stands_json_1.default;
            const batchSize = 50;
            for (let i = 0; i < flights.length; i += batchSize) {
                const batch = flights.slice(i, i + batchSize).map((item) => ({
                    ...item,
                    created: item.created ? new Date(item.created) : null,
                    updated: item.updated ? new Date(item.updated) : null,
                    aibt: item.aibt ? new Date(item.aibt) : null,
                    sta: item.sta ? new Date(item.sta) : null,
                    aobt: item.aobt ? new Date(item.aobt) : null,
                    std: item.std ? new Date(item.std) : null,
                }));
                await queryRunner.manager
                    .createQueryBuilder()
                    .insert()
                    .into(flight_plan_entity_1.FlightPlan)
                    .values(batch)
                    .execute();
            }
            const uniqueStands = Array.from(new Map(stands.map((stand) => [stand.stand, stand])).values());
            for (let i = 0; i < uniqueStands.length; i += batchSize) {
                const batch = uniqueStands.slice(i, i + batchSize);
                await queryRunner.manager
                    .createQueryBuilder()
                    .insert()
                    .into(stand_entity_1.Stand)
                    .values(batch)
                    .orIgnore()
                    .execute();
            }
            await queryRunner.commitTransaction();
            return {
                success: true,
                message: 'Database seeded successfully.',
                flightsImported: flights.length,
                standsImported: uniqueStands.length,
            };
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
};
exports.SeedService = SeedService;
exports.SeedService = SeedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(flight_plan_entity_1.FlightPlan)),
    __param(1, (0, typeorm_1.InjectRepository)(stand_entity_1.Stand)),
    __param(2, (0, typeorm_1.InjectRepository)(stand_assignment_entity_1.StandAssignment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], SeedService);
//# sourceMappingURL=seed.service.js.map