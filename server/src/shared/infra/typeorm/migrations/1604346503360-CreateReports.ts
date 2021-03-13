import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateReports1604346503360 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'reports',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'subject_matter',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'report_date',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'start_hour',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'end_hour',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'advisor_id',
            type: 'uuid',
            isNullable: false,
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
            columnNames: ['advisor_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'students',
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('reports', 'Student_FK');

    await queryRunner.dropTable('reports');
  }
}
