import { EntityService } from '@libs/entity/src';
import { Module } from '@nestjs/common';
import { EventServiceController } from './event-service.controller';
import { EventServiceService } from './event-service.service';

@Module({
  imports: [],
  controllers: [EventServiceController],
  providers: [EventServiceService, EntityService],
})
export class EventServiceModule {}
