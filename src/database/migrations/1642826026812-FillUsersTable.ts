import { MigrationInterface, QueryRunner } from 'typeorm';

export class FillUsersTable1642826026812 implements MigrationInterface {
  name = 'FillUsersTable1642826026812';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const usersCount = 1000000;  // Количество пользователей
    const batchSize = 1000;      // Размер одной партии

    let query = 'INSERT INTO "user" ("firstName", "lastName", "age", "gender", "problems") VALUES ';
    const values: string[] = [];

    for (let i = 0; i < usersCount; i++) {
      const firstName = `Name${i}`;
      const lastName = `LastName${i}`;
      const age = Math.floor(Math.random() * 50) + 18;  
      const gender = Math.random() > 0.5 ? 'male' : 'female';  
      const problems = Math.random() > 0.5;  

      values.push(`('${firstName}', '${lastName}', ${age}, '${gender}', ${problems})`);

      if (values.length === batchSize) {
        await queryRunner.query(query + values.join(', '));  // Выполняем запрос на вставку
        values.length = 0;  // Очистка массива для следующего батча
      }
    }

    // Вставка оставшихся пользователей, если они есть
    if (values.length > 0) {
      await queryRunner.query(query + values.join(', '));
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM "user"');  // Удаляем все записи из таблицы user
  }
}
