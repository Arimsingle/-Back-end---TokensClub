import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './shared/exception-filter/http-exception.filter';
import { MyLogger } from './shared/logger/logger.service';
declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new MyLogger(),
  });
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
