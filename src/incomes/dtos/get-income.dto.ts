import { Income } from './../entities/income.entity';
import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dto/output.dto';


@InputType()
export class GetIncomeInput extends PickType(Income, ['id']) {}

@ObjectType()
export class GetIncomeOutput extends CoreOutput {
  @Field((type) => Income, { nullable: true })
  income?: Income;
}
