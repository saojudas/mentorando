import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCandidates1604275695803
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'candidates',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'student_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'teacher_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'aprovement',
            type: 'boolean',
            default: false,
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'Student_FK',
            columnNames: ['student_id'],
            referencedTableName: 'students',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          {
            name: 'Teacher_FK',
            columnNames: ['teacher_id'],
            referencedTableName: 'teachers',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('candidates', 'Student_FK');
    await queryRunner.dropForeignKey('candidates', 'Teacher_FK');

    await queryRunner.dropTable('candidates');
  }
}
