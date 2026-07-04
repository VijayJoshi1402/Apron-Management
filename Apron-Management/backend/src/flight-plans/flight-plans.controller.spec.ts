import { Test, TestingModule } from '@nestjs/testing';
import { FlightPlansController } from './flight-plans.controller';

describe('FlightPlansController', () => {
  let controller: FlightPlansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlightPlansController],
    }).compile();

    controller = module.get<FlightPlansController>(FlightPlansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
