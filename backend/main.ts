import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import * as swaggerUi from 'swagger-ui-express';
import { AppModule } from './src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = [
    'http://localhost:4200', // URL dev Angular
    // 'https://example.com',    // Future prod endpoint
  ];

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API Proyecto Angular CRUD')
    .setDescription('La API para gestionar los endpoints de cars')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(document));

  // Guardar el archivo Swagger JSON localmente
  fs.writeFileSync('./swagger.json', JSON.stringify(document, null, 2));

  console.log('El archivo Swagger JSON se ha guardado en swagger.json');

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
