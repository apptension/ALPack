import { MigrationInterface, QueryRunner } from "typeorm";

export class CRUDItem1691147491946 implements MigrationInterface {
    name = 'CRUDItem1691147491946'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "crud_item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, CONSTRAINT "PK_ef15b8147ddde62c883cb591d49" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "crud_item"`);
    }

}
