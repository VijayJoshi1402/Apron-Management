"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightPlansModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const flight_plans_controller_1 = require("./flight-plans.controller");
const flight_plans_service_1 = require("./flight-plans.service");
const flight_plan_entity_1 = require("./entities/flight-plan.entity");
let FlightPlansModule = class FlightPlansModule {
};
exports.FlightPlansModule = FlightPlansModule;
exports.FlightPlansModule = FlightPlansModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([flight_plan_entity_1.FlightPlan])],
        controllers: [flight_plans_controller_1.FlightPlansController],
        providers: [flight_plans_service_1.FlightPlansService],
        exports: [flight_plans_service_1.FlightPlansService],
    })
], FlightPlansModule);
//# sourceMappingURL=flight-plans.module.js.map