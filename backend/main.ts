import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import * as swaggerUi from 'swagger-ui-express';
import { AppModule } from './src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = [
    'http://localhost:4200', // Angular dev URL
    'http://localhost:3000', // Angular dev URL
    // 'https://example.com',    // Future prod endpoint
  ];

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Angular CRUD Project API')
    .setDescription('API for managing car and brand endpoints')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(document));

  // Save Swagger JSON file locally
  fs.writeFileSync('./swagger.json', JSON.stringify(document, null, 2));

  console.log('The Swagger JSON file has been saved as swagger.json');

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
