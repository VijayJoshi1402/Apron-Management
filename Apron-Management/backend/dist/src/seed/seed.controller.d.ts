import { SeedService } from './seed.service';
export declare class SeedController {
    private readonly seedService;
    constructor(seedService: SeedService);
    seed(): Promise<{
        success: boolean;
        message: string;
        flightsImported: number;
        standsImported: number;
    }>;
}
