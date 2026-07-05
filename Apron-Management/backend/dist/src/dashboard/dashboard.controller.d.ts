import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getDashboard(): Promise<{
        totalFlights: number;
        arrivals: number;
        departures: number;
        availableStands: number;
    }>;
}
