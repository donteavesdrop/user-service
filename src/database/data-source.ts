import { DataSource } from 'typeorm';
import { User } from '../user/user.entity';
import * as dotenv from 'dotenv';

// Загружаем переменные окружения из .env файла
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,        
  port: parseInt(process.env.DB_PORT), 
  username: process.env.DB_USERNAME,  
  password: process.env.DB_PASSWORD,  
  database: process.env.DB_DATABASE,  
  entities: [User],
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  synchronize: false,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Соединение с базой данных успешно установлено!');
  })
  .catch((err) => {
    console.error('Ошибка подключения к базе данных:', err);
  });
