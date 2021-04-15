import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  // handle all user input validation globally
  app.useGlobalPipes(new ValidateInputPipe());
  // app.use(bodyParser.json({ limit: '5mb' }));
  // app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
  await app.listen(process.env.PORT, () =>
    console.log(`Server running on ${process.env.PORT}`),
  );
}
bootstrap();
