export declare class FlightPlan {
    id: number;
    ifplid: string;
    flightId: string;
    flightPlanType: string;
    flightPlanAction: string;
    created: Date;
    updated: Date;
    linkedFlightId: string;
    linkedFlightPlanType: string;
    originDate: string;
    carrier: string;
    flightNumber: string;
    calculatedCallsign: string;
    aircraftRegistration: string;
    aircraftType: string;
    aircraftTypeIcao: string;
    adep: string;
    ades: string;
    stand: string;
    apron: string;
    terminal: string;
    aibt: Date;
    sta: Date;
    aobt: Date;
    std: Date;
}
