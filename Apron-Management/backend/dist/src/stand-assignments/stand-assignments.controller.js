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
exports.StandAssignmentsController = void 0;
const common_1 = require("@nestjs/common");
const create_stand_assignment_dto_1 = require("./dto/create-stand-assignment.dto");
const stand_assignments_service_1 = require("./stand-assignments.service");
let StandAssignmentsController = class StandAssignmentsController {
    assignmentService;
    constructor(assignmentService) {
        this.assignmentService = assignmentService;
    }
    findAll() {
        return this.assignmentService.findAll();
    }
    create(dto) {
        return this.assignmentService.create(dto);
    }
};
exports.StandAssignmentsController = StandAssignmentsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StandAssignmentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_stand_assignment_dto_1.CreateStandAssignmentDto]),
    __metadata("design:returntype", void 0)
], StandAssignmentsController.prototype, "create", null);
exports.StandAssignmentsController = StandAssignmentsController = __decorate([
    (0, common_1.Controller)('stand-assignments'),
    __metadata("design:paramtypes", [stand_assignments_service_1.StandAssignmentsService])
], StandAssignmentsController);
//# sourceMappingURL=stand-assignments.controller.js.map