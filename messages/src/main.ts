import { NestFactory } from '@nestjs/core';
import { MessageModule } from './message';

async function bootstrap() {
  const app = await NestFactory.create(MessageModule);
  await app.listen(3000);
}
bootstrap();
