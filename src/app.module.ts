  import { Module } from '@nestjs/common';
  import { TypeOrmModule } from '@nestjs/typeorm';
  import { EventsModule } from './events/events.module';
  import { UsersModule } from './users/users.module';
  import { TicketsModule } from './tickets/tickets.module';
  import { EventImagesModule } from './event-images/event-images.module';
  import { ConfigModule } from '@nestjs/config';

  @Module({
    imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [/* ваші ентіті */],
        synchronize: true, // Вимкніть у продакшн середовищі
      }),
      EventsModule,
      UsersModule,
      TicketsModule,
      EventImagesModule,
    ],
  })
  export class AppModule {}
