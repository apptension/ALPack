import { MigrationInterface, QueryRunner } from "typeorm";

export class Auth1691073838784 implements MigrationInterface {
    name = 'Auth1691073838784'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "accounts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid NOT NULL, "type" character varying NOT NULL, "provider" character varying NOT NULL, "providerAccountId" character varying NOT NULL, "refresh_token" character varying, "access_token" character varying, "expires_at" bigint, "token_type" character varying, "scope" character varying, "id_token" character varying, "session_state" character varying, CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sessions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "sessionToken" character varying NOT NULL, "userId" uuid NOT NULL, "expires" character varying NOT NULL, CONSTRAINT "UQ_8b5e2ec52e335c0fe16d7ec3584" UNIQUE ("sessionToken"), CONSTRAINT "PK_3238ef96f18b355b671619111bc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "email" character varying, "emailVerified" character varying, "image" character varying, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "verification_tokens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "token" character varying NOT NULL, "identifier" character varying NOT NULL, "expires" character varying NOT NULL, CONSTRAINT "PK_f2d4d7a2aa57ef199e61567db22" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD CONSTRAINT "FK_3aa23c0a6d107393e8b40e3e2a6" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD CONSTRAINT "FK_57de40bc620f456c7311aa3a1e6" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sessions" DROP CONSTRAINT "FK_57de40bc620f456c7311aa3a1e6"`);
        await queryRunner.query(`ALTER TABLE "accounts" DROP CONSTRAINT "FK_3aa23c0a6d107393e8b40e3e2a6"`);
        await queryRunner.query(`DROP TABLE "verification_tokens"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "sessions"`);
        await queryRunner.query(`DROP TABLE "accounts"`);
    }

}
