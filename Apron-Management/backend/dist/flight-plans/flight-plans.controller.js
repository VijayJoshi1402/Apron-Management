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
exports.FlightPlansController = void 0;
const common_1 = require("@nestjs/common");
const flight_plans_service_1 = require("./flight-plans.service");
const create_flight_plan_dto_1 = require("./dto/create-flight-plan.dto");
const update_flight_plan_dto_1 = require("./dto/update-flight-plan.dto");
let FlightPlansController = class FlightPlansController {
    flightPlansService;
    constructor(flightPlansService) {
        this.flightPlansService = flightPlansService;
    }
    findAll(query) {
        return this.flightPlansService.findAll(query);
    }
    findOne(id) {
        return this.flightPlansService.findOne(+id);
    }
    findLinkedFlights(id) {
        return this.flightPlansService.findLinkedFlights(+id);
    }
    create(dto) {
        return this.flightPlansService.create(dto);
    }
    update(id, dto) {
        return this.flightPlansService.update(+id, dto);
    }
};
exports.FlightPlansController = FlightPlansController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FlightPlansController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightPlansController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/linked'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightPlansController.prototype, "findLinkedFlights", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_flight_plan_dto_1.CreateFlightPlanDto]),
    __metadata("design:returntype", void 0)
], FlightPlansController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_flight_plan_dto_1.UpdateFlightPlanDto]),
    __metadata("design:returntype", void 0)
], FlightPlansController.prototype, "update", null);
exports.FlightPlansController = FlightPlansController = __decorate([
    (0, common_1.Controller)('flight-plans'),
    __metadata("design:paramtypes", [flight_plans_service_1.FlightPlansService])
], FlightPlansController);
//# sourceMappingURL=flight-plans.controller.js.map