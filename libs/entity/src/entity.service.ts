import { Injectable } from '@nestjs/common';

@Injectable()
export class EntityService {
  getEntity(): string {
    return 'entity lib test';
  }

  test(): string {
    return 'test...!';
  }
}
