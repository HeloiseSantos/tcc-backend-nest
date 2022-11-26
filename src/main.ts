/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*'
  });
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // não deixa ser passada qualquer informação que não seja o que já está estabelecido na classe dto
    forbidNonWhitelisted: true, // devolve mensagem de erro e não permite que seja enviado na requisição qualquer propriedade que não esteja estabelecida na classe dto
    transform: true // define o tipo dos dados da requisição como o tipo do dto - transforma os dados que chegarem, tipando o objeto com o dto
  }));
  await app.listen(3000);
}
bootstrap();
