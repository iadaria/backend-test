import { Account } from 'src/accounts/entities/account.entity';
import { Field, Float, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, ManyToOne } from "typeorm";
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@InputType('IncomeInputType', { isAbstract: true })
@ObjectType()
//@Entity("Incomes")
@Entity()
export class Income extends CoreEntity {

    @Field((type) => Account, { nullable: true })
    @ManyToOne((type) => Account, (account) => account.incomes, {
        onDelete: 'SET NULL',
        nullable: true,
        eager: true,
    })
    account?: Account;

    @Column({ nullable: true })
    @Field((type) => String)
    @IsString()
    type: string | null;

    @Column({ nullable: true })
    @Field((type) => String)
    @IsString()
    fund: string | null;

    @Column()
    @Field((type) => Float)
    @IsNumber()
    amount: number;

    @Column({nullable: true, default: () => "false" })
    @Field((type) => Boolean)
    @IsBoolean()
    isOld: boolean | null;

    @Column({ nullable: true })
    @Field((type) => Int)
    @IsNumber()
    stableScoreId: number | null;

    @Column({  nullable: true })
    @Field((type) => Int)
    @IsNumber()
    groupId: number | null;

    @Column({  default: () => "false" })
    @Field((type) => Boolean)
    @IsBoolean()
    isNewStableScore: boolean;

    @Column({ nullable: true })
    @Field((type) => Int)
    @IsNumber()
    newStableScoreId: number | null;

    @Column({  nullable: true })
    @Field((type) => String)
    @IsString()
    payId: string | null;
}
