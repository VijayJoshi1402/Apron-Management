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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandAssignment = void 0;
const typeorm_1 = require("typeorm");
const flight_plan_entity_1 = require("../../flight-plans/entities/flight-plan.entity");
const stand_entity_1 = require("../../stands/entities/stand.entity");
let StandAssignment = class StandAssignment {
    id;
    flightPlan;
    stand;
    flightPlanId;
    standCode;
    fromTime;
    toTime;
    remarks;
};
exports.StandAssignment = StandAssignment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StandAssignment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => flight_plan_entity_1.FlightPlan, {
        eager: true,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'flightPlanId' }),
    __metadata("design:type", flight_plan_entity_1.FlightPlan)
], StandAssignment.prototype, "flightPlan", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => stand_entity_1.Stand, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'standCode' }),
    __metadata("design:type", stand_entity_1.Stand)
], StandAssignment.prototype, "stand", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], StandAssignment.prototype, "flightPlanId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StandAssignment.prototype, "standCode", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], StandAssignment.prototype, "fromTime", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], StandAssignment.prototype, "toTime", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], StandAssignment.prototype, "remarks", void 0);
exports.StandAssignment = StandAssignment = __decorate([
    (0, typeorm_1.Entity)('stand_assignments')
], StandAssignment);
//# sourceMappingURL=stand-assignment.entity.js.map