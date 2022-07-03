import { GetBalanceOutput, GetBalanceInput } from './dtos/get-balance.dto';
import { GetIncomeInput, GetIncomeOutput } from './dtos/get-income.dto';
import { IncomesService } from './incomes.service';
import { Income } from './entities/income.entity';
import { Args, Query, Resolver, Int } from '@nestjs/graphql';


@Resolver((of) => Income)
export class IncomesResolver {
    constructor(private readonly incomeService: IncomesService) {}

    @Query(returns => GetIncomeOutput)
    async getIncome(@Args('input') getIncomeInput: GetIncomeInput): Promise<GetIncomeOutput> {
        return this.incomeService.findOneById(getIncomeInput);
    }

    @Query(returns => GetBalanceOutput)
    async getBalance(@Args('input') getBalanceInput: GetBalanceInput): Promise<GetBalanceOutput> {
        return this.incomeService.getBalanceByUser(getBalanceInput);
    }
}
