import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  // handle all user input validation globally
  app.useGlobalPipes(new ValidateInputPipe());
  app.use(bodyParser.json({ limit: '5mb' }));
  await app.listen(process.env.PORT, '0.0.0.0', () =>
    console.log(`Server running on ${process.env.PORT}`),
  );
}
bootstrap();
