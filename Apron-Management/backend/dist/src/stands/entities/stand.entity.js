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
exports.Stand = void 0;
const typeorm_1 = require("typeorm");
let Stand = class Stand {
    stand;
    apron;
    terminal;
};
exports.Stand = Stand;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Stand.prototype, "stand", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", Object)
], Stand.prototype, "apron", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", Object)
], Stand.prototype, "terminal", void 0);
exports.Stand = Stand = __decorate([
    (0, typeorm_1.Entity)('stands')
], Stand);
//# sourceMappingURL=stand.entity.js.map