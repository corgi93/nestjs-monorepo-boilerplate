import { Injectable } from '@nestjs/common';

@Injectable()
export class EventServiceService {
  getHello(): string {
    return 'get event!';
  }
}
