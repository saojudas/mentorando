import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateReportsStudents1604346854038
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'reports_students',
        columns: [
          {
            name: 'report_id',
            type: 'uuid',
          },
          {
            name: 'student_id',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'Report_FK',
            columnNames: ['report_id'],
            referencedTableName: 'reports',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
          },
          {
            name: 'Student_FK',
            columnNames: ['student_id'],
            referencedTableName: 'students',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('reports_students', 'Report_FK');

    await queryRunner.dropForeignKey('reports_students', 'Student_FK');

    await queryRunner.dropTable('reports_students');
  }
}
