// import { NestFactory } from '@nestjs/core';
// import { EventServiceModule } from './event-service.module';

// async function bootstrap() {
//   const app = await NestFactory.create(EventServiceModule);
//   await app.listen(3000);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { Handler, Context, Callback } from 'aws-lambda';
import { EventServiceModule } from './event-service.module';
import serverlessExpress from '@vendia/serverless-express';

let server: Handler;
async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(EventServiceModule);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

// 람다의 entry handler추가
export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
