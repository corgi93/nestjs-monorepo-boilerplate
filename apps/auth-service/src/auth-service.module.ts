import { EntityService } from '@libs/entity/src';
import { Module } from '@nestjs/common';
import { AuthServiceController } from './auth-service.controller';
import { AuthServiceService } from './auth-service.service';

@Module({
  imports: [],
  controllers: [AuthServiceController],
  providers: [AuthServiceService , EntityService],
})
export class AuthServiceModule {}
