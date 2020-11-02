import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateMeetMembersUsersTable1604292758004
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'meets_members_users',
        columns: [
          {
            name: 'meetsId',
            type: 'uuid',
          },
          {
            name: 'usersId',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'Meet_FK',
            columnNames: ['meetsId'],
            referencedTableName: 'meets',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
          {
            name: 'User_FK',
            columnNames: ['usersId'],
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
    await queryRunner.dropForeignKey('meets_members_users', 'Meet_FK');
    await queryRunner.dropForeignKey('meets_members_users', 'User_FK');
    await queryRunner.dropTable('meets_members_users');
  }
}
