import { CoreEntity } from './../../common/entities/core.entity';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity} from "typeorm";
import { IsBoolean, IsEmail, IsString } from 'class-validator';

@InputType('AccountInputType', { isAbstract: true })
@ObjectType()
@Entity("Accounts")
export class Accounts extends CoreEntity {

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

    @Column({ name: "email_is_verified", default: () => "false", })
    @Field((type) => Boolean)
    @IsBoolean()
    emailIsVerified: boolean;

    @Column()
    @Field((type) => String)
    phone: string | null;
}
