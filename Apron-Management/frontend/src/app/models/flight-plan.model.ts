export interface FlightPlan {
  id: number;

  ifplid: string;

  flightId: string;

  flightPlanType: string;

  flightPlanAction: string;

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

  aibt: string;

  sta: string;

  aobt: string;

  std: string;
}