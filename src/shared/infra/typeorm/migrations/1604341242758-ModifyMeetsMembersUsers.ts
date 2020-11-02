import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class ModifyMeetsMembersUsers1604341242758
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('meets_members_users', 'Meet_FK');

    await queryRunner.dropForeignKey('meets_members_users', 'User_FK');

    await queryRunner.changeColumn(
      'meets_members_users',
      'meetsId',
      new TableColumn({
        name: 'meet_id',
        type: 'uuid',
      }),
    );

    await queryRunner.changeColumn(
      'meets_members_users',
      'usersId',
      new TableColumn({
        name: 'user_id',
        type: 'uuid',
      }),
    );

    await queryRunner.renameTable('meets_members_users', 'meets_members');

    await queryRunner.createForeignKey(
      'meets_members',
      new TableForeignKey({
        name: 'Meet_FK',
        columnNames: ['meet_id'],
        referencedTableName: 'meets',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'meets_members',
      new TableForeignKey({
        name: 'User_FK',
        columnNames: ['user_id'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('meets_members', 'Meet_FK');

    await queryRunner.dropForeignKey('meets_members', 'User_FK');

    await queryRunner.changeColumn(
      'meets_members',
      'meet_id',
      new TableColumn({
        name: 'meetsId',
        type: 'uuid',
      }),
    );

    await queryRunner.changeColumn(
      'meets_members',
      'user_id',
      new TableColumn({
        name: 'usersId',
        type: 'uuid',
      }),
    );

    await queryRunner.renameTable('meets_members', 'meets_members_users');

    await queryRunner.createForeignKey(
      'meets_members_users',
      new TableForeignKey({
        name: 'Meet_FK',
        columnNames: ['meetsId'],
        referencedTableName: 'meets',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }),
    );

    await queryRunner.createForeignKey(
      'meets_members_users',
      new TableForeignKey({
        name: 'User_FK',
        columnNames: ['usersId'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }),
    );
  }
}
