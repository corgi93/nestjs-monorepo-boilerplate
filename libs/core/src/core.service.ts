import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
    getEntity(): string {
        return 'entity lib test';
      }
}
