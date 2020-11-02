import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class ModifyStudentsTable1604274738265
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'students',
      new TableColumn({
        name: 'teacher_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'students',
      new TableForeignKey({
        name: 'Teacher_FK',
        columnNames: ['teacher_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'teachers',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('students', 'Teacher_FK');

    await queryRunner.dropColumn('students', 'teacher_id');
  }
}
