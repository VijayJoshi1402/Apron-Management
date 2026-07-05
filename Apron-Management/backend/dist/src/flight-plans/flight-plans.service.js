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
exports.FlightPlansService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const flight_plan_entity_1 = require("./entities/flight-plan.entity");
let FlightPlansService = class FlightPlansService {
    flightPlanRepository;
    constructor(flightPlanRepository) {
        this.flightPlanRepository = flightPlanRepository;
    }
    async findAll(query) {
        const { search, flightPlanType, originDateFrom, originDateTo, } = query;
        const queryBuilder = this.flightPlanRepository.createQueryBuilder('flight');
        if (search) {
            queryBuilder.andWhere(`(
            flight.calculatedCallsign ILIKE :search
            OR flight.carrier ILIKE :search
            OR flight.flightNumber ILIKE :search
            OR flight.adep ILIKE :search
            OR flight.ades ILIKE :search
        )`, {
                search: `%${search}%`,
            });
        }
        if (flightPlanType) {
            queryBuilder.andWhere('flight.flightPlanType = :flightPlanType', {
                flightPlanType,
            });
        }
        if (originDateFrom && originDateTo) {
            queryBuilder.andWhere('flight.originDate BETWEEN :from AND :to', {
                from: originDateFrom,
                to: originDateTo,
            });
        }
        return queryBuilder
            .orderBy('flight.created', 'DESC')
            .getMany();
    }
    async findOne(id) {
        const flight = await this.flightPlanRepository.findOne({
            where: {
                id,
            },
        });
        if (!flight) {
            throw new common_1.NotFoundException('Flight Plan not found');
        }
        return flight;
    }
    async findLinkedFlights(id) {
        const flight = await this.findOne(id);
        if (!flight.linkedFlightId) {
            return [];
        }
        return this.flightPlanRepository.find({
            where: {
                linkedFlightId: flight.linkedFlightId,
            },
        });
    }
    async create(dto) {
        const flight = this.flightPlanRepository.create(dto);
        return this.flightPlanRepository.save(flight);
    }
    async update(id, dto) {
        const flight = await this.findOne(id);
        Object.assign(flight, dto);
        return this.flightPlanRepository.save(flight);
    }
};
exports.FlightPlansService = FlightPlansService;
exports.FlightPlansService = FlightPlansService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(flight_plan_entity_1.FlightPlan)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FlightPlansService);
//# sourceMappingURL=flight-plans.service.js.map