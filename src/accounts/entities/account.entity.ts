import { Income } from 'src/incomes/entities/income.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany} from "typeorm";
import { IsBoolean, IsEmail, IsString } from 'class-validator';

@InputType('AccountInputType', { isAbstract: true })
@ObjectType()
//@Entity("Accounts")
@Entity()
export class Account extends CoreEntity {

    @Column()
    @Field((type) => String)
    @IsEmail()
    email: string | null;

    @Column()
    @Field((type) => String)
    @IsString()
    name: string | null;

    @Column()
    @Field((type) => String)
    @IsString()
    password: string | null;

    @Column({ default: () => "false", })
    @Field((type) => Boolean)
    @IsBoolean()
    emailIsVerified: boolean;

    @Column()
    @Field((type) => String)
    phone: string | null;

    @Field((type) => [Income]) //graphql syntax
    @OneToMany((type) => Income, (income) => income.account)
    incomes: Income[];
}
