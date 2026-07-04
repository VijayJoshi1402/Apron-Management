import { Test, TestingModule } from '@nestjs/testing';
import { StandAssignmentsService } from './stand-assignments.service';

describe('StandAssignmentsService', () => {
  let service: StandAssignmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StandAssignmentsService],
    }).compile();

    service = module.get<StandAssignmentsService>(StandAssignmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
