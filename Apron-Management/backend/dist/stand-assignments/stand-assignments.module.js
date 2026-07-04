"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandAssignmentsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const flight_plan_entity_1 = require("../flight-plans/entities/flight-plan.entity");
const stand_entity_1 = require("../stands/entities/stand.entity");
const stand_assignment_entity_1 = require("./entities/stand-assignment.entity");
const stand_assignments_controller_1 = require("./stand-assignments.controller");
const stand_assignments_service_1 = require("./stand-assignments.service");
let StandAssignmentsModule = class StandAssignmentsModule {
};
exports.StandAssignmentsModule = StandAssignmentsModule;
exports.StandAssignmentsModule = StandAssignmentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                stand_assignment_entity_1.StandAssignment,
                flight_plan_entity_1.FlightPlan,
                stand_entity_1.Stand,
            ]),
        ],
        controllers: [stand_assignments_controller_1.StandAssignmentsController],
        providers: [stand_assignments_service_1.StandAssignmentsService],
    })
], StandAssignmentsModule);
//# sourceMappingURL=stand-assignments.module.js.map