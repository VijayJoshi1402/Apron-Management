import { Test, TestingModule } from '@nestjs/testing';
import { StandAssignmentsController } from './stand-assignments.controller';

describe('StandAssignmentsController', () => {
  let controller: StandAssignmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StandAssignmentsController],
    }).compile();

    controller = module.get<StandAssignmentsController>(StandAssignmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
