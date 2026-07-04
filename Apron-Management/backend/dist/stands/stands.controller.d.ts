import { StandsService } from './stands.service';
export declare class StandsController {
    private readonly standsService;
    constructor(standsService: StandsService);
    findAll(): Promise<import("./entities/stand.entity").Stand[]>;
    findOne(stand: string): Promise<import("./entities/stand.entity").Stand | null>;
}
