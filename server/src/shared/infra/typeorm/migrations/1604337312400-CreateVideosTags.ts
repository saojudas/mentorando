import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateVideosTags1604337312400
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'videos_tags',
        columns: [
          {
            name: 'video_id',
            type: 'uuid',
          },
          {
            name: 'tag_id',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'Video_FK',
            columnNames: ['video_id'],
            referencedTableName: 'videos',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          {
            name: 'Tag_FK',
            columnNames: ['tag_id'],
            referencedTableName: 'tags',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('videos_tags', 'Video_FK');

    await queryRunner.dropForeignKey('videos_tags', 'Tag_FK');

    await queryRunner.dropTable('videos_tags');
  }
}
