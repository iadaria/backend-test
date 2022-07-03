import { Account } from 'src/accounts/entities/account.entity';
import { Income } from './../entities/income.entity';
import { Field, Float, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dto/output.dto';
import { Column } from 'typeorm';


@InputType()
export class GetBalanceInput extends PickType(Account, ['id']) {}

@ObjectType()
export class Balance {
  @Field((type) => Float)
  sum: number;

  @Field((type) => String)
  fund: string;
}

@ObjectType()
export class GetBalanceOutput extends CoreOutput {
  @Field((type) => [Balance])
  balance?: Balance[];
}
