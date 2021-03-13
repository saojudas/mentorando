import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class ModifyUsersTable1603595633824
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'name');
    await queryRunner.dropColumn('users', 'university');
    await queryRunner.dropColumn('users', 'registration');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'name',
        type: 'varchar',
        isNullable: false,
      }),
    );

    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'university',
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'registration',
        type: 'varchar',
        isUnique: true,
      }),
    );
  }
}
