import { Field, Float, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from './../../common/entities/core.entity';
import { Column, Entity } from "typeorm";
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@InputType('IncomeInputType', { isAbstract: true })
@ObjectType()
@Entity("Incomes")
export class Incomes extends CoreEntity {

    @Column("integer", { name: "account_id", nullable: true })
    accountId: number | null;

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
