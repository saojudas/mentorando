import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateMeet1604289673211 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'meets',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'meet_link',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'date_meet',
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
            name: 'organizer_id',
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
            name: 'User_FK',
            columnNames: ['organizer_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('meets');
  }
}
