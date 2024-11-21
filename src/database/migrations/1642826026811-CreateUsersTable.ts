import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1642826026811 implements MigrationInterface {
  name = 'CreateUsersTable1642826026811';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "user" (
        "id" SERIAL PRIMARY KEY,
        "firstName" VARCHAR NOT NULL,
        "lastName" VARCHAR NOT NULL,
        "age" INT NOT NULL,
        "gender" VARCHAR NOT NULL,
        "problems" BOOLEAN DEFAULT false
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "user";');
  }
}
