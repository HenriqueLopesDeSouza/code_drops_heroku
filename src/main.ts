import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '',
    allowedHeaders: '',
    methods: '*',
  });

  const config = new DocumentBuilder()
  .setTitle('Users example')
  .setDescription('The users API description')
  .setVersion('1.0')
  .addTag('users')
  .build();


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
