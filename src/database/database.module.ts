import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import * as dotenv from 'dotenv';

// Загружаем переменные окружения из .env файла
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,         
      port: parseInt(process.env.DB_PORT),  
      username: process.env.DB_USERNAME,  
      password: process.env.DB_PASSWORD,  
      database: process.env.DB_DATABASE,  
      entities: [User],
      synchronize: false,
      migrations: [__dirname + '/../migrations/*.{ts,js}'],
      logging: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
