"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlightPlanDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_flight_plan_dto_1 = require("./create-flight-plan.dto");
class UpdateFlightPlanDto extends (0, mapped_types_1.PartialType)(create_flight_plan_dto_1.CreateFlightPlanDto) {
}
exports.UpdateFlightPlanDto = UpdateFlightPlanDto;
//# sourceMappingURL=update-flight-plan.dto.js.map