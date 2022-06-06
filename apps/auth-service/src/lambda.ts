import { NestFactory } from '@nestjs/core';
import { Handler, Context, Callback } from 'aws-lambda';
import { AuthServiceModule } from './auth-service.module';
import serverlessExpress from '@vendia/serverless-express';

let server: Handler;
async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AuthServiceModule);
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
