import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class ModifyStudentsFieldIsAdvisor1604281857053
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'students',
      'is_advisor',
      new TableColumn({
        name: 'is_advisor',
        type: 'boolean',
        isNullable: false,
        default: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'students',
      'is_advisor',
      new TableColumn({
        name: 'is_advisor',
        type: 'varchar',
        isNullable: false,
        default: false,
      }),
    );
  }
}
