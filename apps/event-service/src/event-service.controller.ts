import { EntityService } from '@libs/entity/src';
import { Controller, Get } from '@nestjs/common';
import { EventServiceService } from './event-service.service';

@Controller()
export class EventServiceController {
  constructor(
    private readonly eventServiceService: EventServiceService,
    private readonly entityService: EntityService,
  ) {}

  @Get('/event')
  getHello(): string {
    return `event controller:: ${this.entityService.getEntity()}`;
  }
}