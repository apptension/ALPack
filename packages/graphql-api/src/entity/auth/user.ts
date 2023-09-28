import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import type { Relation } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';

import { UserRole } from '../../types';
import { transformer } from './utils';
import { AccountEntity } from './account';
import { SessionEntity } from './session';

@Entity({ name: 'users' })
@ObjectType()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id!: string;

  @Column({ type: 'varchar', nullable: true })
  @Field(() => String, { nullable: false })
  name!: string | null;

  @Column({ type: 'varchar', nullable: true, unique: true })
  @Field(() => String, { nullable: false })
  email!: string | null;

  @Column({ type: 'varchar', nullable: true, transformer: transformer.date })
  emailVerified!: string | null;

  @Column({ type: 'varchar', nullable: true })
  image!: string | null;

  @OneToMany(() => SessionEntity, (session) => session.userId)
  sessions!: Relation<SessionEntity[]>;

  @OneToMany(() => AccountEntity, (account) => account.userId)
  accounts!: Relation<AccountEntity[]>;

  @Column({ type: 'varchar', nullable: false, default: UserRole.USER })
  role: UserRole;
}
