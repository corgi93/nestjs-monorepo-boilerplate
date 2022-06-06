import { EntityService } from '@libs/entity/src';
import { Controller, Get } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';

@Controller()
export class AuthServiceController {
  constructor(
    private readonly authServiceService: AuthServiceService,
    private readonly entityService: EntityService,
  ) {}

  @Get('/auth')
  getHello(): string {

    return `auth:${this.authServiceService.getHello()} : ${this.entityService.test()}`;
  }
}
