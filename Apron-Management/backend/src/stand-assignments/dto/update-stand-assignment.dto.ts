import { PartialType } from '@nestjs/mapped-types';
import { CreateStandAssignmentDto } from './create-stand-assignment.dto';

export class UpdateStandAssignmentDto extends PartialType(
  CreateStandAssignmentDto,
) {}