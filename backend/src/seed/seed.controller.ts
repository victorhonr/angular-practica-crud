import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SeedService } from './seed.service';

@ApiTags('seed') // This tag is used to group endpoints related to seeding.
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  @ApiOperation({
    summary: 'Populate the database with initial data',
    description: 'Triggers the seeding of the database with predefined data.',
  })
  @ApiResponse({
    status: 200,
    description: 'Database populated successfully',
  })
  @ApiResponse({
    status: 500,
    description: 'Error while populating the database',
  })
  populateDB() {
    return this.seedService.populateDB();
  }
}
