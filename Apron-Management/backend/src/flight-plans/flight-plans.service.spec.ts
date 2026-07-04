import { Test, TestingModule } from '@nestjs/testing';
import { FlightPlansService } from './flight-plans.service';

describe('FlightPlansService', () => {
  let service: FlightPlansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlightPlansService],
    }).compile();

    service = module.get<FlightPlansService>(FlightPlansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
